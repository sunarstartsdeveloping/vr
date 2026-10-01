// VR Electric - Interactive Customer Experience Simulator
import { renderCustomerPortal } from './CustomerPortal.js';
import { getConfig } from '../storage.js';

export function renderSimulatorView(container) {
  let isPhoneFrame = true;

  function render() {
    container.innerHTML = `
      <div class="simulator-wrapper">
        <div class="simulator-top-bar">
          <div class="sim-info">
            <h2 class="section-title">Customer Scan Experience Simulator</h2>
            <p class="section-subtitle">
              Test exactly what your customers experience after scanning your QR stand on their mobile phones.
            </p>
          </div>

          <div class="sim-controls">
            <div class="view-toggle-pills">
              <button type="button" class="pill-btn ${isPhoneFrame ? 'active' : ''}" id="togglePhoneFrameBtn">
                📱 iPhone Mockup
              </button>
              <button type="button" class="pill-btn ${!isPhoneFrame ? 'active' : ''}" id="toggleFullWidthBtn">
                🖥️ Full Screen View
              </button>
            </div>
            <button type="button" class="btn btn-primary btn-sm" id="simNewScanBtn" title="Simulates a new customer scanning the QR code, cycling to the next review">
              🔄 Simulate New Scan
            </button>
            <button type="button" class="btn btn-outline-primary btn-sm" id="openRealReviewTabBtn">
              ↗ Open in New Window
            </button>
          </div>
        </div>

        <div class="simulator-stage ${isPhoneFrame ? 'stage-phone-mode' : 'stage-full-mode'}">
          ${isPhoneFrame ? `
            <div class="device-phone-frame">
              <div class="phone-speaker-notch">
                <span class="notch-lens"></span>
                <span class="notch-speaker"></span>
              </div>
              <div class="phone-screen-viewport" id="simulatedScreenArea">
                <!-- Customer portal injected here -->
              </div>
              <div class="phone-home-indicator"></div>
            </div>
          ` : `
            <div class="full-screen-preview-box" id="simulatedScreenArea">
              <!-- Customer portal injected here -->
            </div>
          `}
        </div>
      </div>
    `;

    attachEvents();
    mountPortal();
  }

  function mountPortal() {
    const screen = container.querySelector('#simulatedScreenArea');
    if (screen) {
      renderCustomerPortal(screen, { isSimulated: true });
    }
  }

  function attachEvents() {
    const phoneBtn = container.querySelector('#togglePhoneFrameBtn');
    const fullBtn = container.querySelector('#toggleFullWidthBtn');
    const openTabBtn = container.querySelector('#openRealReviewTabBtn');

    if (phoneBtn) {
      phoneBtn.addEventListener('click', () => {
        isPhoneFrame = true;
        render();
      });
    }

    if (fullBtn) {
      fullBtn.addEventListener('click', () => {
        isPhoneFrame = false;
        render();
      });
    }

    const simScanBtn = container.querySelector('#simNewScanBtn');
    if (simScanBtn) {
      simScanBtn.addEventListener('click', () => {
        mountPortal();
      });
    }

    if (openTabBtn) {
      openTabBtn.addEventListener('click', () => {
        const url = `${window.location.origin}${window.location.pathname}?mode=review`;
        window.open(url, '_blank');
      });
    }
  }

  render();
}
