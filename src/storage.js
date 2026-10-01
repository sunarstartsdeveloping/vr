// VR Electric QR Review System - Data Management & LocalStorage Engine

const CONFIG_STORAGE_KEY = 'vrelectric_business_config_v1';
const FEEDBACK_STORAGE_KEY = 'vrelectric_private_feedback_v1';
const ANALYTICS_STORAGE_KEY = 'vrelectric_analytics_v1';

export const DEFAULT_CONFIG = {
  businessName: 'VR Electric',
  tagline: 'Licensed Electrical Contractors & Smart Home Solutions',
  industry: 'Electrical Contracting & Smart Automation',
  phone: '+91 98765 43210',
  whatsapp: '+919876543210',
  email: 'service@vrelectric.com',
  address: 'Shop 12, Commercial Plaza, Main Road, New Delhi',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',
  ratingThreshold: 4, // 4-5 stars => Google Review; 1-3 stars => Private Internal Form
  primaryColor: '#2563eb',
  accentColor: '#f59e0b',
  showLogoInQR: true,
  // Pool of unique pre-written reviews with service categories — each customer scan picks a different one
  reviewPool: [
    { text: "Excellent service by VR Electric! The team arrived on time, quickly identified the wiring issue, and fixed it within an hour. Very professional and neat work. Highly recommend their electrical services!", category: "Emergency & Repair" },
    { text: "Called VR Electric for a complete house rewiring job and they did an outstanding job. Fair pricing, no hidden charges, and the electricians were extremely skilled. Will definitely use them again!", category: "House Wiring" },
    { text: "VR Electric installed new switchboards, MCBs, and heavy line cabling at our office. The work quality was top-notch — clean wiring, proper labeling, and they even cleaned up after finishing. 5 stars!", category: "Commercial & Office" },
    { text: "Had an emergency power outage late at night and VR Electric responded within 30 minutes. Their technician was polite, diagnosed the problem fast, and got our power restored safely. Lifesavers!", category: "Emergency & Repair" },
    { text: "Very impressed with VR Electric's smart home automation work. They set up our lighting controls, motorized switches, and fan regulators perfectly. Great knowledge of modern smart electrical systems!", category: "Smart Home" },
    { text: "VR Electric handled our shop's complete electrical setup — from main distribution board to earthing to inverter backup connections. Everything was done per safety standards. Trustworthy and reliable service!", category: "Commercial & Office" },
    { text: "Got our entire flat's old aluminum wiring replaced with heavy copper cabling by VR Electric. The team was careful with our interiors, worked efficiently, and the final result is excellent. Best electricians in town!", category: "House Wiring" },
    { text: "VR Electric did a fantastic job installing our kitchen electrical points, chimney power line, and induction load balancing. Proper earthing, neat conduit work, and very reasonable charges. Very happy customer!", category: "House Wiring" },
    { text: "Hired VR Electric for our new bungalow construction electrical work. From conduit laying to final designer light fittings, everything was handled professionally. On-time delivery and great attention to safety codes!", category: "House Wiring" },
    { text: "VR Electric's team installed our EV charger point at our parking bay. They explained the load requirements clearly, did proper heavy cabling with isolators, and tested charging thoroughly. Very knowledgeable team!", category: "EV & Green Energy" },
    { text: "Our housing society hired VR Electric for a common area lighting and panel upgrade. They completed the project ahead of schedule, used certified materials, and the power efficiency is noticeable. Excellent work!", category: "Commercial & Office" },
    { text: "VR Electric diagnosed and permanently fixed a persistent short circuit and MCB tripping issue that two previous electricians couldn't solve. Methodical and thorough troubleshooting. Finally, peace of mind!", category: "Emergency & Repair" },
    { text: "Superb ceiling fan and chandelier installation work by VR Electric. They took great care with our high ceiling fixtures and balanced the fans perfectly with no wobbling. Courteous staff and fair pricing!", category: "General Electrical" },
    { text: "Installed our inverter and battery backup system through VR Electric. Seamless changeover, proper ventilation advice, and tidy wiring. Great customer service from start to finish!", category: "Emergency & Repair" }
  ]
};

export const INITIAL_SAMPLE_FEEDBACK = [
  {
    id: 'fb-101',
    customerName: 'Rohit Sharma',
    phone: '+91 98112 34567',
    email: 'rohit.s@example.com',
    rating: 2,
    category: 'Technician Arrived Late',
    message: 'The technician came 45 minutes after the scheduled slot without prior update. The work was fine, but the delay messed up my schedule.',
    status: 'In Progress',
    timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
    resolutionNotes: 'Called customer and apologized. Provided 15% discount voucher for next visit.'
  },
  {
    id: 'fb-102',
    customerName: 'Priya Mehta',
    phone: '+91 99201 88921',
    email: 'priya.m@example.com',
    rating: 3,
    category: 'Pricing / Billing Misunderstanding',
    message: 'Work was good, but the extra charges for spare conduits were not explained upfront before installation.',
    status: 'Resolved',
    timestamp: new Date(Date.now() - 3600000 * 72).toISOString(),
    resolutionNotes: 'Manager clarified the bill breakdown; customer satisfied and agreed to rehire.'
  }
];

