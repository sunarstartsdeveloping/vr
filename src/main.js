// VR Electric - Main Application Entrypoint
import './style.css';
import { getConfig, getFeedbackList, subscribe } from './storage.js';
import { renderCustomerPortal } from './components/CustomerPortal.js';
import { renderSimulatorView } from './components/SimulatorView.js';
import { renderQRStudio } from './components/QRStudio.js';
import { renderFeedbackInbox } from './components/FeedbackInbox.js';
import { renderAnalyticsView } from './components/AnalyticsView.js';
import { renderSettingsView } from './components/SettingsView.js';

const app = document.getElementById('app');

// State
let activeTab = 'simulator'; // 'simulator' | 'qr-studio' | 'inbox' | 'analytics' | 'settings'

function isCustomerMode() {
  const params = new URLSearchParams(window.location.search);
  return params.get('mode') === 'review' || window.location.hash === '#review';
}

function init() {
  // Listen for hash or storage changes
  window.addEventListener('popstate', renderApp);
  subscribe(() => {
    // Re-render only if not in direct customer mode to keep user focus
    if (!isCustomerMode()) {
      renderApp();
    }
  });

  renderApp();
}

function renderApp() {
  if (isCustomerMode()) {
    renderStandaloneCustomerMode();
  } else {
    renderAdminHub();
  }
}

function renderStandaloneCustomerMode() {
  const config = getConfig();
  app.innerHTML = `
    <div class="standalone-customer-container">
      <div id="customerPortalMount"></div>
      <div class="customer-bottom-utility">
        <a href="?mode=admin" class="admin-discreet-link" title="Open Business Admin Dashboard">
          ⚙️ Business Owner Hub
        </a>
      </div>
    </div>
  `;

  const mount = document.getElementById('customerPortalMount');
  renderCustomerPortal(mount, { isSimulated: false });
}

function renderAdminHub() {
  const config = getConfig();
  const feedbackList = getFeedbackList();
  const urgentCount = feedbackList.filter(i => i.status === 'New').length;

  app.innerHTML = `
    <!-- Top Bar Navigation -->
    <header class="app-topbar">
      <div class="topbar-inner">
        <div class="brand-ident">
          <img src="/logo.svg" alt="${escapeHtml(config.businessName)}" class="header-logo" />
          <div class="brand-text-block">
            <div class="brand-title-wrap">
              <span class="brand-name">${escapeHtml(config.businessName)}</span>
              <span class="system-badge">QR Review Funnel</span>
            </div>
            <span class="brand-sub">${escapeHtml(config.tagline)}</span>
          </div>
        </div>

        <nav class="nav-tabs-bar" role="tablist">
          <button type="button" class="nav-tab-item ${activeTab === 'simulator' ? 'active' : ''}" data-tab="simulator">
            <span>📱</span> Customer Simulator
          </button>
          <button type="button" class="nav-tab-item ${activeTab === 'qr-studio' ? 'active' : ''}" data-tab="qr-studio">
            <span>📐</span> QR & Print Studio
          </button>
          <button type="button" class="nav-tab-item ${activeTab === 'inbox' ? 'active' : ''}" data-tab="inbox">
            <span>📥</span> Feedback CRM
            ${urgentCount > 0 ? `<span class="tab-badge">${urgentCount}</span>` : ''}
          </button>
          <button type="button" class="nav-tab-item ${activeTab === 'analytics' ? 'active' : ''}" data-tab="analytics">
            <span>📊</span> Analytics
          </button>
          <button type="button" class="nav-tab-item ${activeTab === 'settings' ? 'active' : ''}" data-tab="settings">
            <span>⚙️</span> Settings
          </button>
        </nav>

        <div class="topbar-actions">
          <a href="?mode=review" target="_blank" class="btn btn-outline btn-sm" title="Open live mobile customer URL">
            ↗ Live Customer View
          </a>
        </div>
      </div>
    </header>

    <!-- Main View Mount -->
    <main class="app-main-content">
      <div id="tabContentMount"></div>
    </main>
  `;

  attachNavEvents();
  mountActiveTab();
}

function mountActiveTab() {
  const mount = document.getElementById('tabContentMount');
  if (!mount) return;

  switch (activeTab) {
    case 'simulator':
      renderSimulatorView(mount);
      break;
    case 'qr-studio':
      renderQRStudio(mount);
      break;
    case 'inbox':
      renderFeedbackInbox(mount);
      break;
    case 'analytics':
      renderAnalyticsView(mount);
      break;
    case 'settings':
      renderSettingsView(mount);
      break;
    default:
      renderSimulatorView(mount);
  }
}

function attachNavEvents() {
  const tabBtns = document.querySelectorAll('.nav-tab-item');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      mountActiveTab();
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Start application
init();
