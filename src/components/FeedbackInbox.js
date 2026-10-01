// VR Electric - Private Feedback Inbox & Resolution CRM
import { getFeedbackList, updateFeedbackStatus, deleteFeedback, getConfig } from '../storage.js';

export function renderFeedbackInbox(container) {
  const config = getConfig();
  let statusFilter = 'All';
  let ratingFilter = 'All';
  let searchTerm = '';

  function render() {
    const list = getFeedbackList();

    const filtered = list.filter(item => {
      const matchStatus = statusFilter === 'All' || item.status === statusFilter;
      const matchRating = ratingFilter === 'All' || item.rating.toString() === ratingFilter;
      const matchSearch = !searchTerm || 
        item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm) ||
        item.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchStatus && matchRating && matchSearch;
    });

    const newCount = list.filter(i => i.status === 'New').length;

    container.innerHTML = `
      <div class="feedback-inbox-wrap">
        <!-- Header -->
        <div class="inbox-header">
          <div>
            <div class="inbox-title-row">
              <h2 class="section-title">Private Feedback & Complaints Inbox</h2>
              ${newCount > 0 ? `<span class="badge-urgent">${newCount} Urgent Attention</span>` : ''}
            </div>
            <p class="section-subtitle">
              Customers who rated 1-3 stars are intercepted here before leaving public Google reviews. Resolve their issues quickly to earn loyal clients!
            </p>
          </div>
          <div class="inbox-top-actions">
            <button type="button" class="btn btn-outline" id="exportCsvBtn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Export CSV
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="inbox-filters-bar">
          <div class="filter-search-box">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              id="inboxSearchInput" 
              placeholder="Search by customer name, phone, or issue..." 
              value="${escapeHtml(searchTerm)}"
            />
          </div>

          <div class="filter-group">
            <label class="filter-label">Status:</label>
            <select id="statusFilterSelect" class="filter-select">
              <option value="All" ${statusFilter === 'All' ? 'selected' : ''}>All Statuses (${list.length})</option>
              <option value="New" ${statusFilter === 'New' ? 'selected' : ''}>New (${list.filter(i => i.status === 'New').length})</option>
              <option value="In Progress" ${statusFilter === 'In Progress' ? 'selected' : ''}>In Progress</option>
              <option value="Resolved" ${statusFilter === 'Resolved' ? 'selected' : ''}>Resolved</option>
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label">Rating:</label>
            <select id="ratingFilterSelect" class="filter-select">
              <option value="All" ${ratingFilter === 'All' ? 'selected' : ''}>All Ratings</option>
              <option value="1" ${ratingFilter === '1' ? 'selected' : ''}>1 Star (Critical)</option>
              <option value="2" ${ratingFilter === '2' ? 'selected' : ''}>2 Stars</option>
              <option value="3" ${ratingFilter === '3' ? 'selected' : ''}>3 Stars</option>
            </select>
          </div>
        </div>

        <!-- Feedback Cards List -->
        <div class="feedback-list-container">
          ${filtered.length === 0 ? renderEmptyState() : filtered.map(item => renderFeedbackCard(item)).join('')}
        </div>
      </div>
    `;

    attachEvents();
  }

  function renderFeedbackCard(item) {
    const starsHtml = '⭐'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
    const dateFormatted = new Date(item.timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const statusClass = 
      item.status === 'New' ? 'badge-new' :
      item.status === 'In Progress' ? 'badge-progress' : 'badge-resolved';

    const cleanPhone = item.phone.replace(/[^0-9+]/g, '');
    const whatsappMsg = encodeURIComponent(
      `Hello ${item.customerName}, this is the customer care desk at ${config.businessName}. Thank you for your feedback regarding "${item.category}". We take this very seriously and would love to make this right. Could we discuss how we can resolve this for you?`
    );

    return `
      <div class="feedback-card ${item.status === 'New' ? 'border-unread' : ''}" data-id="${item.id}">
        <div class="card-top-row">
          <div class="customer-info-block">
            <div class="avatar-initials">${escapeHtml(getInitials(item.customerName))}</div>
            <div>
              <div class="name-status-line">
                <h3 class="customer-name">${escapeHtml(item.customerName)}</h3>
                <span class="status-badge ${statusClass}">${escapeHtml(item.status)}</span>
              </div>
              <div class="customer-contacts">
                <span class="contact-pill phone-pill">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-1-1z"/>
                  </svg>
                  ${escapeHtml(item.phone)}
                </span>
                ${item.email ? `
                  <span class="contact-pill email-pill">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    ${escapeHtml(item.email)}
                  </span>
                ` : ''}
              </div>
            </div>
          </div>

          <div class="card-right-meta">
            <span class="rating-stars-badge">${starsHtml} (${item.rating}/5)</span>
            <span class="ticket-date">${dateFormatted}</span>
          </div>
        </div>

        <div class="category-tag-row">
          <span class="issue-category-tag">Concern: ${escapeHtml(item.category)}</span>
        </div>

        <div class="feedback-quote-box">
          <p class="feedback-text-content">"${escapeHtml(item.message)}"</p>
        </div>

        <!-- Resolution Notes if any -->
        ${item.resolutionNotes ? `
          <div class="resolution-notes-preview">
            <strong>Management Notes:</strong> ${escapeHtml(item.resolutionNotes)}
          </div>
        ` : ''}

        <!-- Action Toolbar -->
        <div class="card-actions-toolbar">
          <div class="action-direct-links">
            <a 
              href="https://wa.me/${cleanPhone.replace('+', '')}?text=${whatsappMsg}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-whatsapp-reply"
              title="Open WhatsApp chat with pre-written resolution draft"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
              </svg>
              Reply on WhatsApp
            </a>

            <a href="tel:${cleanPhone}" class="btn btn-call-client">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-1-1z"/>
              </svg>
              Call Customer
            </a>
          </div>

          <div class="action-status-group">
            <select class="status-quick-select" data-id="${item.id}">
              <option value="New" ${item.status === 'New' ? 'selected' : ''}>Status: New</option>
              <option value="In Progress" ${item.status === 'In Progress' ? 'selected' : ''}>Status: In Progress</option>
              <option value="Resolved" ${item.status === 'Resolved' ? 'selected' : ''}>Status: Resolved</option>
            </select>

            <button type="button" class="btn-notes-toggle" data-id="${item.id}" title="Add/Edit internal notes">
              📝 Notes
            </button>

            <button type="button" class="btn-delete-ticket" data-id="${item.id}" title="Remove entry">
              🗑️
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderEmptyState() {
    return `
      <div class="inbox-empty-state">
        <div class="empty-icon-shield">🛡️</div>
        <h3>No Negative Complaints Found!</h3>
        <p>
          Either all your customers are having 5-star experiences, or no feedback matches your active filters.
        </p>
      </div>
    `;
  }

  function attachEvents() {
    // Search
    const searchInput = container.querySelector('#inboxSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        render();
      });
    }

    // Status filter
    const statusSelect = container.querySelector('#statusFilterSelect');
    if (statusSelect) {
      statusSelect.addEventListener('change', (e) => {
        statusFilter = e.target.value;
        render();
      });
    }

    // Rating filter
    const ratingSelect = container.querySelector('#ratingFilterSelect');
    if (ratingSelect) {
      ratingSelect.addEventListener('change', (e) => {
        ratingFilter = e.target.value;
        render();
      });
    }

    // Status quick change
    const statusQuickSelects = container.querySelectorAll('.status-quick-select');
    statusQuickSelects.forEach(select => {
      select.addEventListener('change', (e) => {
        const id = select.getAttribute('data-id');
        const newStatus = select.value;
        updateFeedbackStatus(id, newStatus);
        showToast(`Feedback status updated to ${newStatus}`);
        render();
      });
    });

    // Notes prompt
    const notesBtns = container.querySelectorAll('.btn-notes-toggle');
    notesBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const list = getFeedbackList();
        const item = list.find(i => i.id === id);
        if (!item) return;

        const currentNotes = item.resolutionNotes || '';
        const notes = prompt('Enter internal management notes for this complaint (e.g. resolution offered, technician briefed):', currentNotes);
        if (notes !== null) {
          updateFeedbackStatus(id, item.status, notes.trim());
          showToast('Resolution notes updated!');
          render();
        }
      });
    });

    // Delete ticket
    const deleteBtns = container.querySelectorAll('.btn-delete-ticket');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Are you sure you want to delete this feedback entry?')) {
          deleteFeedback(id);
          showToast('Feedback record deleted.');
          render();
        }
      });
    });

    // Export CSV
    const exportBtn = container.querySelector('#exportCsvBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', exportToCsv);
    }
  }

  function exportToCsv() {
    const list = getFeedbackList();
    if (list.length === 0) {
      showToast('No feedback to export.');
      return;
    }

    const headers = ['ID', 'Date', 'Customer Name', 'Phone', 'Email', 'Rating', 'Category', 'Status', 'Feedback Message', 'Internal Notes'];
    const rows = list.map(i => [
      i.id,
      new Date(i.timestamp).toLocaleString(),
      `"${(i.customerName || '').replace(/"/g, '""')}"`,
      `"${(i.phone || '').replace(/"/g, '""')}"`,
      `"${(i.email || '').replace(/"/g, '""')}"`,
      i.rating,
      `"${(i.category || '').replace(/"/g, '""')}"`,
      i.status,
      `"${(i.message || '').replace(/"/g, '""')}"`,
      `"${(i.resolutionNotes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${config.businessName.toLowerCase().replace(/\s+/g, '-')}-feedback-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Feedback exported as CSV! 📊');
  }

  function getInitials(name) {
    if (!name) return 'VR';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
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