export const INITIAL_ANALYTICS = {
  totalScans: 148,
  ratingsBreakdown: { 5: 112, 4: 24, 3: 7, 2: 3, 1: 2 },
  redirectedToGoogle: 136,
  internalFeedbackSubmitted: 12,
  history: [
    { type: 'scan', timestamp: new Date(Date.now() - 60000 * 25).toISOString() },
    { type: 'google_redirect', rating: 5, timestamp: new Date(Date.now() - 60000 * 24).toISOString() },
    { type: 'scan', timestamp: new Date(Date.now() - 60000 * 120).toISOString() },
    { type: 'google_redirect', rating: 5, timestamp: new Date(Date.now() - 60000 * 119).toISOString() }
  ]
};

// Storage Helpers
export function getConfig() {
  try {
    const raw = localStorage.getItem(CONFIG_STORAGE_KEY);
    return raw ? { ...DEFAULT_CONFIG, ...JSON.parse(raw) } : { ...DEFAULT_CONFIG };
  } catch (e) {
    console.error('Failed to parse config:', e);
    return { ...DEFAULT_CONFIG };
  }
}

export function saveConfig(newConfig) {
  const merged = { ...getConfig(), ...newConfig };
  localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(merged));
  notifyListeners('config', merged);
  return merged;
}

export function getFeedbackList() {
  try {
    const raw = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [...INITIAL_SAMPLE_FEEDBACK];
  } catch (e) {
    console.error('Failed to parse feedback:', e);
    return [...INITIAL_SAMPLE_FEEDBACK];
  }
}

export function addFeedback(feedback) {
  const list = getFeedbackList();
  const entry = {
    id: 'fb-' + Date.now(),
    timestamp: new Date().toISOString(),
    status: 'New',
    resolutionNotes: '',
    ...feedback
  };
  list.unshift(entry);
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(list));
  
  // Track in analytics
  recordRatingEvent(feedback.rating, false);
  notifyListeners('feedback', list);
  return entry;
}

export function updateFeedbackStatus(id, newStatus, notes = '') {
  const list = getFeedbackList().map(item => {
    if (item.id === id) {
      return { ...item, status: newStatus, resolutionNotes: notes || item.resolutionNotes };
    }
    return item;
  });
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(list));
  notifyListeners('feedback', list);
  return list;
}

export function deleteFeedback(id) {
  const list = getFeedbackList().filter(item => item.id !== id);
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(list));
  notifyListeners('feedback', list);
  return list;
}

export function getAnalytics() {
  try {
    const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    return raw ? { ...INITIAL_ANALYTICS, ...JSON.parse(raw) } : { ...INITIAL_ANALYTICS };
  } catch (e) {
    console.error('Failed to parse analytics:', e);
    return { ...INITIAL_ANALYTICS };
  }
}

export function recordScanEvent() {
  const stats = getAnalytics();
  stats.totalScans = (stats.totalScans || 0) + 1;
  stats.history.unshift({ type: 'scan', timestamp: new Date().toISOString() });
  if (stats.history.length > 100) stats.history.pop();
  localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(stats));
  notifyListeners('analytics', stats);
}

export function recordRatingEvent(rating, isGoogleRedirect) {
  const stats = getAnalytics();
  const r = parseInt(rating, 10) || 5;
  stats.ratingsBreakdown[r] = (stats.ratingsBreakdown[r] || 0) + 1;
  if (isGoogleRedirect) {
    stats.redirectedToGoogle = (stats.redirectedToGoogle || 0) + 1;
    stats.history.unshift({ type: 'google_redirect', rating: r, timestamp: new Date().toISOString() });
  } else {
    stats.internalFeedbackSubmitted = (stats.internalFeedbackSubmitted || 0) + 1;
    stats.history.unshift({ type: 'private_feedback', rating: r, timestamp: new Date().toISOString() });
  }
  if (stats.history.length > 100) stats.history.pop();
  localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(stats));
  notifyListeners('analytics', stats);
}

export function resetAllDataToDefault() {
  localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(DEFAULT_CONFIG));
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_FEEDBACK));
  localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(INITIAL_ANALYTICS));
  notifyListeners('all', {
    config: DEFAULT_CONFIG,
    feedback: INITIAL_SAMPLE_FEEDBACK,
    analytics: INITIAL_ANALYTICS
  });
}

// Simple event bus
const listeners = [];
export function subscribe(fn) {
  listeners.push(fn);
  return () => {
    const idx = listeners.indexOf(fn);
    if (idx > -1) listeners.splice(idx, 1);
  };
}

function notifyListeners(type, data) {
  listeners.forEach(fn => {
    try {
      fn(type, data);
    } catch (e) {
      console.error('Listener error:', e);
    }
  });
}

// Normalize reviews into consistent objects { text: string, category: string }
export function normalizeReviews(reviewPool = []) {
  return reviewPool.map((item, idx) => {
    if (typeof item === 'string') {
      return {
        id: `rev-${idx}`,
        text: item,
        category: 'General Electrical'
      };
    }
    return {
      id: item.id || `rev-${idx}`,
      text: item.text || '',
      category: item.category || 'General Electrical'
    };
  }).filter(r => r.text.trim().length > 0);
}

// Get unique categories from review pool
export function getReviewCategories(reviewPool = []) {
  const norm = normalizeReviews(reviewPool);
  const set = new Set();
  norm.forEach(r => {
    if (r.category) set.add(r.category);
  });
  return ['All Services', ...Array.from(set)];
}
