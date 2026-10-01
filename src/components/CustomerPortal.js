// Google Review Helper - Mobile-First Landing Page
// Flow:
// 1. Business name + logo, "How was your experience?"
// 2. 4-6 tappable multi-select tags (Friendly staff, Quick service, Great quality, Value for money, Clean place, On-time arrival)
// 3. Optional: one-line text input "Anything else you'd like to add?"
// 4. "Generate my review" calls Claude API (server-side with ANTHROPIC_API_KEY)
// 5. Editable textarea with the draft review
// 6. "Copy & open Google Reviews" copies to clipboard & redirects to Google Review URL
// 7. Small hint: "Paste your review and select stars."
// + No star gate/filtering (direct Google link always accessible)
// + Generates QR code pointing to this page

import confetti from 'canvas-confetti';
import QRCode from 'qrcode';
import { getConfig, recordScanEvent, recordRatingEvent } from '../storage.js';

export function renderCustomerPortal(container, options = {}) {
  const config = getConfig();

  // Pre-defined experience tags
  const AVAILABLE_TAGS = [
    { id: 'friendly', label: 'Friendly staff', icon: '🤝' },
    { id: 'quick', label: 'Quick service', icon: '⚡' },
    { id: 'quality', label: 'Great quality', icon: '⭐' },
    { id: 'value', label: 'Value for money', icon: '💰' },
    { id: 'clean', label: 'Clean place', icon: '🧹' },
    { id: 'ontime', label: 'On-time arrival', icon: '⏰' }
  ];

  // State
  let selectedTags = new Set(['friendly', 'quick', 'quality']);
  let customNote = '';
  let generatedReview = '';
  let isGenerating = false;
  let hasGenerated = false;
  let copied = false;
  let qrDataUrl = '';
  let showQrModal = false;

  // Track scan
  if (!options.isSimulated) {
    recordScanEvent();
  }

  // Generate QR code for the review page
  const pageUrl = window.location.origin + window.location.pathname + '?mode=review';
  QRCode.toDataURL(pageUrl, {
    width: 400,
    margin: 2,
    color: { dark: '#0f172a', light: '#ffffff' }
  }).then(url => {
    qrDataUrl = url;
    const qrImg = container.querySelector('#portalQrCodeImg');
    if (qrImg) qrImg.src = url;
  }).catch(err => console.warn('QR generation error:', err));

  function getSelectedTagLabels() {
    return Array.from(selectedTags)
      .map(id => AVAILABLE_TAGS.find(t => t.id === id)?.label)
      .filter(Boolean);
  }

  async function handleGenerateReview() {
    const tags = getSelectedTagLabels();
    if (tags.length === 0 && !customNote.trim()) {
      showToast('Please select at least one tag or add a note.');
      return;
    }

    isGenerating = true;
    render();

    try {
      const res = await fetch('/api/generate-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: config.businessName,
          tags,
          customNote: customNote.trim()
        })
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      generatedReview = data.review || '';
      hasGenerated = true;
      copied = false;
    } catch (err) {
      console.warn('API error, falling back locally:', err);
      generatedReview = fallbackGenerate(config.businessName, tags, customNote);
      hasGenerated = true;
      copied = false;
    } finally {
      isGenerating = false;
      render();

      // Smooth scroll to generated review box
      setTimeout(() => {
        const reviewBox = container.querySelector('#generatedReviewSection');
        if (reviewBox) {
          reviewBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  }

  function render() {
    container.innerHTML = `
      <div class="customer-portal-wrap review-helper-wrap">
        <!-- 1. Business Header -->
        <header class="portal-header">
          <div class="brand-avatar-box">
            <img src="/logo.svg" alt="${esc(config.businessName)} Logo" class="portal-logo" />
            <span class="verified-badge" title="Verified Business">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </span>
          </div>
          <h1 class="portal-business-name">${esc(config.businessName)}</h1>
          <p class="portal-tagline">${esc(config.tagline)}</p>

          <!-- Main Question -->
          <div class="experience-prompt-card">
            <div class="sparkle-icon-badge">✨</div>
            <h2 class="experience-title">How was your experience?</h2>
            <p class="experience-subtext">Tap what you liked, and we'll help draft your Google review in seconds.</p>
          </div>
        </header>

        <!-- 2. Tappable Multi-select Tags -->
        <section class="portal-card helper-interactive-card">
          <div class="tags-section-header">
            <span class="tags-section-title">Select highlights (multi-select):</span>
            <span class="tags-counter-badge">${selectedTags.size} selected</span>
          </div>

          <div class="experience-tags-grid">
            ${AVAILABLE_TAGS.map(tag => {
              const isSelected = selectedTags.has(tag.id);
              return `
                <button 
                  type="button" 
                  class="experience-tag-pill ${isSelected ? 'selected' : ''}" 
                  data-tag-id="${tag.id}"
                >
                  <span class="tag-icon">${tag.icon}</span>
                  <span class="tag-label">${tag.label}</span>
                  <span class="tag-check">${isSelected ? '✓' : '+'}</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- 3. Optional One-line Text Input -->
          <div class="custom-note-group">
            <label for="customerCustomNoteInput" class="custom-note-label">
              Anything else you'd like to add? <span class="optional-tag">(optional)</span>
            </label>
            <input 
              type="text" 
              id="customerCustomNoteInput" 
              class="custom-note-input" 
              placeholder="e.g. Electrician was punctual and fixed the fuse box..." 
              value="${esc(customNote)}"
              maxlength="160"
            />
          </div>

          <!-- 4. "Generate my review" Action Button -->
          <div class="generate-btn-container">
            <button 
              type="button" 
              class="btn-generate-review ${isGenerating ? 'loading' : ''}" 
              id="generateReviewBtn"
              ${isGenerating ? 'disabled' : ''}
            >
              ${isGenerating ? `
                <span class="spinner-ring"></span>
                <span>Writing your review with Claude AI...</span>
              ` : `
                <span class="btn-sparkle">✨</span>
                <span>Generate My Review</span>
              `}
            </button>
          </div>

          <!-- 5. Generated Review in Editable Textarea -->
          ${hasGenerated ? `
            <div class="generated-review-section animate-fade-in" id="generatedReviewSection">
              <div class="generated-header-bar">
                <div class="generated-title-group">
                  <span class="ai-pill-badge">🤖 Draft Ready</span>
                  <span class="edit-hint-label">You can edit the text below:</span>
                </div>
                <button type="button" class="btn-reroll-review" id="rerollReviewBtn" title="Generate another variation with Claude">
                  🔄 Re-roll
                </button>
              </div>

              <div class="review-textarea-wrapper">
                <textarea 
                  id="editableReviewTextarea" 
                  class="editable-review-textarea" 
                  rows="4" 
                  placeholder="Your generated review..."
                >${esc(generatedReview)}</textarea>
                <div class="textarea-actions-bar">
                  <span class="char-count-badge" id="charCountBadge">${generatedReview.length} chars</span>
                  <button type="button" class="btn-copy-mini ${copied ? 'copied' : ''}" id="copyOnlyBtn">
                    ${copied ? '✓ Copied' : '📋 Copy text'}
                  </button>
                </div>
              </div>

              <!-- 6. Button: "Copy & open Google Reviews" -->
              <div class="google-action-container">
                <button type="button" class="btn-copy-open-google" id="copyAndOpenGoogleBtn">
                  <div class="google-icon-wrapper">
                    <svg viewBox="0 0 24 24" width="26" height="26">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                  <div class="google-btn-labels">
                    <strong>Copy & Open Google Reviews</strong>
                    <span>Copies review & launches Google Maps</span>
                  </div>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" class="arrow-forward-icon">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                <!-- 7. Small Hint -->
                <p class="google-paste-hint">
                  <span class="hint-lamp">💡</span>
                  <span><strong>Tip:</strong> Paste your review and select stars on Google.</span>
                </p>
              </div>
            </div>
          ` : ''}

          <!-- Direct Google Link (No Gate / Unfiltered) -->
          <div class="unfiltered-direct-google-row">
            <a href="${esc(config.googleReviewUrl)}" target="_blank" rel="noopener noreferrer" class="direct-google-link" id="directGoogleLink">
              Prefer to write your own review directly on Google? Tap here ↗
            </a>
          </div>
        </section>

        <!-- QR Code Utility Box (Pointing to this page) -->
        <section class="portal-card qr-share-card">
          <div class="qr-share-header">
            <span class="qr-icon-small">📱</span>
            <strong>QR Code for This Review Helper</strong>
            <button type="button" class="btn-toggle-qr-view" id="toggleQrModalBtn">
              ${showQrModal ? 'Hide QR ▲' : 'View QR ▼'}
            </button>
          </div>

          <div class="qr-share-body ${showQrModal ? 'visible' : 'hidden'}">
            <p class="qr-share-caption">Scan with any mobile camera to open this review helper:</p>
            <div class="qr-canvas-preview">
              <img id="portalQrCodeImg" src="${qrDataUrl || ''}" alt="QR Review Helper" class="qr-render-img" />
            </div>
            <div class="qr-actions-row">
              <button type="button" class="btn btn-sm btn-outline" id="downloadHelperQrBtn">
                📥 Download QR PNG
              </button>
              <button type="button" class="btn btn-sm btn-ghost" id="copyHelperUrlBtn">
                🔗 Copy Link
              </button>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="portal-footer">
          <p class="footer-help">Need direct assistance?</p>
          <a href="tel:${config.phone.replace(/[^0-9+]/g, '')}" class="footer-phone-link">
            📞 ${esc(config.phone)}
          </a>
          <div class="powered-by">
            <span>Powered by <strong>${esc(config.businessName)} Review Helper</strong></span>
          </div>
        </footer>
      </div>
    `;

    attachEvents();
  }

  function attachEvents() {
    // Tappable Tags (Multi-select)
    const tagButtons = container.querySelectorAll('.experience-tag-pill');
    tagButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-tag-id');
        if (selectedTags.has(id)) {
          selectedTags.delete(id);
        } else {
          selectedTags.add(id);
        }
        render();
      });
    });

    // Custom Note input
    const noteInput = container.querySelector('#customerCustomNoteInput');
    if (noteInput) {
      noteInput.addEventListener('input', (e) => {
        customNote = e.target.value;
      });
    }

    // Generate Button
    const genBtn = container.querySelector('#generateReviewBtn');
    if (genBtn) {
      genBtn.addEventListener('click', handleGenerateReview);
    }

    // Re-roll Button
    const rerollBtn = container.querySelector('#rerollReviewBtn');
    if (rerollBtn) {
      rerollBtn.addEventListener('click', handleGenerateReview);
    }

    // Textarea sync
    const textarea = container.querySelector('#editableReviewTextarea');
    const charBadge = container.querySelector('#charCountBadge');
    if (textarea) {
      textarea.addEventListener('input', (e) => {
        generatedReview = e.target.value;
        if (charBadge) charBadge.textContent = `${generatedReview.length} chars`;
      });
    }

    // Copy Only Button
    const copyOnlyBtn = container.querySelector('#copyOnlyBtn');
    if (copyOnlyBtn) {
      copyOnlyBtn.addEventListener('click', () => {
        const currentText = textarea ? textarea.value : generatedReview;
        copyToClipboard(currentText);
        copied = true;
        render();
        showToast('Review copied to clipboard! 📋');
      });
    }

    // "Copy & open Google Reviews" Button
    const copyOpenBtn = container.querySelector('#copyAndOpenGoogleBtn');
    if (copyOpenBtn) {
      copyOpenBtn.addEventListener('click', () => {
        const currentText = textarea ? textarea.value.trim() : generatedReview.trim();
        if (!currentText) {
          showToast('Review text is empty.');
          return;
        }

        // 1. Copy text to clipboard
        copyToClipboard(currentText);
        copied = true;

        // 2. Track analytics
        if (!options.isSimulated) {
          recordRatingEvent(5, true);
        }

        // 3. Confetti burst
        triggerConfetti();

        // 4. Toast feedback
        showToast('Copied! Opening Google Reviews...');

        // 5. Open Google Review dialog directly and synchronously
        const targetUrl = config.googleReviewUrl;
        const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
        if (!win || win.closed || typeof win.closed === 'undefined') {
          // Fallback if browser blocked popup window
          window.location.href = targetUrl;
        }
      });
    }

    // Toggle QR Code Card
    const toggleQrBtn = container.querySelector('#toggleQrModalBtn');
    if (toggleQrBtn) {
      toggleQrBtn.addEventListener('click', () => {
        showQrModal = !showQrModal;
        render();
      });
    }

    // Download QR Code
    const downloadQrBtn = container.querySelector('#downloadHelperQrBtn');
    if (downloadQrBtn) {
      downloadQrBtn.addEventListener('click', () => {
        if (!qrDataUrl) return;
        const a = document.createElement('a');
        a.download = `${config.businessName.toLowerCase().replace(/\s+/g, '-')}-review-qr.png`;
        a.href = qrDataUrl;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showToast('QR code downloaded! 📥');
      });
    }

    // Copy helper URL
    const copyUrlBtn = container.querySelector('#copyHelperUrlBtn');
    if (copyUrlBtn) {
      copyUrlBtn.addEventListener('click', () => {
        copyToClipboard(pageUrl);
        showToast('Review link copied! 🔗');
      });
    }
  }

  function triggerConfetti() {
    try {
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.65 }
      });
    } catch (e) { /* noop */ }

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate([30, 40, 30]);
      } catch (e) { /* noop */ }
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'fixed';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand('copy');
    } catch (e) {
      console.warn('execCommand failed:', e);
    }
    document.body.removeChild(el);
  }

  function fallbackGenerate(bizName, tags, note) {
    const openings = [
      `I had an excellent experience with ${bizName}!`,
      `Really glad I contacted ${bizName} for the job.`,
      `Top-notch service from the crew at ${bizName}.`,
      `Outstanding work by ${bizName} from start to finish.`
    ];
    const closings = [
      'Would highly recommend them to anyone in need of quality service!',
      'Will definitely be using their services again in the future.',
      'Trustworthy, reliable, and exceeded my expectations. 5 stars!',
      'A great team that truly delivers quality results.'
    ];

    const pick = arr => arr[Math.floor(Math.random() * arr.length)];
    const opening = pick(openings);
    const closing = pick(closings);

    let middle = 'The team was friendly, quick to resolve our issues, and delivered very neat work.';
    if (tags.length > 0) {
      middle = `The staff was ${tags.map(t => t.toLowerCase()).join(' and ')}, and everything was handled with great care.`;
    }
    if (note && note.trim()) {
      middle += ` ${note.trim().replace(/\.?$/, '.')}`;
    }

    return `${opening} ${middle} ${closing}`;
  }

  function showToast(msg) {
    let toast = document.getElementById('globalAppToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalAppToast';
      toast.className = 'app-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2500);
  }

  function esc(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  render();
}
