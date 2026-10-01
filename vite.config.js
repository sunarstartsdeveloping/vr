import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: 5173,
      host: '127.0.0.1'
    },
    plugins: [
      {
        name: 'claude-review-api',
        configureServer(server) {
          server.middlewares.use('/api/generate-review', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                const data = JSON.parse(body || '{}');
                const { businessName = 'VR Electric', tags = [], customNote = '' } = data;

                const apiKey = process.env.ANTHROPIC_API_KEY || env.ANTHROPIC_API_KEY;

                if (apiKey && apiKey !== 'your_claude_api_key_here' && apiKey.startsWith('sk-ant-')) {
                  // Call Claude API
                  try {
                    const prompt = `Write a natural, authentic, unique 2 to 3 sentence Google review in first person for a local business named "${businessName}".
The customer highlighted these aspects of their experience: ${tags.length > 0 ? tags.join(', ') : 'Great overall service'}.
${customNote ? `The customer also noted: "${customNote}".` : ''}

Rules:
1. Write in natural, warm first-person perspective ("I had...", "The team was...", "We called them...").
2. Exactly 2 to 3 sentences. No more, no less.
3. Keep it sounding genuine, authentic, and conversational like a real happy customer on Google Maps.
4. Each generation MUST be completely different in phrasing, vocabulary, and sentence structure.
5. Return ONLY the review text. Do not include quotation marks, intro/outro, titles, or explanations.`;

                    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': apiKey,
                        'anthropic-version': '2023-06-01'
                      },
                      body: JSON.stringify({
                        model: 'claude-3-5-haiku-20241022',
                        max_tokens: 220,
                        temperature: 0.9,
                        messages: [
                          { role: 'user', content: prompt }
                        ]
                      })
                    });

                    if (anthropicRes.ok) {
                      const anthropicData = await anthropicRes.json();
                      const reviewText = anthropicData.content?.[0]?.text?.trim() || '';
                      if (reviewText) {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({
                          review: reviewText.replace(/^["']|["']$/g, ''),
                          source: 'claude',
                          model: 'claude-3-5-haiku'
                        }));
                        return;
                      }
                    } else {
                      const errText = await anthropicRes.text();
                      console.warn('Anthropic API returned error:', anthropicRes.status, errText);
                    }
                  } catch (apiErr) {
                    console.warn('Failed calling Anthropic API, falling back to smart engine:', apiErr);
                  }
                }

                // Smart local fallback if ANTHROPIC_API_KEY is not yet configured or API is unreachable
                const fallbackReview = generateLocalVariedReview(businessName, tags, customNote);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  review: fallbackReview,
                  source: apiKey ? 'smart_fallback' : 'local_template',
                  notice: apiKey ? null : 'Add ANTHROPIC_API_KEY to .env to use live Claude API generations'
                }));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });
        }
      }
    ]
  };
});

function generateLocalVariedReview(businessName, tags, customNote) {
  const starters = [
    `Really impressed with the service from ${businessName}!`,
    `Had a fantastic experience with ${businessName} today.`,
    `I recently used ${businessName} and couldn't be happier with the outcome.`,
    `Big shoutout to ${businessName} for their outstanding service!`,
    `Called ${businessName} based on local recommendations and they exceeded expectations.`
  ];

  const tagPhrases = {
    'Friendly staff': [
      'The entire team was courteous, polite, and took the time to answer all my questions.',
      'The technicians were respectful, super friendly, and made the whole process easy.',
      'Staff was wonderful to communicate with from start to finish.'
    ],
    'Quick service': [
      'They showed up promptly and finished the work much faster than expected.',
      'The turnaround time was remarkably quick without cutting any corners.',
      'Service was swift, efficient, and saved me a ton of hassle.'
    ],
    'Great quality': [
      'The craftsmanship and attention to detail were top-tier.',
      'The quality of their work is evident, and everything is functioning perfectly.',
      'Extremely neat and professional workmanship that shows real expertise.'
    ],
    'Value for money': [
      'Their pricing was totally fair and transparent with no hidden surprises.',
      'You get exceptional value for what they charge compared to others.',
      'Fair, honest rates for high-caliber work.'
    ],
    'Clean place': [
      'They were very neat and made sure the work area was clean before leaving.',
      'Loved that they respected our space and left everything spotless.',
      'Neat, tidy, and very organized throughout the whole visit.'
    ],
    'On-time arrival': [
      'They arrived right on the dot as scheduled.',
      'Punctual arrival and kept me updated before getting to our location.',
      'Right on time and got straight to work.'
    ]
  };

  const closers = [
    'Would definitely recommend them to anyone needing reliable service!',
    'Will definitely be calling them again in the future. 5 stars!',
    'Highly recommended for anyone looking for honest and dependable professionals.',
    'A trustworthy local team that truly delivers what they promise!'
  ];

  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  const starter = pick(starters);
  const closer = pick(closers);

  let middle = '';
  if (tags && tags.length > 0) {
    const matched = tags
      .map(t => tagPhrases[t] ? pick(tagPhrases[t]) : null)
      .filter(Boolean);
    if (matched.length > 0) {
      middle = matched.slice(0, 2).join(' ');
    }
  }

  if (!middle) {
    middle = 'The team was professional, knowledgeable, and handled everything with great skill.';
  }

  if (customNote && customNote.trim()) {
    return `${starter} ${customNote.trim().replace(/\.?$/, '.')} ${closer}`;
  }

  return `${starter} ${middle} ${closer}`;
}
