/* E Royce Service Manager — Screens 30–41 (Completion, Billing, Profile) */
const SCREENS_C = [
  {
    num: 30,
    title: 'Upload After Photos',
    group: 'Service Completion',
    purpose: 'Capture post-service evidence photos for audit trail and before/after comparison.',
    elements: [
      'After-work photo grid (6 slots)',
      'Before/after comparison hint banner',
      'Upload progress indicator',
      'Continue to Invoice CTA',
    ],
    notes: 'Mandatory minimum 4 photos. Auto-compression enabled. GPS timestamp embedded in EXIF.',
    render() {
      const afterPhotos = [
        { label: 'Front View', filled: true },
        { label: 'Brake Assembly', filled: true },
        { label: 'Battery Bay', filled: true },
        { label: 'Motor Controller', filled: true },
        { label: 'Odometer', filled: true },
        { label: 'Add Photo', filled: false },
      ];
      return `${statusBar('10:47')}
${header('After Photos', { right: I.cam })}
<div class="app-scroll section-pad">
  <div class="card glass mb-12" style="padding:12px 14px;display:flex;align-items:center;gap:10px">
    <div style="width:36px;height:36px;border-radius:10px;background:var(--accent-dim);display:grid;place-items:center;color:var(--accent)">${I.scooter}</div>
    <div class="flex-1">
      <div class="row-title" style="font-size:13px">SRV-78421 · Priya Sharma</div>
      <div class="row-sub">TN 09 AB 4521 · Ather 450X</div>
    </div>
    <span class="chip chip-green">In Progress</span>
  </div>
  <div class="card mb-12" style="background:var(--accent-dim);border-color:rgba(37,99,235,0.25);padding:12px 14px">
    <div class="flex items-center gap-8">
      <span style="font-size:18px">↔</span>
      <div>
        <div class="fw-7" style="font-size:12.5px;color:var(--accent)">Compare Before & After</div>
        <div class="text-sec" style="font-size:11px;margin-top:2px">Tap any photo to view side-by-side with pre-service capture</div>
      </div>
    </div>
  </div>
  <div class="label">Completed Work Photos <span class="text-primary">5/6</span></div>
  <div class="photo-grid mb-12">
    ${afterPhotos.map(p => `
    <div class="photo-slot ${p.filled ? 'filled' : ''}">
      ${p.filled ? `<div style="width:100%;height:100%;background:linear-gradient(145deg,#059669,#10B981);opacity:0.35;position:absolute;inset:0"></div>
      <span style="position:relative;z-index:1;font-size:20px">${I.check}</span>` : I.plus}
      <span class="ph-label">${p.label}</span>
    </div>`).join('')}
  </div>
  <div class="flex justify-between items-center mb-12">
    <span class="text-sec" style="font-size:11px">${I.cam} Auto-compress · GPS tagged</span>
    <span class="chip chip-slate">4.2 MB saved</span>
  </div>
  <div class="card mb-16">
    <div class="flex justify-between items-center">
      <div>
        <div class="row-title" style="font-size:13px">Before photos on file</div>
        <div class="row-sub">6 captured at service start · 09:04 AM</div>
      </div>
      <button class="btn btn-outline btn-sm">View</button>
    </div>
  </div>
  <button class="btn btn-primary btn-block">Generate Invoice</button>
  <div class="safe-bottom"></div>
</div>`;
    },
  },


  {
    num: 31,
    title: 'Invoice Preview',
    group: 'Billing',
    purpose: 'Review generated tax invoice before sharing with customer or initiating payment.',
    elements: [
      'Full invoice doc-preview',
      'Bill-to customer details',
      'Line items labour + parts',
      'CGST/SGST breakup',
      'Grand total ₹5,251',
    ],
    notes: 'GST-compliant format. Invoice INV-2026-78421 auto-generated after after-photos are uploaded.',
    render() {
      return `${statusBar('10:49')}
${header('Invoice Preview', { right: I.pdf })}
<div class="app-scroll section-pad">
  <div class="flex justify-between items-center mb-12">
    <span class="chip chip-green">Generated</span>
    <span class="text-sec" style="font-size:11px;font-family:var(--mono)">INV-2026-78421</span>
  </div>
  <div class="doc-preview mb-16">
    <div class="doc-brand">
      <div>
        <div style="font-size:16px;font-weight:800;color:#10B981">E Royce EV Care</div>
        <div style="font-size:9px;color:#64748B;margin-top:2px">Premium Electric Vehicle Service</div>
        <div style="font-size:8px;color:#94A3B8;margin-top:4px">#42, 100 Feet Road, Indiranagar<br>Bengaluru 560038 · GSTIN 29AABCE1234F1Z5</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:11px;font-weight:800;color:#0F172A">TAX INVOICE</div>
        <div style="font-size:9px;color:#64748B;margin-top:4px">Date: 31 Jul 2026</div>
        <div style="font-size:9px;color:#64748B">Due: On Receipt</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:10px">
      <div>
        <div style="font-size:8px;font-weight:700;color:#64748B;text-transform:uppercase;margin-bottom:4px">Bill To</div>
        <div style="font-size:10px;font-weight:700">Priya Sharma</div>
        <div style="font-size:9px;color:#64748B">+91 98765 43210</div>
        <div style="font-size:9px;color:#64748B">12th Main, Indiranagar, BLR</div>
      </div>
      <div>
        <div style="font-size:8px;font-weight:700;color:#64748B;text-transform:uppercase;margin-bottom:4px">Vehicle</div>
        <div style="font-size:10px;font-weight:700">TN 09 AB 4521</div>
        <div style="font-size:9px;color:#64748B">Ather 450X Gen 3</div>
        <div style="font-size:9px;color:#64748B">SRV-78421 · Odo 12,480 km</div>
      </div>
    </div>
    <table>
      <thead><tr><th>Description</th><th style="text-align:right">Qty</th><th style="text-align:right">Amount</th></tr></thead>
      <tbody>
        <tr><td>Battery Diagnostics</td><td style="text-align:right">1</td><td style="text-align:right">₹450</td></tr>
        <tr><td>Brake Pad Replacement</td><td style="text-align:right">1</td><td style="text-align:right">₹1,850</td></tr>
        <tr><td>Motor Controller Check</td><td style="text-align:right">1</td><td style="text-align:right">₹900</td></tr>
        <tr><td>Software Update <span style="color:#10B981;font-size:8px">(Warranty)</span></td><td style="text-align:right">1</td><td style="text-align:right">₹0</td></tr>
        <tr><td>Labour — 2.5 hrs @ ₹500/hr</td><td style="text-align:right">2.5</td><td style="text-align:right">₹1,250</td></tr>
        <tr><td>Spares — Brake Pads ATH-BP-450</td><td style="text-align:right">1</td><td style="text-align:right">₹1,200</td></tr>
        <tr><td>Spares — Contactor</td><td style="text-align:right">1</td><td style="text-align:right">₹650</td></tr>
      </tbody>
    </table>
    <div style="border-top:1px solid #E2E8F0;padding-top:8px;margin-top:4px">
      <div style="display:flex;justify-content:space-between;font-size:9px;color:#64748B;margin-bottom:3px"><span>Subtotal</span><span>₹4,450</span></div>
      <div style="display:flex;justify-content:space-between;font-size:9px;color:#64748B;margin-bottom:3px"><span>CGST @ 9%</span><span>₹400.50</span></div>
      <div style="display:flex;justify-content:space-between;font-size:9px;color:#64748B;margin-bottom:6px"><span>SGST @ 9%</span><span>₹400.50</span></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:800;color:#0F172A;padding-top:6px;border-top:2px solid #10B981">
        <span>Grand Total</span><span>₹5,251</span>
      </div>
      <div style="font-size:8px;color:#EF4444;margin-top:6px;font-weight:600">Payment Due: On Receipt</div>
    </div>
  </div>
  <div class="grid-2 gap-8">
    <button class="btn btn-outline btn-sm">${I.pdf} View PDF</button>
    <button class="btn btn-primary btn-sm">${I.send} Send to Customer</button>
  </div>
  <div class="safe-bottom"></div>
</div>`;
    },
  },

  {
    num: 32,
    title: 'Invoice PDF',
    group: 'Billing',
    purpose: 'Full-screen PDF viewer for invoice document with download and share actions.',
    elements: [
      'PDF viewer chrome toolbar',
      'Page indicator 1/1',
      'Download and Share actions',
      'Invoice document content',
    ],
    notes: 'PDF generated server-side. Cached offline for 72 hours. Share via system sheet.',
    render() {
      return `${statusBar('10:49')}
<div style="background:var(--bg-elevated);border-bottom:1px solid var(--border);padding:8px 14px 10px;flex-shrink:0">
  <div class="flex items-center gap-10">
    <div class="icon-btn" style="width:36px;height:36px">${I.back}</div>
    <div class="flex-1">
      <div class="fw-7" style="font-size:14px">INV-2026-78421.pdf</div>
      <div class="text-sec" style="font-size:10px">248 KB · Generated just now</div>
    </div>
    <div class="icon-btn" style="width:36px;height:36px">${I.download}</div>
    <div class="icon-btn" style="width:36px;height:36px">${I.send}</div>
  </div>
  <div class="flex justify-between items-center mt-10" style="font-size:11px">
    <div class="flex gap-8">
      <span class="chip chip-slate">Page 1 / 1</span>
      <span class="text-sec">100%</span>
    </div>
    <div class="flex gap-6">
      <div class="icon-btn" style="width:32px;height:32px;font-size:16px;font-weight:700">−</div>
      <div class="icon-btn" style="width:32px;height:32px;font-size:16px;font-weight:700">+</div>
    </div>
  </div>
</div>
<div class="app-scroll" style="background:#525659;padding:16px">
  <div class="doc-preview" style="box-shadow:0 4px 24px rgba(0,0,0,0.4);margin-bottom:12px">
    <div class="doc-brand">
      <div>
        <div style="font-size:14px;font-weight:800;color:#10B981">E Royce EV Care</div>
        <div style="font-size:8px;color:#64748B">GSTIN 29AABCE1234F1Z5</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:10px;font-weight:800">TAX INVOICE</div>
        <div style="font-size:8px;color:#64748B">INV-2026-78421</div>
      </div>
    </div>
    <div style="font-size:9px;margin-bottom:8px"><strong>Bill To:</strong> Priya Sharma · TN 09 AB 4521</div>
    <table>
      <thead><tr><th>Item</th><th style="text-align:right">Amt</th></tr></thead>
      <tbody>
        <tr><td>Battery Diagnostics</td><td style="text-align:right">₹450</td></tr>
        <tr><td>Brake Pad Replacement</td><td style="text-align:right">₹1,850</td></tr>
        <tr><td>Motor Controller Check</td><td style="text-align:right">₹900</td></tr>
        <tr><td>Labour 2.5 hrs</td><td style="text-align:right">₹1,250</td></tr>
        <tr><td>Spares</td><td style="text-align:right">₹1,850</td></tr>
      </tbody>
    </table>
    <div style="display:flex;justify-content:space-between;font-size:9px;color:#64748B;margin-top:6px"><span>CGST 9%</span><span>₹400.50</span></div>
    <div style="display:flex;justify-content:space-between;font-size:9px;color:#64748B"><span>SGST 9%</span><span>₹400.50</span></div>
    <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-top:6px;padding-top:6px;border-top:2px solid #10B981"><span>Total</span><span>₹5,251</span></div>
  </div>
</div>
<div style="padding:12px 18px 24px;background:var(--card);border-top:1px solid var(--border);flex-shrink:0">
  <div class="grid-2 gap-8">
    <button class="btn btn-outline btn-sm">${I.download} Download</button>
    <button class="btn btn-primary btn-sm">${I.send} Share PDF</button>
  </div>
</div>`;
    },
  },

  {
    num: 33,
    title: 'Send Invoice',
    group: 'Billing',
    purpose: 'Choose delivery channel to send invoice to customer with preview thumbnail.',
    elements: [
      'Channel options WhatsApp / SMS / Email',
      'Invoice preview thumbnail',
      'Recipient confirmation',
      'Send CTA',
    ],
    notes: 'WhatsApp preferred — 94% open rate. Delivery receipt tracked in service timeline.',
    render() {
      return `${statusBar('10:50')}
${header('Send Invoice')}
<div class="app-scroll section-pad">
  <div class="card glass mb-16">
    <div class="flex gap-12">
      <div style="width:64px;height:80px;border-radius:10px;background:#fff;display:grid;place-items:center;flex-shrink:0;box-shadow:var(--shadow-soft)">
        <div style="color:#EF4444">${I.pdf}</div>
        <div style="font-size:7px;color:#64748B;margin-top:4px;font-weight:600">INV-78421</div>
      </div>
      <div class="flex-1">
        <div class="row-title">Invoice INV-2026-78421</div>
        <div class="row-sub">Priya Sharma · TN 09 AB 4521</div>
        <div class="fw-8 text-primary mt-8" style="font-size:18px">₹5,251</div>
        <div class="text-sec" style="font-size:10px">Due on receipt · 31 Jul 2026</div>
      </div>
    </div>
  </div>
  <div class="label">Send via</div>
  <div class="card mb-12" style="border-color:rgba(37,211,102,0.3);background:rgba(37,211,102,0.06)">
    <div class="list-row" style="padding:4px 0;border:none">
      <div style="width:44px;height:44px;border-radius:12px;background:#25D366;display:grid;place-items:center;color:#fff">${I.whatsapp}</div>
      <div class="flex-1">
        <div class="row-title">WhatsApp</div>
        <div class="row-sub">+91 98765 43210 · Recommended</div>
      </div>
      <div style="width:22px;height:22px;border-radius:50%;background:var(--grad-primary);display:grid;place-items:center;color:#fff">${I.check}</div>
    </div>
  </div>
  <div class="card mb-12">
    <div class="list-row" style="padding:4px 0;border:none">
      <div style="width:44px;height:44px;border-radius:12px;background:var(--grad-accent);display:grid;place-items:center;color:#fff">${I.send}</div>
      <div class="flex-1">
        <div class="row-title">SMS</div>
        <div class="row-sub">Short link + amount summary</div>
      </div>
      <div style="width:22px;height:22px;border-radius:50%;border:2px solid var(--border-strong)"></div>
    </div>
  </div>
  <div class="card mb-16">
    <div class="list-row" style="padding:4px 0;border:none">
      <div style="width:44px;height:44px;border-radius:12px;background:var(--grad-orange);display:grid;place-items:center;color:#fff">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
      </div>
      <div class="flex-1">
        <div class="row-title">Email</div>
        <div class="row-sub">priya.sharma@gmail.com</div>
      </div>
      <div style="width:22px;height:22px;border-radius:50%;border:2px solid var(--border-strong)"></div>
    </div>
  </div>
  <div class="card mb-16">
    <div class="label" style="margin-bottom:6px">Message Preview</div>
    <div style="background:#005C4B;border-radius:10px;padding:10px 12px;font-size:11px;color:#E9EDEF;line-height:1.5">
      Hi Priya, your E Royce service invoice for ₹5,251 is ready. Pay via UPI: eroyce@okaxis or view: eroyce.app/i/78421
    </div>
  </div>
  <button class="btn btn-primary btn-block">${I.whatsapp} Send via WhatsApp</button>
  <div class="safe-bottom"></div>
</div>`;
    },
  },

  {
    num: 34,
    title: 'QR Payment',
    group: 'Billing',
    purpose: 'Display UPI QR code for instant customer payment at service location.',
    elements: [
      'Large QR code frame',
      'UPI ID eroyce@okaxis',
      'Amount ₹5,251',
      'Scan instruction',
      'Payment apps row GPay PhonePe Paytm',
    ],
    notes: 'QR dynamically generated per invoice. Auto-reconciles on payment confirmation webhook.',
    render() {
      const qrPattern = [
        1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,
        1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,
        1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,
        1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,
        1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,
        0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,
        1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,
        0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,
        1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,
        0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,
        1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,
        1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,
        1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,
        1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,
        1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,
      ];
      return `${statusBar('10:51')}
${header('Collect Payment', { right: I.qr })}
<div class="app-scroll section-pad">
  <div class="text-center mb-12">
    <div class="fw-8" style="font-size:28px;letter-spacing:-0.04em;color:var(--primary)">₹5,251</div>
    <div class="text-sec" style="font-size:12px">Invoice INV-2026-78421</div>
  </div>
  <div class="qr-frame mb-16">
    <div style="display:grid;grid-template-columns:repeat(15,1fr);gap:1px;width:100%;height:100%">
      ${qrPattern.map(c => `<div style="background:${c ? '#0F172A' : '#fff'};aspect-ratio:1;border-radius:1px"></div>`).join('')}
    </div>
  </div>
  <div class="text-center mb-16">
    <div class="text-sec" style="font-size:11px;margin-bottom:4px">Scan with any UPI app</div>
    <div class="fw-7" style="font-size:15px;font-family:var(--mono)">eroyce@okaxis</div>
    <div class="chip chip-green mt-8">UPI · E Royce EV Care</div>
  </div>
  <div class="label text-center">Supported Apps</div>
  <div class="grid-3 mb-16">
    <div class="card text-center" style="padding:12px 8px">
      <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#4285F4,#34A853);margin:0 auto 6px;display:grid;place-items:center;color:#fff;font-size:11px;font-weight:800">G</div>
      <div style="font-size:10px;font-weight:600">GPay</div>
    </div>
    <div class="card text-center" style="padding:12px 8px">
      <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#5F259F,#7B2DAB);margin:0 auto 6px;display:grid;place-items:center;color:#fff;font-size:11px;font-weight:800">Pe</div>
      <div style="font-size:10px;font-weight:600">PhonePe</div>
    </div>
    <div class="card text-center" style="padding:12px 8px">
      <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#00BAF2,#002970);margin:0 auto 6px;display:grid;place-items:center;color:#fff;font-size:11px;font-weight:800">Pt</div>
      <div style="font-size:10px;font-weight:600">Paytm</div>
    </div>
  </div>
  <div class="card glass mb-12">
    <div class="flex justify-between items-center">
      <span class="text-sec" style="font-size:12px">Waiting for payment…</span>
      <span class="live-dot"></span>
    </div>
  </div>
  <button class="btn btn-outline btn-block btn-sm">Share QR via WhatsApp</button>
  <div class="safe-bottom"></div>
</div>`;
    },
  },

  {
    num: 35,
    title: 'Payment Success',
    group: 'Billing',
    purpose: 'Confirm successful UPI payment and display transaction reference.',
    elements: [
      'Success burst animation',
      'Paid amount ₹5,251',
      'Transaction ID UPI-9283746510',
      'Continue to End Service OTP CTA',
    ],
    notes: 'Payment auto-synced to ERP. Receipt sent to customer WhatsApp within 30 seconds. End Service OTP follows payment.',
    render() {
      return `${statusBar('10:52')}
<div class="app-scroll section-pad" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100%;padding-top:80px">
  <div class="success-burst mb-16">${I.check}</div>
  <div class="fw-8 text-center" style="font-size:22px;letter-spacing:-0.03em;margin-bottom:4px">Payment Received!</div>
  <div class="text-sec text-center mb-20" style="font-size:13px">UPI payment confirmed successfully</div>
  <div class="card w-full mb-16" style="background:var(--grad-card);border-color:rgba(16,185,129,0.2)">
    <div class="text-center">
      <div class="text-sec" style="font-size:11px;margin-bottom:4px">Amount Paid</div>
      <div class="fw-8" style="font-size:32px;letter-spacing:-0.04em;color:var(--primary)">₹5,251</div>
    </div>
    <div class="divider"></div>
    <div class="flex justify-between mb-8" style="font-size:12px">
      <span class="text-sec">Transaction ID</span>
      <span class="fw-7" style="font-family:var(--mono);font-size:11px">UPI-9283746510</span>
    </div>
    <div class="flex justify-between mb-8" style="font-size:12px">
      <span class="text-sec">Paid via</span>
      <span class="fw-7">Google Pay</span>
    </div>
    <div class="flex justify-between mb-8" style="font-size:12px">
      <span class="text-sec">UPI ID</span>
      <span class="fw-7">eroyce@okaxis</span>
    </div>
    <div class="flex justify-between" style="font-size:12px">
      <span class="text-sec">Time</span>
      <span class="fw-7">31 Jul 2026 · 10:52 AM</span>
    </div>
  </div>
  <div class="card w-full mb-20">
    <div class="flex items-center gap-10">
      <div class="avatar sm">PS</div>
      <div>
        <div class="row-title" style="font-size:13px">Receipt sent to Priya Sharma</div>
        <div class="row-sub">WhatsApp · INV-2026-78421</div>
      </div>
      <span class="chip chip-green">${I.check}</span>
    </div>
  </div>
  <button class="btn btn-primary btn-block">Continue to End OTP</button>
  <div class="safe-bottom"></div>
</div>`;
    },
  },

  {
    num: 36,
    title: 'End Service OTP',
    group: 'Service Completion',
    purpose: 'Post-payment customer OTP to close the job after payment success.',
    elements: [
      'End service OTP entry',
      'Paid amount and duration summary',
      'Payment reference',
      'Verify & Close Service CTA',
    ],
    notes: 'OTP only after payment success. Required to close job and mark service completed.',
    render() {
      const digits = ['9', '3', '7', '1', '5', '6'];
      return `${statusBar('10:53')}
${header('End Service OTP')}
<div class="app-scroll section-pad">
  <div class="text-center mb-16">
    <div style="width:56px;height:56px;border-radius:16px;background:var(--success-dim);display:grid;place-items:center;margin:0 auto 14px;color:var(--success)">${I.check}</div>
    <div class="fw-8" style="font-size:20px">Close Service</div>
    <div class="text-sec mt-8" style="font-size:13px;line-height:1.5">Enter the end-service OTP sent to<br><strong style="color:var(--text)">Priya Sharma · +91 ****3210</strong></div>
  </div>
  <div class="card mb-16">
    <div class="grid-2 gap-10">
      <div class="kpi-card kpi-green" style="min-height:72px;padding:10px">
        <div class="kpi-label">Paid</div>
        <div class="kpi-value" style="font-size:18px">₹5,251</div>
      </div>
      <div class="kpi-card kpi-blue" style="min-height:72px;padding:10px">
        <div class="kpi-label">Duration</div>
        <div class="kpi-value" style="font-size:18px">1h 44m</div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="flex justify-between" style="font-size:12px">
      <span class="text-sec">Payment ref</span>
      <span class="fw-7" style="font-family:var(--mono);font-size:10px">UPI-9283746510</span>
    </div>
  </div>
  <div class="otp-boxes mb-16">
    ${digits.map(d => `<div class="otp-box filled">${d}</div>`).join('')}
  </div>
  <div class="text-center text-sec mb-16" style="font-size:12px">OTP expires in <span class="text-warn fw-7">8:14</span></div>
  <button class="btn btn-primary btn-block">Verify & Close Service</button>
  <div class="safe-bottom"></div>
</div>`;
    },
  },

  {
    num: 37,
    title: 'Service Completed',
    group: 'Service Completion',
    purpose: 'Celebrate job completion with summary metrics and return to dashboard.',
    elements: [
      'Celebration success state',
      'Summary KM, duration, amount',
      'Back to Dashboard CTA',
    ],
    notes: 'Job closed successfully. Updates engineer KPI dashboard in real-time.',
    render() {
      return `${statusBar('10:54')}
<div class="app-scroll section-pad" style="padding-top:40px">
  <div class="text-center mb-20">
    <div style="font-size:48px;margin-bottom:8px">🎉</div>
    <div class="fw-8" style="font-size:24px;letter-spacing:-0.03em">Service Completed!</div>
    <div class="text-sec mt-8" style="font-size:13px">SRV-78421 · Priya Sharma</div>
  </div>
  <div class="card mb-16" style="background:var(--grad-card);border-color:rgba(16,185,129,0.2)">
    <div class="grid-3 gap-8 text-center">
      <div>
        <div class="text-sec" style="font-size:10px">Distance</div>
        <div class="fw-8" style="font-size:18px;margin-top:4px">4.2 <span style="font-size:11px;font-weight:600">km</span></div>
      </div>
      <div>
        <div class="text-sec" style="font-size:10px">Duration</div>
        <div class="fw-8" style="font-size:18px;margin-top:4px">1h 44m</div>
      </div>
      <div>
        <div class="text-sec" style="font-size:10px">Collected</div>
        <div class="fw-8 text-primary" style="font-size:18px;margin-top:4px">₹5,251</div>
      </div>
    </div>
  </div>
  <div class="card mb-16">
    <div class="timeline">
      <div class="tl-item done"><div class="row-title" style="font-size:12px">Service started</div><div class="row-sub">09:04 AM</div></div>
      <div class="tl-item done"><div class="row-title" style="font-size:12px">Work completed</div><div class="row-sub">10:47 AM</div></div>
      <div class="tl-item done"><div class="row-title" style="font-size:12px">Payment received</div><div class="row-sub">10:52 AM · UPI</div></div>
      <div class="tl-item done"><div class="row-title" style="font-size:12px">Job closed</div><div class="row-sub">10:54 AM</div></div>
    </div>
  </div>
  <button class="btn btn-primary btn-block">Back to Dashboard</button>
  <button class="btn btn-ghost btn-block btn-sm mt-8">View Service History</button>
  <div class="safe-bottom"></div>
</div>`;
    },
  },


  {
    num: 38,
    title: 'Service History',
    group: 'History',
    purpose: 'Browse past completed jobs with filters, amounts, ratings, and dates.',
    elements: [
      'Filter chips All / This Week / Paid / Free',
      'Job history list rows',
      'Amounts and star ratings',
      'Bottom nav Tasks active',
    ],
    notes: 'Syncs last 90 days offline. Tap row for full service report and invoice re-download.',
    render() {
      const jobs = [
        { id: 'SRV-78421', customer: 'Priya Sharma', vehicle: 'TN 09 AB 4521', date: '31 Jul 2026', amount: '₹5,251', rating: 4.8, type: 'Paid', today: true },
        { id: 'SRV-78398', customer: 'Rajesh Iyer', vehicle: 'KA 05 CD 8890', date: '30 Jul 2026', amount: '₹3,420', rating: 5.0, type: 'Paid' },
        { id: 'SRV-78356', customer: 'Kavitha Nair', vehicle: 'MH 12 EF 2201', date: '29 Jul 2026', amount: '₹0', rating: 4.5, type: 'Free' },
        { id: 'SRV-78312', customer: 'Anil Verma', vehicle: 'TN 07 GH 3344', date: '28 Jul 2026', amount: '₹7,890', rating: 4.2, type: 'Paid' },
        { id: 'SRV-78287', customer: 'Deepa Reddy', vehicle: 'AP 09 JK 5567', date: '27 Jul 2026', amount: '₹2,150', rating: 5.0, type: 'AMC' },
        { id: 'SRV-78241', customer: 'Suresh Kumar', vehicle: 'KL 01 LM 7788', date: '26 Jul 2026', amount: '₹4,680', rating: 3.8, type: 'Paid' },
      ];
      return `${statusBar('11:02')}
${header('Service History', { back: false, right: I.settings })}
<div class="app-scroll">
  <div class="section-pad" style="padding-bottom:0">
    <div class="tag-row mb-12">
      <span class="chip chip-green">All</span>
      <span class="chip chip-slate">This Week</span>
      <span class="chip chip-slate">Paid</span>
      <span class="chip chip-slate">Free</span>
      <span class="chip chip-slate">AMC</span>
    </div>
    <div class="grid-2 gap-8 mb-12">
      <div class="kpi-card kpi-green" style="min-height:64px;padding:10px">
        <div class="kpi-label">This Month</div>
        <div class="kpi-value" style="font-size:20px">47</div>
      </div>
      <div class="kpi-card kpi-blue" style="min-height:64px;padding:10px">
        <div class="kpi-label">Revenue</div>
        <div class="kpi-value" style="font-size:20px">₹1.8L</div>
      </div>
    </div>
  </div>
  <div class="section-pad">
    ${jobs.map(j => `
    <div class="card mb-8" style="padding:12px 14px">
      <div class="flex justify-between items-start mb-6">
        <div>
          <div class="row-title">${j.customer}</div>
          <div class="row-sub">${j.vehicle} · ${j.id}</div>
        </div>
        <span class="chip ${j.type === 'Free' ? 'chip-blue' : j.type === 'AMC' ? 'chip-amber' : 'chip-green'}">${j.type}</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-8">
          <span class="text-sec" style="font-size:11px">${I.calendar} ${j.date}${j.today ? ' · Today' : ''}</span>
        </div>
        <div class="flex items-center gap-10">
          <span class="fw-7" style="font-size:13px">${j.amount}</span>
          <span class="flex items-center gap-4" style="font-size:11px;color:var(--warning)">${I.star} ${j.rating}</span>
        </div>
      </div>
    </div>`).join('')}
    <div class="safe-bottom"></div>
  </div>
</div>
${bottomNav('tasks')}`;
    },
  },

  {
    num: 39,
    title: 'Notifications',
    group: 'Alerts',
    purpose: 'Central inbox for push notifications across approvals, payments, tasks, and sync events.',
    elements: [
      'Notification list with icons',
      'Approval, payment, new task, GPS sync, offline sync',
      'Bottom nav Alerts active',
    ],
    notes: 'Real-time via FCM. Offline queue replays on reconnect. Swipe to dismiss.',
    render() {
      const alerts = [
        { icon: I.check, color: 'var(--success-dim)', ic: 'var(--success)', title: 'Customer Approved Quotation', sub: 'Priya Sharma approved ₹5,251 · 10:12 AM', time: '42m ago', unread: true },
        { icon: I.bolt, color: 'var(--primary-dim)', ic: 'var(--primary)', title: 'Payment Received', sub: 'UPI ₹5,251 from Priya Sharma · UPI-9283746510', time: '10m ago', unread: true },
        { icon: I.tasks, color: 'var(--accent-dim)', ic: 'var(--accent)', title: 'New Task Assigned', sub: 'SRV-78455 · Rajesh Iyer · KA 05 CD 8890 · 2:30 PM', time: '1h ago', unread: true },
        { icon: I.loc, color: 'var(--accent-dim)', ic: 'var(--accent)', title: 'GPS Sync Complete', sub: 'Route SRV-78421 uploaded · 4.2 km tracked', time: '2h ago', unread: false },
        { icon: I.offline, color: 'var(--warning-dim)', ic: 'var(--warning)', title: 'Offline Sync Done', sub: '3 photos + 1 invoice queued · synced successfully', time: '3h ago', unread: false },
        { icon: I.bell, color: 'var(--input-bg)', ic: 'var(--text-secondary)', title: 'Shift Reminder', sub: 'Your shift ends in 2 hours · 6:00 PM', time: '4h ago', unread: false },
      ];
      return `${statusBar('11:05')}
${header('Notifications', { back: false, right: I.settings })}
<div class="app-scroll">
  <div class="section-pad" style="padding-bottom:0">
    <div class="flex justify-between items-center mb-12">
      <span class="chip chip-green">3 unread</span>
      <button class="btn btn-ghost btn-sm" style="padding:6px 12px">Mark all read</button>
    </div>
  </div>
  <div class="section-pad">
    ${alerts.map(a => `
    <div class="card mb-8" style="padding:12px 14px;${a.unread ? 'border-color:rgba(16,185,129,0.25)' : ''}">
      <div class="flex gap-12">
        <div style="width:40px;height:40px;border-radius:12px;background:${a.color};display:grid;place-items:center;color:${a.ic};flex-shrink:0">${a.icon}</div>
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <div class="row-title" style="font-size:13px">${a.title}</div>
            ${a.unread ? '<span class="live-dot" style="margin-top:4px"></span>' : ''}
          </div>
          <div class="row-sub" style="margin-top:3px;line-height:1.4">${a.sub}</div>
          <div class="text-muted" style="font-size:10px;margin-top:6px">${a.time}</div>
        </div>
      </div>
    </div>`).join('')}
    <div class="safe-bottom"></div>
  </div>
</div>
${bottomNav('notifications')}`;
    },
  },

  {
    num: 40,
    title: 'Profile',
    group: 'Profile',
    purpose: 'Engineer profile hub with stats, attendance shortcuts, credentials, and settings menu.',
    elements: [
      'Arjun Mehta avatar and stats',
      'Attendance check-in status',
      'Check Out CTA',
      'Rating 4.8 · 1,284 jobs',
      'Menu rows Attendance, Documents, Digital Signature, Language, Offline Mode, GPS Sync',
      'Bottom nav Profile active',
    ],
    notes: 'Emp ID ER-ENG-2041. Check Out available when shift is active. Tap Settings for app preferences.',
    render() {
      const menuItems = [
        { icon: I.clock, label: 'Attendance', sub: 'Checked in 08:58 AM · Tap to check out' },
        { icon: I.pdf, label: 'Documents', sub: 'ID, certifications, insurance' },
        { icon: I.edit, label: 'Digital Signature', sub: 'Registered signature on file' },
        { icon: '🌐', label: 'Language', sub: 'English (India)', emoji: true },
        { icon: I.offline, label: 'Offline Mode', sub: 'Enabled · 3 items queued' },
        { icon: I.loc, label: 'GPS Sync', sub: 'Last sync 2 min ago · ±4m accuracy' },
      ];
      return `${statusBar('11:08')}
${header('Profile', { back: false, right: I.settings })}
<div class="app-scroll">
  <div class="section-pad">
    <div class="card glass text-center mb-16" style="padding:24px 16px;background:var(--grad-card)">
      <div class="avatar lg" style="margin:0 auto 12px;background:var(--grad-primary);box-shadow:0 8px 24px var(--primary-glow)">AM</div>
      <div class="fw-8" style="font-size:20px">Arjun Mehta</div>
      <div class="text-sec" style="font-size:12px;margin-top:2px">Field Service Engineer</div>
      <div class="chip chip-slate mt-8" style="font-family:var(--mono);font-size:10px">ER-ENG-2041</div>
      <div class="grid-3 gap-8 mt-16">
        <div>
          <div class="fw-8 text-warn" style="font-size:18px">${I.star} 4.8</div>
          <div class="text-sec" style="font-size:10px">Rating</div>
        </div>
        <div>
          <div class="fw-8" style="font-size:18px">1,284</div>
          <div class="text-sec" style="font-size:10px">Jobs Done</div>
        </div>
        <div>
          <div class="fw-8 text-primary" style="font-size:18px">47</div>
          <div class="text-sec" style="font-size:10px">This Month</div>
        </div>
      </div>
    </div>
    <div class="card glass mb-16" style="padding:12px 14px">
      <div class="flex items-center justify-between">
        <div>
          <div style="font-size:12px;font-weight:650">${I.check} Checked In · 08:58 AM</div>
          <div class="text-muted" style="font-size:11px;margin-top:2px">Shift active · Koramangala Depot</div>
        </div>
        <button class="btn btn-outline btn-sm" style="padding:8px 12px;font-size:11px">${I.logout} Check Out</button>
      </div>
    </div>
    <div class="grid-2 gap-8 mb-16">
      <div class="kpi-card kpi-violet" style="min-height:64px;padding:10px">
        <div class="kpi-label">Today's KM</div>
        <div class="kpi-value" style="font-size:20px">47.2</div>
      </div>
      <div class="kpi-card kpi-cyan" style="min-height:64px;padding:10px">
        <div class="kpi-label">Hours Today</div>
        <div class="kpi-value" style="font-size:20px">5h 40m</div>
      </div>
    </div>
    <div class="label">Account</div>
    <div class="card mb-16">
      ${menuItems.map((m, i) => `
      <div class="list-row" style="${i === menuItems.length - 1 ? 'border:none' : ''}">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--input-bg);display:grid;place-items:center;font-size:${m.emoji ? '16px' : 'inherit'};color:var(--text-secondary)">${m.emoji ? m.icon : m.icon}</div>
        <div class="flex-1">
          <div class="row-title" style="font-size:13px">${m.label}</div>
          <div class="row-sub">${m.sub}</div>
        </div>
        ${I.chevron}
      </div>`).join('')}
    </div>
    <button class="btn btn-outline btn-block btn-sm">${I.settings} App Settings</button>
    <div class="safe-bottom"></div>
  </div>
</div>
${bottomNav('profile')}`;
    },
  },

  {
    num: 41,
    title: 'Settings',
    group: 'Profile',
    purpose: 'Application preferences including theme, notifications, offline mode, and map provider.',
    elements: [
      'Dark Mode toggle ON',
      'Push Notifications toggle',
      'Offline Mode toggle',
      'Photo Compression toggle',
      'Language English',
      'Map provider MapLibre/OSM note',
      'Version 2.4.1',
    ],
    notes: 'Settings persist locally and sync to cloud on login. MapLibre uses OpenStreetMap tiles — no Google dependency.',
    render() {
      return `${statusBar('11:10')}
${header('Settings', { right: I.close })}
<div class="app-scroll section-pad">
  <div class="label">Appearance</div>
  <div class="card mb-16">
    <div class="toggle-row" style="border:none">
      <div>
        <div class="row-title" style="font-size:13px">Dark Mode</div>
        <div class="row-sub">Premium dark theme active</div>
      </div>
      <div class="toggle"></div>
    </div>
  </div>
  <div class="label">Notifications & Sync</div>
  <div class="card mb-16">
    <div class="toggle-row">
      <div>
        <div class="row-title" style="font-size:13px">Push Notifications</div>
        <div class="row-sub">Tasks, payments, approvals</div>
      </div>
      <div class="toggle"></div>
    </div>
    <div class="toggle-row">
      <div>
        <div class="row-title" style="font-size:13px">Offline Mode</div>
        <div class="row-sub">Cache tasks & photos locally</div>
      </div>
      <div class="toggle"></div>
    </div>
    <div class="toggle-row" style="border:none">
      <div>
        <div class="row-title" style="font-size:13px">GPS Background Sync</div>
        <div class="row-sub">Track route while app minimized</div>
      </div>
      <div class="toggle"></div>
    </div>
  </div>
  <div class="label">Media & Maps</div>
  <div class="card mb-16">
    <div class="toggle-row">
      <div>
        <div class="row-title" style="font-size:13px">Photo Compression</div>
        <div class="row-sub">Reduce upload size · ~60% savings</div>
      </div>
      <div class="toggle"></div>
    </div>
    <div class="list-row" style="border:none;padding-bottom:0">
      <div style="width:36px;height:36px;border-radius:10px;background:var(--input-bg);display:grid;place-items:center;font-size:16px">🌐</div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Language</div>
        <div class="row-sub">English (India)</div>
      </div>
      ${I.chevron}
    </div>
    <div class="divider"></div>
    <div class="list-row" style="border:none">
      <div style="width:36px;height:36px;border-radius:10px;background:var(--accent-dim);display:grid;place-items:center;color:var(--accent)">${I.map}</div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Map Provider</div>
        <div class="row-sub">MapLibre · OpenStreetMap tiles</div>
      </div>
      <span class="chip chip-blue">OSM</span>
    </div>
  </div>
  <div class="card mb-16">
    <div class="list-row" style="border:none">
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">App Version</div>
        <div class="row-sub">E Royce Service Manager</div>
      </div>
      <span class="chip chip-slate" style="font-family:var(--mono)">v2.4.1</span>
    </div>
  </div>
  <button class="btn btn-danger btn-block btn-sm">Sign Out</button>
  <div class="text-center text-muted mt-16" style="font-size:10px">© 2026 E Royce Mobility Pvt Ltd</div>
  <div class="safe-bottom"></div>
</div>`;
    },
  },
];
