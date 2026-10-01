// VR Electric - QR Studio & Print Kit Generator
import QRCode from 'qrcode';
import { getConfig, saveConfig } from '../storage.js';

export function renderQRStudio(container) {
  const config = getConfig();

  // QR settings
  let qrColor = '#0f172a';
  let qrBg = '#ffffff';
  let selectedTemplate = 'tent'; // 'tent', 'window', 'invoice'
  let qrDataUrl = '';

  const getReviewUrl = () => {
    // Current deployment or local URL with review mode
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}?mode=review`;
  };

  async function generateQR() {
    const url = getReviewUrl();
    try {
      qrDataUrl = await QRCode.toDataURL(url, {
        errorCorrectionLevel: 'H',
        margin: 2,
        width: 600,
        color: {
          dark: qrColor,
          light: qrBg
        }
      });
      updateTemplatePreview();
    } catch (err) {
      console.error('QR code generation failed:', err);
    }
  }

  function render() {
    container.innerHTML = `
      <div class="qr-studio-wrapper">
        <div class="studio-header">
          <div>
            <h2 class="section-title">QR Code & Marketing Print Studio</h2>
            <p class="section-subtitle">
              Generate crisp, scan-ready QR codes and ready-to-print counter stands & stickers for ${escapeHtml(config.businessName)}.
            </p>
          </div>
          <div class="studio-top-actions">
            <button type="button" class="btn btn-outline" id="copyReviewLinkBtn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
              Copy Customer Review Link
            </button>
            <button type="button" class="btn btn-primary" id="printMarketingCardBtn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
              Print Ready Stand / Card
            </button>
          </div>
        </div>

        <div class="studio-layout-grid">
          <!-- Controls Panel -->
          <div class="studio-controls-card">
            <h3 class="panel-heading">1. Select Marketing Template</h3>
            <div class="template-selector-grid">
              <div class="template-choice ${selectedTemplate === 'tent' ? 'active' : ''}" data-tpl="tent">
                <div class="tpl-icon">📐</div>
                <div class="tpl-info">
                  <strong>Countertop Tent Stand</strong>
                  <span>Best for payment desk & reception</span>
                </div>
              </div>

              <div class="template-choice ${selectedTemplate === 'window' ? 'active' : ''}" data-tpl="window">
                <div class="tpl-icon">🏷️</div>
                <div class="tpl-info">
                  <strong>Store Window / Door Decal</strong>
                  <span>Square sticker for entrance & glass</span>
                </div>
              </div>

              <div class="template-choice ${selectedTemplate === 'invoice' ? 'active' : ''}" data-tpl="invoice">
                <div class="tpl-icon">🧾</div>
                <div class="tpl-info">
                  <strong>Invoice & Service Slip Insert</strong>
                  <span>Handed to customer after completion</span>
                </div>
              </div>
            </div>

            <h3 class="panel-heading mt-4">2. QR Customization</h3>
            <div class="custom-qr-options">
              <div class="form-group">
                <label class="form-label">QR Code Foreground Color</label>
                <div class="color-picker-row">
                  <input type="color" id="qrColorPicker" value="${qrColor}" class="color-input" />
                  <span class="color-code" id="qrColorCode">${qrColor}</span>
                  <div class="quick-swatches">
                    <button type="button" class="swatch-btn" data-color="#0f172a" style="background:#0f172a;" title="Dark Navy"></button>
                    <button type="button" class="swatch-btn" data-color="#2563eb" style="background:#2563eb;" title="Electric Blue"></button>
                    <button type="button" class="swatch-btn" data-color="#059669" style="background:#059669;" title="Emerald Green"></button>
                  </div>
                </div>
              </div>

              <div class="target-url-info">
                <span class="url-badge">Dynamic Review Target:</span>
                <code class="url-string" id="displayReviewUrl">${getReviewUrl()}</code>
              </div>

              <div class="download-btns-row">
                <button type="button" class="btn btn-outline btn-block" id="downloadQrPngBtn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
                  </svg>
                  Download High-Res PNG (1200px)
                </button>
              </div>
            </div>
          </div>

          <!-- Live Print Preview Area -->
          <div class="studio-preview-card">
            <div class="preview-card-header">
              <span>Live Print Preview (${selectedTemplate === 'tent' ? 'Countertop Stand' : selectedTemplate === 'window' ? 'Window Decal' : 'Service Receipt'})</span>
              <span class="badge-ready">Vector Ready</span>
            </div>

            <div class="printable-canvas-container" id="printableCardArea">
              <!-- Rendered dynamically -->
            </div>
          </div>
        </div>
      </div>
    `;

    attachEvents();
    generateQR();
  }

  function updateTemplatePreview() {
    const previewContainer = container.querySelector('#printableCardArea');
    if (!previewContainer) return;

    if (selectedTemplate === 'tent') {
      previewContainer.innerHTML = `
        <div class="print-card print-tent-card" id="activePrintElement">
          <div class="print-top-accent"></div>
          
          <div class="print-tent-header">
            <img src="/logo.svg" alt="Logo" class="print-logo" />
            <h2 class="print-biz-name">${escapeHtml(config.businessName)}</h2>
            <p class="print-biz-tag">${escapeHtml(config.tagline)}</p>
          </div>

          <div class="print-headline-box">
            <div class="print-stars-row">⭐⭐⭐⭐⭐</div>
            <h3 class="print-cta-title">How Did We Do Today?</h3>
            <p class="print-cta-sub">Takes only 15 seconds to review your electrical service</p>
          </div>

          <div class="print-qr-frame">
            <img src="${qrDataUrl}" alt="Scan QR Review Code" class="print-qr-img" />
            <div class="print-qr-overlay-badge">
              <span>⚡</span>
            </div>
          </div>

          <div class="print-instructions">
            <div class="instruction-step">
              <span class="step-num">1</span>
              <span>Open Phone Camera</span>
            </div>
            <div class="instruction-arrow">➔</div>
            <div class="instruction-step">
              <span class="step-num">2</span>
              <span>Scan QR Code</span>
            </div>
            <div class="instruction-arrow">➔</div>
            <div class="instruction-step">
              <span class="step-num">3</span>
              <span>Tap 5 Stars ⭐</span>
            </div>
          </div>

          <div class="print-footer-info">
            <span>Direct Feedback & Urgent Inquiries: <strong>${escapeHtml(config.phone)}</strong></span>
          </div>
        </div>
      `;
    } else if (selectedTemplate === 'window') {
      previewContainer.innerHTML = `
        <div class="print-card print-window-decal" id="activePrintElement">
          <div class="decal-inner-border">
            <div class="decal-brand-row">
              <img src="/logo.svg" alt="Logo" class="print-logo-small" />
              <span class="decal-name">${escapeHtml(config.businessName)}</span>
            </div>
            <h3 class="decal-title">Loved Our Service?</h3>
            <p class="decal-sub">Review us on Google!</p>
            
            <div class="print-qr-frame decal-qr-frame">
              <img src="${qrDataUrl}" alt="Scan QR Review Code" class="print-qr-img" />
            </div>

            <div class="decal-stars">⭐⭐⭐⭐⭐</div>
            <div class="decal-footer-text">Scan with any phone camera</div>
          </div>
        </div>
      `;
    } else {
      // Invoice insert
      previewContainer.innerHTML = `
        <div class="print-card print-invoice-insert" id="activePrintElement">
          <div class="insert-left">
            <img src="/logo.svg" alt="Logo" class="print-logo-small" />
            <h3 class="insert-title">Thank You For Choosing ${escapeHtml(config.businessName)}!</h3>
            <p class="insert-desc">
              Your safety and satisfaction are our top priorities. Please scan to rate your service technician today.
            </p>
            <div class="insert-highlights">
              <span>⚡ 100% Quality Guarantee</span>
              <span>🛠️ Certified Electricians</span>
            </div>
            <div class="insert-contact">
              Support: ${escapeHtml(config.phone)} | ${escapeHtml(config.email)}
            </div>
          </div>
          <div class="insert-right">
            <div class="print-qr-frame">
              <img src="${qrDataUrl}" alt="Scan QR Review Code" class="print-qr-img" />
            </div>
            <span class="insert-scan-label">Scan to Rate & Review</span>
          </div>
        </div>
      `;
    }
  }

  function attachEvents() {
    // Template choices
    const tplChoices = container.querySelectorAll('.template-choice');
    tplChoices.forEach(choice => {
      choice.addEventListener('click', () => {
        tplChoices.forEach(c => c.classList.remove('active'));
        choice.classList.add('active');
        selectedTemplate = choice.getAttribute('data-tpl');
        updateTemplatePreview();
      });
    });

    // Color picker
    const colorPicker = container.querySelector('#qrColorPicker');
    const colorCode = container.querySelector('#qrColorCode');
    if (colorPicker) {
      colorPicker.addEventListener('input', (e) => {
        qrColor = e.target.value;
        if (colorCode) colorCode.textContent = qrColor;
        generateQR();
      });
    }

    // Color swatches
    const swatchBtns = container.querySelectorAll('.swatch-btn');
    swatchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        qrColor = btn.getAttribute('data-color');
        if (colorPicker) colorPicker.value = qrColor;
        if (colorCode) colorCode.textContent = qrColor;
        generateQR();
      });
    });

    // Copy Review link
    const copyLinkBtn = container.querySelector('#copyReviewLinkBtn');
    if (copyLinkBtn) {
      copyLinkBtn.addEventListener('click', () => {
        const url = getReviewUrl();
        navigator.clipboard.writeText(url).then(() => {
          showToast('Customer review URL copied to clipboard! 🔗');
        }).catch(() => {
          showToast('URL: ' + url);
        });
      });
    }

    // Download QR PNG
    const downloadPngBtn = container.querySelector('#downloadQrPngBtn');
    if (downloadPngBtn) {
      downloadPngBtn.addEventListener('click', () => {
        if (!qrDataUrl) return;
        const link = document.createElement('a');
        link.download = `${config.businessName.toLowerCase().replace(/\s+/g, '-')}-review-qr.png`;
        link.href = qrDataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('High-Res QR code downloaded! 📥');
      });
    }

    // Print card directly
    const printBtn = container.querySelector('#printMarketingCardBtn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
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
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 2500);
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

  render();
}
