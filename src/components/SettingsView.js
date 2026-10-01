// VR Electric - Business Profile & Review Funnel Settings
import { getConfig, saveConfig, resetAllDataToDefault, normalizeReviews } from '../storage.js';

export function renderSettingsView(container) {
  let config = getConfig();

  function render() {
    const reviewsList = normalizeReviews(config.reviewPool);

    container.innerHTML = `
      <div class="settings-view-wrap">
        <div class="settings-header">
          <div>
            <h2 class="section-title">Business Profile & Review Funnel Settings</h2>
            <p class="section-subtitle">
              Update your business contact info, Google review link, and customize the rotating pre-written review pool.
            </p>
          </div>
          <button type="button" class="btn btn-outline-danger" id="resetDataBtn">
            Reset to Default VR Electric Demo Data
          </button>
        </div>

        <form id="businessConfigForm" class="settings-form-layout">
          <!-- Business Profile Card -->
          <div class="settings-card">
            <h3 class="panel-heading">1. Business Information</h3>
            <p class="panel-desc">These details appear on the customer QR review page, branded header, and printable stands.</p>

            <div class="form-row-2">
              <div class="form-group">
                <label for="cfgBizName" class="form-label">Business Name <span class="required">*</span></label>
                <input type="text" id="cfgBizName" class="form-control" value="${escapeHtml(config.businessName)}" required />
              </div>

              <div class="form-group">
                <label for="cfgIndustry" class="form-label">Industry / Specialization</label>
                <input type="text" id="cfgIndustry" class="form-control" value="${escapeHtml(config.industry)}" />
              </div>
            </div>

            <div class="form-group">
              <label for="cfgTagline" class="form-label">Tagline / Subtitle</label>
              <input type="text" id="cfgTagline" class="form-control" value="${escapeHtml(config.tagline)}" />
            </div>

            <div class="form-row-3">
              <div class="form-group">
                <label for="cfgPhone" class="form-label">Calling Phone <span class="required">*</span></label>
                <input type="tel" id="cfgPhone" class="form-control" value="${escapeHtml(config.phone)}" required />
              </div>

              <div class="form-group">
                <label for="cfgWhatsapp" class="form-label">WhatsApp Number <span class="required">*</span></label>
                <input type="tel" id="cfgWhatsapp" class="form-control" value="${escapeHtml(config.whatsapp)}" placeholder="+91..." required />
              </div>

              <div class="form-group">
                <label for="cfgEmail" class="form-label">Support Email</label>
                <input type="email" id="cfgEmail" class="form-control" value="${escapeHtml(config.email)}" />
              </div>
            </div>

            <div class="form-group">
              <label for="cfgAddress" class="form-label">Shop / Office Address</label>
              <input type="text" id="cfgAddress" class="form-control" value="${escapeHtml(config.address)}" />
            </div>
          </div>

          <!-- Review Routing / Google Setup -->
          <div class="settings-card">
            <h3 class="panel-heading">2. Official Google Review Link</h3>
            <p class="panel-desc">Where happy customers are directed when they tap "Post Review on Google".</p>

            <div class="form-group">
              <label for="cfgGoogleUrl" class="form-label">
                Google Review URL <span class="required">*</span>
              </label>
              <div class="input-with-button-row">
                <input 
                  type="url" 
                  id="cfgGoogleUrl" 
                  class="form-control font-mono" 
                  value="${escapeHtml(config.googleReviewUrl)}" 
                  placeholder="https://search.google.com/local/writereview?placeid=..." 
                  required 
                />
                <button type="button" class="btn btn-outline" id="testGoogleLinkBtn" title="Test this link in a new tab">
                  Test Link ↗
                </button>
              </div>
              <small class="helper-text">
                💡 <em>Tip:</em> In Google Business Profile dashboard, click <strong>"Ask for reviews"</strong> and copy your short link (e.g. <code>https://g.page/r/.../review</code>).
              </small>
            </div>

            <div class="form-group">
              <label class="form-label">Direct QR Review Funnel Architecture</label>
              <div class="info-banner-light">
                <span>⚡ <strong>How it works:</strong> Customer scans your counter QR stand → Sees an authentic pre-written 5-star review tailored to their service → One tap copies it & opens your Google Review page → Customer long-presses to paste and submits!</span>
              </div>
            </div>
          </div>

          <!-- Pre-Written Review Pool -->
          <div class="settings-card">
            <div class="panel-header-split">
              <div>
                <h3 class="panel-heading">3. Rotating Pre-Written Reviews Pool (${reviewsList.length} Active)</h3>
                <p class="panel-desc">Each customer scan picks a unique review from this pool so every review on your Google profile looks authentic and written by a real client.</p>
              </div>
              <div class="panel-header-actions">
                <button type="button" class="btn btn-sm btn-outline" id="toggleBulkImportBtn">
                  ⚡ Bulk Add Reviews
                </button>
              </div>
            </div>

            <!-- Bulk Import Panel (collapsible) -->
            <div class="bulk-import-panel hidden" id="bulkImportPanel">
              <label class="form-label">Paste multiple reviews below (separate each review with a blank line):</label>
              <textarea class="form-control font-mono" id="bulkImportTextarea" rows="5" placeholder="Review 1: Excellent service by VR Electric...&#10;&#10;Review 2: Called VR Electric for house wiring..."></textarea>
              <div class="bulk-import-actions mt-2">
                <button type="button" class="btn btn-sm btn-primary" id="applyBulkImportBtn">Import to Pool</button>
                <button type="button" class="btn btn-sm btn-ghost" id="cancelBulkImportBtn">Cancel</button>
              </div>
            </div>

            <div class="review-pool-editor" id="reviewPoolEditor">
              ${reviewsList.map((review, idx) => `
                <div class="review-edit-row" data-index="${idx}">
                  <div class="review-edit-header">
                    <span class="review-edit-num">Review #${idx + 1}</span>
                    <div class="review-row-meta">
                      <select class="form-control form-control-sm review-category-select">
                        <option value="General Electrical" ${review.category === 'General Electrical' ? 'selected' : ''}>General Electrical</option>
                        <option value="House Wiring" ${review.category === 'House Wiring' ? 'selected' : ''}>House Wiring</option>
                        <option value="Emergency & Repair" ${review.category === 'Emergency & Repair' ? 'selected' : ''}>Emergency & Repair</option>
                        <option value="Commercial & Office" ${review.category === 'Commercial & Office' ? 'selected' : ''}>Commercial & Office</option>
                        <option value="Smart Home" ${review.category === 'Smart Home' ? 'selected' : ''}>Smart Home</option>
                        <option value="EV & Green Energy" ${review.category === 'EV & Green Energy' ? 'selected' : ''}>EV & Green Energy</option>
                      </select>
                      <button type="button" class="btn-remove-tag" title="Delete review">✕</button>
                    </div>
                  </div>
                  <textarea class="form-control review-pool-textarea" rows="3" placeholder="Write a unique 5-star review...">${escapeHtml(review.text)}</textarea>
                </div>
              `).join('')}
            </div>

            <button type="button" class="btn btn-sm btn-outline mt-3" id="addNewReviewBtn">
              + Add Another Single Review
            </button>
          </div>

          <div class="settings-actions-footer">
            <button type="submit" class="btn btn-primary btn-lg">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
              </svg>
              Save All Settings
            </button>
            <span class="save-status-msg" id="saveStatusMsg"></span>
          </div>
        </form>
      </div>
    `;

    attachEvents();
  }

  function attachEvents() {
    // Test Google Link
    const testGoogleBtn = container.querySelector('#testGoogleLinkBtn');
    if (testGoogleBtn) {
      testGoogleBtn.addEventListener('click', () => {
        const urlInput = container.querySelector('#cfgGoogleUrl');
        const url = urlInput ? urlInput.value.trim() : '';
        if (url) {
          window.open(url, '_blank', 'noopener,noreferrer');
        } else {
          showToast('Please enter a Google Review URL first.');
        }
      });
    }

    // Toggle bulk import
    const toggleBulkBtn = container.querySelector('#toggleBulkImportBtn');
    const bulkPanel = container.querySelector('#bulkImportPanel');
    const cancelBulkBtn = container.querySelector('#cancelBulkImportBtn');
    const applyBulkBtn = container.querySelector('#applyBulkImportBtn');

    if (toggleBulkBtn && bulkPanel) {
      toggleBulkBtn.addEventListener('click', () => {
        bulkPanel.classList.toggle('hidden');
      });
    }

    if (cancelBulkBtn && bulkPanel) {
      cancelBulkBtn.addEventListener('click', () => {
        bulkPanel.classList.add('hidden');
      });
    }

    if (applyBulkBtn && bulkPanel) {
      applyBulkBtn.addEventListener('click', () => {
        const textarea = container.querySelector('#bulkImportTextarea');
        const raw = textarea ? textarea.value.trim() : '';
        if (!raw) return;

        // Split by double newline or single newline if long
        const parts = raw.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
        if (parts.length > 0) {
          const list = container.querySelector('#reviewPoolEditor');
          parts.forEach(part => {
            const count = list.querySelectorAll('.review-edit-row').length;
            const newRow = document.createElement('div');
            newRow.className = 'review-edit-row';
            newRow.setAttribute('data-index', count);
            newRow.innerHTML = `
              <div class="review-edit-header">
                <span class="review-edit-num">Review #${count + 1}</span>
                <div class="review-row-meta">
                  <select class="form-control form-control-sm review-category-select">
                    <option value="General Electrical">General Electrical</option>
                    <option value="House Wiring">House Wiring</option>
                    <option value="Emergency & Repair">Emergency & Repair</option>
                    <option value="Commercial & Office">Commercial & Office</option>
                    <option value="Smart Home">Smart Home</option>
                    <option value="EV & Green Energy">EV & Green Energy</option>
                  </select>
                  <button type="button" class="btn-remove-tag" title="Delete review">✕</button>
                </div>
              </div>
              <textarea class="form-control review-pool-textarea" rows="3">${escapeHtml(part)}</textarea>
            `;
            list.appendChild(newRow);
            attachRowEvents(newRow);
          });
          textarea.value = '';
          bulkPanel.classList.add('hidden');
          showToast(`Imported ${parts.length} new reviews! Remember to click Save.`);
        }
      });
    }

    // Add new review to pool
    const addReviewBtn = container.querySelector('#addNewReviewBtn');
    if (addReviewBtn) {
      addReviewBtn.addEventListener('click', () => {
        const list = container.querySelector('#reviewPoolEditor');
        const count = list.querySelectorAll('.review-edit-row').length;
        const newRow = document.createElement('div');
        newRow.className = 'review-edit-row';
        newRow.setAttribute('data-index', count);
        newRow.innerHTML = `
          <div class="review-edit-header">
            <span class="review-edit-num">Review #${count + 1}</span>
            <div class="review-row-meta">
              <select class="form-control form-control-sm review-category-select">
                <option value="General Electrical">General Electrical</option>
                <option value="House Wiring">House Wiring</option>
                <option value="Emergency & Repair">Emergency & Repair</option>
                <option value="Commercial & Office">Commercial & Office</option>
                <option value="Smart Home">Smart Home</option>
                <option value="EV & Green Energy">EV & Green Energy</option>
              </select>
              <button type="button" class="btn-remove-tag" title="Delete review">✕</button>
            </div>
          </div>
          <textarea class="form-control review-pool-textarea" rows="3" placeholder="Write a unique 5-star review...">Great experience with VR Electric! The team arrived on time, completed the electrical work safely, and charged reasonable rates. Highly recommended!</textarea>
        `;
        list.appendChild(newRow);
        attachRowEvents(newRow);
      });
    }

    // Attach delete to existing review rows
    const reviewRows = container.querySelectorAll('.review-edit-row');
    reviewRows.forEach(row => attachRowEvents(row));

    // Form submit
    const form = container.querySelector('#businessConfigForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Read review pool
        const rows = container.querySelectorAll('.review-edit-row');
        const newPool = [];
        rows.forEach((row, i) => {
          const textarea = row.querySelector('.review-pool-textarea');
          const select = row.querySelector('.review-category-select');
          const text = textarea ? textarea.value.trim() : '';
          const category = select ? select.value : 'General Electrical';
          if (text) {
            newPool.push({
              id: `rev-${i}`,
              text,
              category
            });
          }
        });

        const newConfig = {
          businessName: container.querySelector('#cfgBizName').value.trim(),
          industry: container.querySelector('#cfgIndustry').value.trim(),
          tagline: container.querySelector('#cfgTagline').value.trim(),
          phone: container.querySelector('#cfgPhone').value.trim(),
          whatsapp: container.querySelector('#cfgWhatsapp').value.trim(),
          email: container.querySelector('#cfgEmail').value.trim(),
          address: container.querySelector('#cfgAddress').value.trim(),
          googleReviewUrl: container.querySelector('#cfgGoogleUrl').value.trim(),
          reviewPool: newPool.length > 0 ? newPool : config.reviewPool
        };

        saveConfig(newConfig);
        config = newConfig;

        const statusMsg = container.querySelector('#saveStatusMsg');
        if (statusMsg) {
          statusMsg.textContent = '✓ Saved successfully! Customer portal & QR codes updated.';
          statusMsg.style.color = '#10b981';
          setTimeout(() => {
            statusMsg.textContent = '';
          }, 3500);
        }
        showToast('Settings saved successfully!');
      });
    }

    // Reset button
    const resetBtn = container.querySelector('#resetDataBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset all business info, feedback tickets, and stats back to default VR Electric sample data?')) {
          resetAllDataToDefault();
          config = getConfig();
          render();
          showToast('Data reset to default.');
        }
      });
    }
  }

  function attachRowEvents(row) {
    const removeBtn = row.querySelector('.btn-remove-tag');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        row.remove();
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
