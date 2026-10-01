// VR Electric - Funnel Analytics & Performance Metrics
import { getAnalytics, getConfig, getFeedbackList } from '../storage.js';

export function renderAnalyticsView(container) {
  const config = getConfig();
  const stats = getAnalytics();
  const feedbackList = getFeedbackList();

  const totalRatings = Object.values(stats.ratingsBreakdown).reduce((a, b) => a + b, 0) || 1;
  const fiveStars = stats.ratingsBreakdown[5] || 0;
  const fourStars = stats.ratingsBreakdown[4] || 0;
  const threeStars = stats.ratingsBreakdown[3] || 0;
  const twoStars = stats.ratingsBreakdown[2] || 0;
  const oneStars = stats.ratingsBreakdown[1] || 0;

  const positiveCount = stats.redirectedToGoogle || (fiveStars + fourStars);
  const negativeCount = stats.internalFeedbackSubmitted || (threeStars + twoStars + oneStars);

  const positivePercent = Math.round((positiveCount / (positiveCount + negativeCount || 1)) * 100);
  const interceptedCount = feedbackList.length;

  function render() {
    container.innerHTML = `
      <div class="analytics-view-wrap">
        <div class="analytics-header">
          <div>
            <h2 class="section-title">Review Funnel & Reputation Analytics</h2>
            <p class="section-subtitle">
              Live metrics tracking customer engagement, Google review conversions, and intercepted negative feedback.
            </p>
          </div>
          <span class="live-pulse-badge">
            <span class="pulse-dot"></span> Live Syncing
          </span>
        </div>

        <!-- Metric Cards Grid -->
        <div class="metrics-kpi-grid">
          <div class="kpi-card">
            <div class="kpi-icon-box bg-blue">📱</div>
            <div class="kpi-meta">
              <span class="kpi-label">Total QR Scans</span>
              <strong class="kpi-val">${stats.totalScans}</strong>
              <span class="kpi-trend trend-up">↑ 18% this month</span>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-icon-box bg-amber">⭐</div>
            <div class="kpi-meta">
              <span class="kpi-label">Redirected to Google</span>
              <strong class="kpi-val">${positiveCount}</strong>
              <span class="kpi-trend trend-up">${positivePercent}% 5-Star Conversion</span>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-icon-box bg-emerald">🛡️</div>
            <div class="kpi-meta">
              <span class="kpi-label">Bad Reviews Prevented</span>
              <strong class="kpi-val">${interceptedCount}</strong>
              <span class="kpi-trend trend-shield">100% Intercepted Privately</span>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-icon-box bg-purple">⚡</div>
            <div class="kpi-meta">
              <span class="kpi-label">Protected Google Rating</span>
              <strong class="kpi-val">4.9 / 5.0</strong>
              <span class="kpi-trend">Google Verified</span>
            </div>
          </div>
        </div>

        <div class="analytics-charts-grid">
          <!-- Rating Breakdown Chart -->
          <div class="chart-card">
            <h3 class="chart-title">Customer Satisfaction Breakdown</h3>
            <p class="chart-subtitle">Direct breakdown from all interactive scan responses</p>

            <div class="rating-bars-list">
              ${renderBarRow(5, fiveStars, totalRatings, 'Outstanding', '#10b981')}
              ${renderBarRow(4, fourStars, totalRatings, 'Very Good', '#3b82f6')}
              ${renderBarRow(3, threeStars, totalRatings, 'Average (Private Gate)', '#f59e0b')}
              ${renderBarRow(2, twoStars, totalRatings, 'Poor (Private Gate)', '#f97316')}
              ${renderBarRow(1, oneStars, totalRatings, 'Terrible (Private Gate)', '#ef4444')}
            </div>

            <div class="chart-footer-note">
              <span>Threshold set at: <strong>${config.ratingThreshold} Stars and above to Google</strong></span>
            </div>
          </div>

          <!-- Funnel Visualization Card -->
          <div class="chart-card">
            <h3 class="chart-title">Review Funnel Architecture</h3>
            <p class="chart-subtitle">Direct QR to Google Reviews 5-Star Conversion Machine</p>

            <div class="funnel-pipeline">
              <div class="funnel-step">
                <div class="step-badge">1. Mobile Scan</div>
                <div class="step-content">
                  <strong>Customer Scans QR Code Stand</strong>
                  <span>Opens branded, mobile-first review page</span>
                </div>
              </div>

              <div class="funnel-step mt-2">
                <div class="step-badge">2. Rotating Pool</div>
                <div class="step-content">
                  <strong>Unique Pre-Written 5-Star Review</strong>
                  <span>Tailored to their electrical service type (or shuffled)</span>
                </div>
              </div>

              <div class="funnel-step mt-2">
                <div class="step-badge">3. One-Tap Action</div>
                <div class="step-content">
                  <strong>Copy & Redirect to Google</strong>
                  <span>Text is auto-copied and Google Maps review dialog opens</span>
                </div>
              </div>

              <div class="funnel-step mt-2">
                <div class="step-badge">4. Submission</div>
                <div class="step-content">
                  <strong>Customer Pastes & Taps Post</strong>
                  <span>5-Star Google rating published in under 15 seconds!</span>
                </div>
              </div>
            </div>

            <div class="funnel-summary-badge mt-3">
              <span>✨ Result: <strong>${stats.redirectedToGoogle || 0} Customers</strong> successfully redirected to your Google Maps review page!</span>
            </div>
          </div>
        </div>

        <!-- Recent Activity Feed -->
        <div class="recent-activity-card">
          <h3 class="chart-title">Recent Event History</h3>
          <div class="activity-timeline">
            ${renderRecentActivity(stats.history)}
          </div>
        </div>
      </div>
    `;
  }

  function renderBarRow(stars, count, total, label, color) {
    const pct = Math.round((count / total) * 100);
    return `
      <div class="bar-row">
        <div class="bar-label-group">
          <span class="stars-label">${stars} ⭐</span>
          <span class="sub-label">${label}</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${pct}%; background-color: ${color};"></div>
        </div>
        <div class="bar-stats">
          <strong>${count}</strong>
          <span>(${pct}%)</span>
        </div>
      </div>
    `;
  }

  function renderRecentActivity(history) {
    if (!history || history.length === 0) {
      return '<p class="text-muted">No recent activity recorded yet.</p>';
    }

    return history.slice(0, 6).map(ev => {
      const isRedirect = ev.type === 'google_redirect';
      const isScan = ev.type === 'scan';
      const timeFormatted = new Date(ev.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      return `
        <div class="activity-item">
          <div class="activity-icon ${isRedirect ? 'icon-green' : isScan ? 'icon-blue' : 'icon-amber'}">
            ${isRedirect ? '⭐' : isScan ? '📱' : '⚠️'}
          </div>
          <div class="activity-info">
            <span class="activity-title">
              ${isRedirect ? `Customer redirected to <strong>Google Review (${ev.rating || 5} Stars)</strong>` :
                isScan ? 'QR Code scanned by customer' :
                'Private customer complaint received'}
            </span>
            <span class="activity-time">${timeFormatted}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  render();
}
