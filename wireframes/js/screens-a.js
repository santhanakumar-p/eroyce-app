/* E Royce Service Manager — Screens 01–16 (Auth, Dashboard, Tasks, Navigation) */
const SCREENS_A = [
  {
    num: 1,
    title: 'Splash Screen',
    group: 'Auth',
    purpose: 'Brand introduction and app initialization while loading session and GPS modules.',
    elements: ['ER logo mark', 'E Royce brand name', 'Live Tracking tagline', 'Animated loading bar', 'Version 2.4.1'],
    notes: 'Full-screen gradient splash with glass logo tile. Loading bar animates to 68%. No bottom nav.',
    render() {
      return `${statusBar('09:41')}
<div class="splash-bg">
  <div class="logo-mark" style="width:88px;height:88px;border-radius:24px;font-size:32px;box-shadow:0 8px 32px var(--primary-glow)">ER</div>
  <h1 style="font-size:28px;font-weight:800;margin-top:28px;letter-spacing:-0.04em">E Royce</h1>
  <p style="font-size:14px;color:var(--text-secondary);margin-top:8px;font-weight:600">Live Tracking · Field Service</p>
  <div style="width:220px;height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin-top:40px">
    <div style="width:68%;height:100%;background:var(--grad-primary);border-radius:2px;box-shadow:0 0 12px var(--primary-glow)"></div>
  </div>
  <p style="font-size:11px;color:var(--text-muted);margin-top:12px;font-weight:500">Initializing GPS &amp; sync modules…</p>
  <p style="font-size:10px;color:var(--text-muted);margin-top:auto;font-family:var(--mono);opacity:0.6">v2.4.1 · Build 240731</p>
</div>`;
    },
  },

  {
    num: 2,
    title: 'Login',
    group: 'Auth',
    purpose: 'Engineer authentication via registered mobile number with country code prefix.',
    elements: ['Mobile input +91 prefix', 'Continue CTA', 'Engineer login label', 'Privacy policy note', 'Shield icon'],
    notes: 'Clean auth screen. Pre-filled partial number optional. Links to admin approval flow.',
    render() {
      return `${statusBar()}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:48px">
    <div class="logo-mark" style="width:56px;height:56px;border-radius:16px;font-size:18px;margin-bottom:24px">ER</div>
    <h2 style="font-size:24px;font-weight:800;letter-spacing:-0.03em;margin-bottom:6px">Engineer Login</h2>
    <p class="text-sec" style="font-size:13px;margin-bottom:28px">Sign in with your registered mobile number</p>
    <label class="label">Mobile Number</label>
    <div class="input-field mb-16">
      <span class="prefix">+91</span>
      <span class="value">98765 43210</span>
    </div>
    <button class="btn btn-primary btn-block">${I.send} Continue</button>
    <div class="card glass mt-24" style="padding:14px;display:flex;gap:12px;align-items:flex-start">
      <div style="color:var(--primary);flex-shrink:0;margin-top:2px">${I.shield}</div>
      <p style="font-size:11.5px;color:var(--text-secondary);line-height:1.55">Your data is encrypted end-to-end. By continuing you agree to our <span class="text-primary fw-6">Privacy Policy</span> and Terms of Service.</p>
    </div>
    <p class="text-center text-muted mt-20" style="font-size:12px">Need help? <span class="text-accent fw-6">Contact Support</span></p>
  </div>
</div>`;
    },
  },

  {
    num: 3,
    title: 'Waiting For Admin Approval',
    group: 'Auth',
    purpose: 'Pending state after registration — engineer awaits admin verification before app access.',
    elements: ['Pending status badge', 'Ticket ER-ENG-2041', 'Clock icon', 'Contact support CTA', 'Refresh status button'],
    notes: 'Amber warning tone. Shows registration ticket ID. Polling or manual refresh implied.',
    render() {
      return `${statusBar()}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:60px;text-align:center">
    <div style="width:80px;height:80px;border-radius:50%;background:var(--warning-dim);display:grid;place-items:center;margin:0 auto;color:var(--warning)">${I.clock}</div>
    <h2 style="font-size:22px;font-weight:800;margin-top:24px;letter-spacing:-0.03em">Awaiting Approval</h2>
    <p class="text-sec" style="font-size:13px;margin-top:8px;line-height:1.5">Your engineer profile is under review by the admin team.</p>
    <div class="chip chip-amber mt-20" style="font-size:12px;padding:8px 16px">${I.clock} Pending Verification</div>
    <div class="card glass mt-24" style="text-align:left">
      <div class="flex justify-between items-center mb-8">
        <span class="text-muted" style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em">Registration Ticket</span>
        <span class="chip chip-slate">New</span>
      </div>
      <p style="font-size:20px;font-weight:800;font-family:var(--mono);letter-spacing:0.02em;color:var(--primary)">ER-ENG-2041</p>
      <div class="divider"></div>
      <div class="list-row" style="padding:8px 0">
        <div class="avatar sm">AM</div>
        <div class="flex-1">
          <div class="row-title">Arjun Mehta</div>
          <div class="row-sub">Field Service Engineer · Bangalore</div>
        </div>
      </div>
      <div class="flex gap-8 mt-8" style="font-size:11px;color:var(--text-muted)">
        <span>${I.calendar} Submitted today</span>
        <span>·</span>
        <span>Est. 24 hrs</span>
      </div>
    </div>
    <button class="btn btn-outline btn-block mt-20">${I.phone} Contact Support</button>
    <button class="btn btn-ghost btn-block mt-8 btn-sm">Refresh Status</button>
  </div>
</div>`;
    },
  },

  {
    num: 4,
    title: 'Admin Approved',
    group: 'Auth',
    purpose: 'Success confirmation when admin approves engineer account — gateway to OTP verification.',
    elements: ['Success burst icon', 'Approved message', 'Proceed to Login CTA', 'Welcome copy', 'Checkmark animation'],
    notes: 'Green celebration screen. Single primary CTA to continue onboarding.',
    render() {
      return `${statusBar()}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:72px;text-align:center">
    <div class="success-burst">${I.check}</div>
    <h2 style="font-size:24px;font-weight:800;margin-top:28px;letter-spacing:-0.03em">You're Approved!</h2>
    <p class="text-sec" style="font-size:14px;margin-top:10px;line-height:1.55;max-width:280px;margin-left:auto;margin-right:auto">Welcome to E Royce, <span class="fw-7 text-primary">Arjun</span>. Your engineer account has been verified by admin.</p>
    <div class="card glass mt-28" style="text-align:left;padding:14px">
      <div class="flex items-center gap-12">
        <div class="avatar sm">AM</div>
        <div class="flex-1">
          <div class="row-title">Arjun Mehta</div>
          <div class="row-sub">ER-ENG-2041 · Active</div>
        </div>
        <span class="chip chip-green">${I.check} Verified</span>
      </div>
    </div>
    <button class="btn btn-primary btn-block mt-28">Proceed to Login ${I.chevron}</button>
    <p class="text-muted mt-16" style="font-size:11px">Approved on 31 Jul 2026 · 09:12 AM</p>
  </div>
</div>`;
    },
  },

  {
    num: 5,
    title: 'OTP Verification',
    group: 'Auth',
    purpose: 'Six-digit OTP entry to verify engineer mobile number after admin approval.',
    elements: ['6 OTP input boxes', 'Partial fill 4-8-2', 'Resend timer 0:28', 'Verify CTA', 'Edit number link'],
    notes: 'First three boxes filled (4, 8, 2), fourth active with cursor. Resend disabled until timer expires.',
    render() {
      return `${statusBar()}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:32px">
    ${header('Verify OTP', { back: true, right: I.more })}
    <p class="text-sec" style="font-size:13px;margin-bottom:28px;line-height:1.5">Enter the 6-digit code sent to<br><span class="fw-7 text-primary">+91 98765 43210</span></p>
    <div class="otp-boxes mb-16">
      <div class="otp-box filled">4</div>
      <div class="otp-box filled">8</div>
      <div class="otp-box filled">2</div>
      <div class="otp-box active"></div>
      <div class="otp-box"></div>
      <div class="otp-box"></div>
    </div>
    <p class="text-center text-muted" style="font-size:12px">Resend OTP in <span class="fw-7 text-warn" style="font-family:var(--mono)">0:28</span></p>
    <button class="btn btn-primary btn-block mt-24">Verify &amp; Continue</button>
    <p class="text-center mt-16" style="font-size:12px"><span class="text-muted">Wrong number?</span> <span class="text-accent fw-6">Edit</span></p>
    <div class="card glass mt-28" style="padding:14px;display:flex;gap:10px;align-items:center">
      <div style="color:var(--accent)">${I.shield}</div>
      <p style="font-size:11px;color:var(--text-secondary);line-height:1.5">OTP expires in 10 minutes. Do not share this code with anyone.</p>
    </div>
  </div>
</div>`;
    },
  },

  {
    num: 6,
    title: 'Dashboard',
    group: 'Dashboard',
    purpose: 'Engineer home screen with KPIs, upcoming services, quick actions, and live status overview.',
    elements: ['8 KPI cards', 'Upcoming services list', 'Quick action buttons', 'Circular progress 72%', 'Mini bar chart', 'Notification badge', 'Bottom nav Home active'],
    notes: 'Primary hub after login. Shows Arjun Mehta greeting, live online status, and today\'s workload snapshot.',
    render() {
      return `${statusBar()}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:8px">
    <div class="flex justify-between items-center mb-16">
      <div>
        <p class="text-muted" style="font-size:12px;font-weight:500">Good morning,</p>
        <h2 style="font-size:20px;font-weight:800;letter-spacing:-0.03em">Arjun Mehta</h2>
      </div>
      <div class="flex gap-8 items-center">
        <div class="icon-btn" style="position:relative">
          ${I.bell}
          <span style="position:absolute;top:6px;right:6px;width:8px;height:8px;border-radius:50%;background:var(--danger);border:2px solid var(--card)"></span>
        </div>
        <div class="avatar sm">AM</div>
      </div>
    </div>
    <div class="card glass mb-12" style="padding:12px 14px;display:flex;align-items:center;justify-content:space-between">
      <div class="flex items-center gap-8">
        <span class="live-dot"></span>
        <span style="font-size:13px;font-weight:650">Live Status: <span class="text-primary">Online</span></span>
      </div>
      <span class="chip chip-green">${I.wifi} GPS Active</span>
    </div>
    <div class="grid-2 mb-10">
      <div class="kpi-card kpi-green">
        <div class="kpi-label">Today's Tasks</div>
        <div class="kpi-value">8</div>
        <div class="kpi-sub">${I.calendar} 31 Jul 2026</div>
      </div>
      <div class="kpi-card kpi-amber">
        <div class="kpi-label">Pending</div>
        <div class="kpi-value">3</div>
        <div class="kpi-sub">Awaiting start</div>
      </div>
      <div class="kpi-card kpi-blue">
        <div class="kpi-label">Completed</div>
        <div class="kpi-value">4</div>
        <div class="kpi-sub">${I.check} On track</div>
      </div>
      <div class="kpi-card kpi-violet">
        <div class="kpi-label">In Progress</div>
        <div class="kpi-value">1</div>
        <div class="kpi-sub">${I.bolt} Active now</div>
      </div>
    </div>
    <div class="grid-3 mb-16">
      <div class="kpi-card kpi-cyan" style="min-height:76px;padding:12px">
        <div class="kpi-label" style="font-size:9px">Today's KM</div>
        <div class="kpi-value" style="font-size:18px">47.2</div>
      </div>
      <div class="kpi-card kpi-orange" style="min-height:76px;padding:12px">
        <div class="kpi-label" style="font-size:9px">Working Hrs</div>
        <div class="kpi-value" style="font-size:18px">5h 40m</div>
      </div>
      <div class="kpi-card kpi-rose" style="min-height:76px;padding:12px">
        <div class="kpi-label" style="font-size:9px">Avg Rating</div>
        <div class="kpi-value" style="font-size:18px">4.8</div>
      </div>
    </div>
    <div class="card glass mb-16" style="padding:14px">
      <div class="flex justify-between items-center mb-12">
        <span class="fw-7" style="font-size:14px">Daily Progress</span>
        <div class="progress-ring"><span>72%</span></div>
      </div>
      <div class="chart-bars">
        <div class="bar" style="height:45%;opacity:0.5"></div>
        <div class="bar" style="height:62%;opacity:0.6"></div>
        <div class="bar" style="height:38%;opacity:0.5"></div>
        <div class="bar" style="height:78%;opacity:0.85"></div>
        <div class="bar" style="height:55%;opacity:0.65"></div>
        <div class="bar" style="height:90%;opacity:1"></div>
        <div class="bar" style="height:72%;opacity:0.8"></div>
      </div>
      <div class="flex justify-between mt-8" style="font-size:9px;color:var(--text-muted);font-weight:600">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Today</span>
      </div>
    </div>
    <div class="flex justify-between items-center mb-10">
      <span class="fw-7" style="font-size:14px">Upcoming Services</span>
      <span class="text-accent fw-6" style="font-size:12px">View All</span>
    </div>
    <div class="card mb-12" style="padding:0">
      <div class="list-row" style="padding:14px 16px">
        <div class="avatar sm" style="background:var(--grad-primary)">PS</div>
        <div class="flex-1">
          <div class="row-title">Priya Sharma</div>
          <div class="row-sub">Free Service · TN 09 AB 4521 · 10:30 AM</div>
        </div>
        <span class="chip chip-amber">Next</span>
      </div>
      <div class="list-row" style="padding:14px 16px">
        <div class="avatar sm" style="background:var(--grad-accent)">RI</div>
        <div class="flex-1">
          <div class="row-title">Rajesh Iyer</div>
          <div class="row-sub">Paid Service · KA 05 CD 8890 · 01:00 PM</div>
        </div>
        <span class="chip chip-slate">Scheduled</span>
      </div>
      <div class="list-row" style="padding:14px 16px">
        <div class="avatar sm" style="background:var(--grad-purple)">KN</div>
        <div class="flex-1">
          <div class="row-title">Kavitha Nair</div>
          <div class="row-sub">AMC · MH 12 EF 2201 · 04:30 PM</div>
        </div>
        <span class="chip chip-slate">Scheduled</span>
      </div>
    </div>
    <p class="fw-7 mb-10" style="font-size:14px">Quick Actions</p>
    <div class="grid-2 gap-8 mb-8">
      <button class="btn btn-ghost btn-sm" style="flex-direction:column;padding:16px 10px;gap:6px">${I.nav}<span style="font-size:10px">Navigate</span></button>
      <button class="btn btn-ghost btn-sm" style="flex-direction:column;padding:16px 10px;gap:6px">${I.qr}<span style="font-size:10px">Scan QR</span></button>
      <button class="btn btn-ghost btn-sm" style="flex-direction:column;padding:16px 10px;gap:6px">${I.phone}<span style="font-size:10px">Call Hub</span></button>
      <button class="btn btn-ghost btn-sm" style="flex-direction:column;padding:16px 10px;gap:6px">${I.settings}<span style="font-size:10px">Settings</span></button>
    </div>
  </div>
</div>
${bottomNav('home')}`;
    },
  },

  {
    num: 7,
    title: "Today's Tasks",
    group: 'Tasks',
    purpose: 'Filterable list of all scheduled service tasks for the current day with status and distance.',
    elements: ['Filter chips Free/Paid/Warranty/AMC/Emergency', 'Task cards with customer', 'Vehicle reg & model', 'Time slot', 'Distance km', 'Status chips'],
    notes: 'Scrollable task list. First card highlighted as in-progress. Filter chips scroll horizontally without a visible scrollbar.',
    render() {
      return `${statusBar()}
${header("Today's Tasks", { back: true, right: I.bell })}
<div class="section-pad" style="padding-top:0;padding-bottom:8px">
  <div class="tag-row mb-16 hide-scrollbar" style="overflow-x:auto;flex-wrap:nowrap;padding-bottom:4px">
    <span class="chip chip-green" style="flex-shrink:0">All · 8</span>
    <span class="chip chip-slate" style="flex-shrink:0">Free</span>
    <span class="chip chip-slate" style="flex-shrink:0">Paid</span>
    <span class="chip chip-slate" style="flex-shrink:0">Warranty</span>
    <span class="chip chip-slate" style="flex-shrink:0">AMC</span>
    <span class="chip chip-slate" style="flex-shrink:0">Emergency</span>
  </div>
</div>
<div class="app-scroll">
  <div class="section-pad" style="padding-top:0">
    <div class="card mb-12" style="border-color:rgba(16,185,129,0.3);background:linear-gradient(145deg,rgba(16,185,129,0.08),var(--card))">
      <div class="flex justify-between items-start mb-10">
        <div class="flex gap-10">
          <div class="avatar sm">PS</div>
          <div>
            <div class="row-title">Priya Sharma</div>
            <div class="row-sub">#SRV-78421 · Free Service</div>
          </div>
        </div>
        <span class="chip chip-green">${I.bolt} In Progress</span>
      </div>
      <div class="flex gap-8 mb-8" style="font-size:11px;color:var(--text-secondary)">
        <span class="chip chip-slate">${I.scooter} TN 09 AB 4521</span>
        <span>Ather 450X</span>
      </div>
      <div class="flex justify-between" style="font-size:11px">
        <span class="text-sec">${I.clock} 10:30 – 11:30 AM</span>
        <span class="text-accent fw-6">${I.loc} 4.2 km</span>
      </div>
    </div>
    <div class="card mb-12">
      <div class="flex justify-between items-start mb-10">
        <div class="flex gap-10">
          <div class="avatar sm" style="background:var(--grad-accent)">RI</div>
          <div>
            <div class="row-title">Rajesh Iyer</div>
            <div class="row-sub">#SRV-78435 · Paid Service</div>
          </div>
        </div>
        <span class="chip chip-amber">Pending</span>
      </div>
      <div class="flex gap-8 mb-8" style="font-size:11px;color:var(--text-secondary)">
        <span class="chip chip-slate">${I.scooter} KA 05 CD 8890</span>
        <span>Ola S1 Pro</span>
      </div>
      <div class="flex justify-between" style="font-size:11px">
        <span class="text-sec">${I.clock} 01:00 – 02:00 PM</span>
        <span class="text-accent fw-6">${I.loc} 6.8 km</span>
      </div>
    </div>
    <div class="card mb-12">
      <div class="flex justify-between items-start mb-10">
        <div class="flex gap-10">
          <div class="avatar sm" style="background:var(--grad-purple)">KN</div>
          <div>
            <div class="row-title">Kavitha Nair</div>
            <div class="row-sub">#SRV-78452 · AMC Service</div>
          </div>
        </div>
        <span class="chip chip-blue">Scheduled</span>
      </div>
      <div class="flex gap-8 mb-8" style="font-size:11px;color:var(--text-secondary)">
        <span class="chip chip-slate">${I.scooter} MH 12 EF 2201</span>
        <span>TVS iQube</span>
      </div>
      <div class="flex justify-between" style="font-size:11px">
        <span class="text-sec">${I.clock} 04:30 – 05:30 PM</span>
        <span class="text-accent fw-6">${I.loc} 9.1 km</span>
      </div>
    </div>
    <div class="card mb-12" style="opacity:0.65">
      <div class="flex justify-between items-start mb-10">
        <div class="flex gap-10">
          <div class="avatar sm" style="background:var(--grad-cyan)">VS</div>
          <div>
            <div class="row-title">Vikram Singh</div>
            <div class="row-sub">#SRV-78408 · Warranty</div>
          </div>
        </div>
        <span class="chip chip-green">${I.check} Done</span>
      </div>
      <div class="flex gap-8 mb-8" style="font-size:11px;color:var(--text-secondary)">
        <span class="chip chip-slate">${I.scooter} TN 07 GH 3344</span>
        <span>Ather 450S</span>
      </div>
      <div class="flex justify-between" style="font-size:11px">
        <span class="text-sec">${I.clock} 08:00 – 09:00 AM</span>
        <span class="text-muted">${I.loc} 3.5 km</span>
      </div>
    </div>
  </div>
</div>
${bottomNav('tasks')}`;
    },
  },

  {
    num: 8,
    title: 'Task Details',
    group: 'Tasks',
    purpose: 'Full service job view with timeline, service type, and navigate-to-customer CTA.',
    elements: ['Service #SRV-78421', 'Free Service + Battery Check chips', 'Status timeline', 'Customer & vehicle summary', 'Navigate CTA', 'Call & message actions'],
    notes: 'Primary action is Navigate. Timeline shows Assigned → En Route → At Customer → In Service flow.',
    render() {
      return `${statusBar()}
${header('Task Details', { back: true, right: I.more })}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:0">
    <div class="card glass mb-12">
      <div class="flex justify-between items-start mb-10">
        <div>
          <p class="text-muted" style="font-size:11px;font-weight:600;font-family:var(--mono)">SRV-78421</p>
          <h3 style="font-size:17px;font-weight:800;margin-top:4px">Free Service + Battery Check</h3>
        </div>
        <span class="chip chip-green">${I.bolt} In Progress</span>
      </div>
      <div class="tag-row">
        <span class="chip chip-green">Free Service</span>
        <span class="chip chip-blue">Battery Check</span>
        <span class="chip chip-slate">${I.clock} 10:30 AM</span>
      </div>
    </div>
    <div class="card mb-12">
      <div class="list-row" style="padding:0 0 12px">
        <div class="avatar sm">PS</div>
        <div class="flex-1">
          <div class="row-title">Priya Sharma</div>
          <div class="row-sub">+91 98765 43210 · Indiranagar</div>
        </div>
        <div class="icon-btn" style="width:36px;height:36px;border-radius:10px">${I.phone}</div>
      </div>
      <div class="divider"></div>
      <div class="flex items-center gap-10" style="padding-top:4px">
        <div style="color:var(--primary)">${I.scooter}</div>
        <div>
          <div class="row-title" style="font-size:12px">TN 09 AB 4521 · Ather 450X Gen 3</div>
          <div class="row-sub">Odometer 12,480 km · SOH 86%</div>
        </div>
      </div>
    </div>
    <p class="fw-7 mb-10" style="font-size:13px">Service Timeline</p>
    <div class="card mb-16">
      <div class="timeline">
        <div class="tl-item done">
          <div class="row-title" style="font-size:12px">Assigned</div>
          <div class="row-sub">09:15 AM · By dispatch</div>
        </div>
        <div class="tl-item done">
          <div class="row-title" style="font-size:12px">En Route</div>
          <div class="row-sub">09:42 AM · GPS tracking active</div>
        </div>
        <div class="tl-item">
          <div class="row-title" style="font-size:12px">At Customer</div>
          <div class="row-sub">Expected 10:28 AM</div>
        </div>
        <div class="tl-item pending">
          <div class="row-title" style="font-size:12px">Service Started</div>
          <div class="row-sub">Pending OTP verification</div>
        </div>
        <div class="tl-item pending">
          <div class="row-title" style="font-size:12px">Completed</div>
          <div class="row-sub">—</div>
        </div>
      </div>
    </div>
    <div class="grid-2 gap-8 mb-12">
      <button class="btn btn-outline btn-sm">${I.phone} Call</button>
      <button class="btn btn-outline btn-sm">${I.whatsapp} WhatsApp</button>
    </div>
    <button class="btn btn-accent btn-block">${I.nav} Navigate to Customer</button>
    <p class="text-center text-muted mt-10" style="font-size:11px">${I.loc} 4.2 km · ETA 18 min</p>
  </div>
</div>`;
    },
  },

  {
    num: 9,
    title: 'Customer Details',
    group: 'Tasks',
    purpose: 'Customer profile with contact info, address, service history notes, and communication shortcuts.',
    elements: ['Priya Sharma profile', 'Phone +91 98765 43210', 'Indiranagar Bangalore address', 'Service notes', 'Call & WhatsApp CTAs', 'Map preview link'],
    notes: 'Editable notes field for engineer observations. Links to vehicle details and navigation.',
    render() {
      return `${statusBar()}
${header('Customer Details', { back: true, right: I.edit })}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:0">
    <div class="card glass text-center mb-16" style="padding:24px">
      <div class="avatar lg" style="margin:0 auto;background:var(--grad-primary)">PS</div>
      <h3 style="font-size:20px;font-weight:800;margin-top:14px">Priya Sharma</h3>
      <p class="text-sec" style="font-size:13px;margin-top:4px">Customer since Jan 2024</p>
      <div class="flex justify-center gap-8 mt-14">
        <span class="chip chip-green">${I.star} 4.9 Rating</span>
        <span class="chip chip-blue">3 Services</span>
      </div>
    </div>
    <div class="card mb-12">
      <div class="list-row" style="padding:10px 0">
        <div style="color:var(--primary)">${I.phone}</div>
        <div class="flex-1">
          <div class="row-sub">Mobile</div>
          <div class="row-title">+91 98765 43210</div>
        </div>
        <div class="icon-btn" style="width:34px;height:34px;border-radius:10px">${I.phone}</div>
      </div>
      <div class="list-row" style="padding:10px 0">
        <div style="color:var(--accent)">${I.loc}</div>
        <div class="flex-1">
          <div class="row-sub">Address</div>
          <div class="row-title" style="font-size:12px;line-height:1.45">#42, 1st Cross, Indiranagar,<br>Bangalore 560038</div>
        </div>
      </div>
      <div class="list-row" style="padding:10px 0">
        <div style="color:var(--warning)">${I.calendar}</div>
        <div class="flex-1">
          <div class="row-sub">Preferred Slot</div>
          <div class="row-title">10:30 – 11:30 AM</div>
        </div>
      </div>
    </div>
    <p class="label">Engineer Notes</p>
    <div class="card mb-16" style="padding:14px;background:var(--input-bg)">
      <p style="font-size:12.5px;color:var(--text-secondary);line-height:1.55">Customer prefers calls before arrival. Gate code: <span class="fw-7 text-primary">#4521</span>. Previous service — brake pad replacement (Mar 2026). Parking available in basement B2.</p>
    </div>
    <div class="grid-2 gap-8 mb-12">
      <button class="btn btn-primary btn-sm">${I.phone} Call</button>
      <button class="btn btn-outline btn-sm">${I.whatsapp} WhatsApp</button>
    </div>
    <button class="btn btn-accent btn-block btn-sm">${I.nav} Navigate to Address</button>
  </div>
</div>`;
    },
  },

  {
    num: 10,
    title: 'Vehicle Details',
    group: 'Tasks',
    purpose: 'EV vehicle profile with registration, VIN, battery health, odometer, and service history.',
    elements: ['TN 09 AB 4521 reg', 'Ather 450X Gen 3', 'VIN ATH450X2024IN8821', 'Battery SOH 86%', 'Odometer 12,480 km', 'Last service date', 'Warranty status'],
    notes: 'Linked to Priya Sharma task. Shows battery health bar and warranty chip.',
    render() {
      return `${statusBar()}
${header('Vehicle Details', { back: true, right: I.qr })}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:0">
    <div class="card glass mb-12" style="background:var(--grad-card);padding:18px">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-muted" style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em">Registration</p>
          <h3 style="font-size:22px;font-weight:800;font-family:var(--mono);margin-top:4px;letter-spacing:0.04em">TN 09 AB 4521</h3>
          <p class="text-sec" style="font-size:14px;margin-top:6px;font-weight:650">Ather 450X Gen 3</p>
        </div>
        <div style="color:var(--primary);opacity:0.8">${I.scooter}</div>
      </div>
      <div class="tag-row mt-12">
        <span class="chip chip-green">Under Warranty</span>
        <span class="chip chip-blue">EV · 2-Wheeler</span>
      </div>
    </div>
    <div class="card mb-12">
      <div class="list-row" style="padding:8px 0">
        <div class="flex-1">
          <div class="row-sub">VIN</div>
          <div class="row-title" style="font-family:var(--mono);font-size:11px">ATH450X2024IN8821</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="list-row" style="padding:8px 0">
        <div class="flex-1">
          <div class="row-sub">Battery State of Health</div>
          <div class="flex items-center gap-10 mt-4">
            <div style="flex:1;height:8px;border-radius:4px;background:var(--border);overflow:hidden">
              <div style="width:86%;height:100%;background:var(--grad-primary);border-radius:4px"></div>
            </div>
            <span class="fw-8 text-primary" style="font-size:16px">86%</span>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="grid-2" style="padding-top:8px">
        <div>
          <div class="row-sub">Odometer</div>
          <div class="row-title">12,480 km</div>
        </div>
        <div>
          <div class="row-sub">Motor</div>
          <div class="row-title">6.4 kW · BLDC</div>
        </div>
      </div>
    </div>
    <div class="card mb-12">
      <p class="fw-7 mb-10" style="font-size:13px">Service History</p>
      <div class="timeline">
        <div class="tl-item done">
          <div class="row-title" style="font-size:12px">Free Service #1</div>
          <div class="row-sub">15 Mar 2026 · Brake pad check</div>
        </div>
        <div class="tl-item done">
          <div class="row-title" style="font-size:12px">PDI Inspection</div>
          <div class="row-sub">10 Jan 2024 · Delivery</div>
        </div>
      </div>
    </div>
    <div class="card mb-12" style="padding:14px">
      <div class="flex justify-between">
        <div>
          <div class="row-sub">Last Service</div>
          <div class="row-title">15 Mar 2026</div>
        </div>
        <div style="text-align:right">
          <div class="row-sub">Next Due</div>
          <div class="row-title text-warn">Today</div>
        </div>
      </div>
    </div>
    <button class="btn btn-outline btn-block btn-sm">${I.pdf} View Service Manual</button>
  </div>
</div>`;
    },
  },

  {
    num: 11,
    title: 'Navigate To Customer',
    group: 'Navigation',
    purpose: 'Pre-navigation map view showing route, ETA, distance, and start navigation action.',
    elements: ['OSM-style map canvas', 'Blue SVG route', 'Scooter marker', 'Customer pin', 'ETA 18 min', '4.2 km distance', 'Start Navigation CTA'],
    notes: 'Map preview before live tracking. Bottom card shows destination summary.',
    render() {
      return `${statusBar()}
<div style="flex:1;position:relative;display:flex;flex-direction:column">
  <div class="map-canvas" style="flex:1;min-height:0">
    <svg class="map-route" viewBox="0 0 366 520" style="position:absolute;inset:0;width:100%;height:100%">
      <path d="M60,420 C120,380 180,320 220,260 S300,140 310,80" stroke="#2563EB" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M60,420 C120,380 180,320 220,260 S300,140 310,80" stroke="rgba(37,99,235,0.3)" stroke-width="12" fill="none" stroke-linecap="round"/>
    </svg>
    <div class="marker" style="left:16%;top:78%">
      <div class="scooter-marker">${I.scooter}</div>
    </div>
    <div class="marker" style="left:82%;top:14%">
      <div class="marker-pin"><span style="color:#fff;font-size:14px">${I.loc}</span></div>
    </div>
    <div style="position:absolute;left:14px;top:54px;z-index:10">
      <div class="icon-btn">${I.back}</div>
    </div>
    <div class="map-hud" style="top:110px">
      <div class="hud-pill">
        <div class="h-label">ETA</div>
        <div class="h-value">18 min</div>
      </div>
      <div class="hud-pill">
        <div class="h-label">Distance</div>
        <div class="h-value">4.2 km</div>
      </div>
    </div>
  </div>
  <div class="sheet" style="position:relative;border-radius:24px 24px 0 0">
    <div class="sheet-handle"></div>
    <div class="flex gap-12 mb-14">
      <div class="avatar sm">PS</div>
      <div class="flex-1">
        <div class="row-title">Priya Sharma</div>
        <div class="row-sub">#42, 1st Cross, Indiranagar, Bangalore</div>
      </div>
    </div>
    <div class="flex gap-8 mb-14">
      <span class="chip chip-green">${I.scooter} TN 09 AB 4521</span>
      <span class="chip chip-slate">${I.clock} 10:30 AM</span>
    </div>
    <button class="btn btn-accent btn-block">${I.nav} Start Navigation</button>
  </div>
</div>`;
    },
  },

  {
    num: 12,
    title: 'Live GPS Tracking',
    group: 'Navigation',
    purpose: 'Real-time navigation with animated scooter marker, route overlay, HUD metrics, and customer bottom sheet.',
    elements: ['OSM map canvas', 'Animated scooter marker', 'Blue route path', 'HUD speed 32 km/h', 'Remaining 2.1 km', 'ETA 09:58', 'GPS ±4m', 'Internet Online', 'Bottom sheet customer card'],
    notes: 'Full-screen map experience. Pulsing scooter marker. Glass HUD pills across top.',
    render() {
      return `${statusBar('09:41')}
<div style="flex:1;position:relative">
  <div class="map-canvas" style="height:100%">
    <svg viewBox="0 0 366 700" style="position:absolute;inset:0;width:100%;height:100%">
      <path d="M40,600 C100,520 160,440 200,360 S280,200 320,120" stroke="#2563EB" stroke-width="5" fill="none" stroke-linecap="round" filter="drop-shadow(0 0 6px rgba(37,99,235,0.6))"/>
      <path d="M40,600 C100,520 160,440 200,360 S280,200 320,120" stroke="rgba(37,99,235,0.25)" stroke-width="14" fill="none" stroke-linecap="round"/>
    </svg>
    <div class="marker" style="left:38%;top:58%">
      <div class="scooter-marker">${I.scooter}</div>
    </div>
    <div class="marker" style="left:85%;top:16%">
      <div class="marker-pin"><span style="color:#fff;font-size:14px">${I.loc}</span></div>
    </div>
    <div class="map-hud">
      <div class="hud-pill">
        <div class="h-label">Speed</div>
        <div class="h-value">32 km/h</div>
      </div>
      <div class="hud-pill">
        <div class="h-label">Remaining</div>
        <div class="h-value">2.1 km</div>
      </div>
      <div class="hud-pill">
        <div class="h-label">ETA</div>
        <div class="h-value">09:58</div>
      </div>
    </div>
    <div style="position:absolute;left:14px;top:120px;z-index:10;display:flex;flex-direction:column;gap:6px">
      <span class="chip chip-green" style="font-size:10px">${I.loc} GPS ±4m</span>
      <span class="chip chip-blue" style="font-size:10px">${I.wifi} Internet Online</span>
    </div>
    <div style="position:absolute;right:14px;top:120px;z-index:10">
      <div class="icon-btn" style="background:var(--glass)">${I.settings}</div>
    </div>
  </div>
  <div class="sheet">
    <div class="sheet-handle"></div>
    <div class="flex justify-between items-center mb-10">
      <span class="chip chip-green"><span class="live-dot" style="margin-right:6px"></span> Live Tracking</span>
      <span class="text-muted" style="font-size:11px;font-family:var(--mono)">SRV-78421</span>
    </div>
    <div class="flex gap-12 mb-12">
      <div class="avatar sm">PS</div>
      <div class="flex-1">
        <div class="row-title">Priya Sharma</div>
        <div class="row-sub">TN 09 AB 4521 · Ather 450X · Free Service</div>
      </div>
      <div class="icon-btn" style="width:36px;height:36px;border-radius:10px">${I.phone}</div>
    </div>
    <div class="grid-2 gap-8">
      <button class="btn btn-outline btn-sm">${I.close} End Trip</button>
      <button class="btn btn-primary btn-sm">${I.check} I've Arrived</button>
    </div>
  </div>
</div>`;
    },
  },

  {
    num: 13,
    title: 'Reach Customer',
    group: 'Navigation',
    purpose: 'Arrival confirmation screen with optional door photo capture before starting service.',
    elements: ['Arrived confirmation', 'Customer location card', 'Door photo capture option', 'Camera icon', 'Start Service CTA', 'GPS arrival timestamp'],
    notes: 'Geofence-triggered arrival. Photo optional but encouraged for proof of visit.',
    render() {
      return `${statusBar('09:56')}
${header('Reach Customer', { back: true, right: I.more })}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:0">
    <div class="card glass text-center mb-16" style="padding:28px 20px;background:linear-gradient(145deg,rgba(16,185,129,0.12),var(--card))">
      <div style="width:64px;height:64px;border-radius:50%;background:var(--grad-primary);display:grid;place-items:center;margin:0 auto;color:#fff;box-shadow:0 0 0 8px var(--primary-dim)">${I.loc}</div>
      <h3 style="font-size:20px;font-weight:800;margin-top:18px">You've Arrived!</h3>
      <p class="text-sec" style="font-size:13px;margin-top:6px">Geofence confirmed · GPS accuracy ±3m</p>
      <p class="text-muted mt-8" style="font-size:11px;font-family:var(--mono)">Arrived at 09:56 AM</p>
    </div>
    <div class="card mb-16">
      <div class="flex gap-12">
        <div class="avatar sm">PS</div>
        <div class="flex-1">
          <div class="row-title">Priya Sharma</div>
          <div class="row-sub">#42, 1st Cross, Indiranagar</div>
          <div class="row-sub mt-4">${I.scooter} TN 09 AB 4521 · Ather 450X</div>
        </div>
      </div>
    </div>
    <p class="label">Customer Door Photo <span class="text-muted">(Optional)</span></p>
    <div class="photo-grid mb-16">
      <div class="photo-slot filled" style="grid-column:span 3;aspect-ratio:2.2/1;border-radius:16px">
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--text-muted)">
          ${I.cam}
          <span style="font-size:12px;font-weight:600">Tap to capture door / building photo</span>
        </div>
      </div>
    </div>
    <div class="card glass mb-16" style="padding:12px 14px;display:flex;gap:10px;align-items:center">
      <div style="color:var(--warning)">${I.shield}</div>
      <p style="font-size:11px;color:var(--text-secondary);line-height:1.5">Photo helps verify visit location for warranty claims and audit compliance.</p>
    </div>
    <button class="btn btn-primary btn-block">${I.bolt} Start Service</button>
    <button class="btn btn-outline btn-block mt-8 btn-sm">${I.phone} Call Customer</button>
  </div>
</div>`;
    },
  },

  {
    num: 14,
    title: 'Start Service OTP',
    group: 'Tasks',
    purpose: 'Customer OTP verification required before engineer can begin service work.',
    elements: ['6 OTP input boxes', 'OTP sent to ****3210', 'Verify & Start CTA', 'Resend option', 'Customer name display'],
    notes: 'OTP sent to customer mobile ending 3210. All boxes empty, first box active.',
    render() {
      return `${statusBar('09:58')}
${header('Start Service', { back: true, right: I.more })}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:0">
    <div class="card glass mb-20" style="padding:14px;display:flex;gap:12px;align-items:center">
      <div class="avatar sm">PS</div>
      <div class="flex-1">
        <div class="row-title">Priya Sharma</div>
        <div class="row-sub">SRV-78421 · Free Service + Battery Check</div>
      </div>
      <span class="chip chip-amber">Awaiting OTP</span>
    </div>
    <div class="text-center mb-24">
      <div style="width:56px;height:56px;border-radius:16px;background:var(--accent-dim);display:grid;place-items:center;margin:0 auto;color:var(--accent)">${I.shield}</div>
      <h3 style="font-size:18px;font-weight:800;margin-top:16px">Customer OTP Required</h3>
      <p class="text-sec" style="font-size:13px;margin-top:8px;line-height:1.5">Ask the customer for the 6-digit OTP sent to<br><span class="fw-7" style="font-family:var(--mono)">****3210</span></p>
    </div>
    <div class="otp-boxes mb-16">
      <div class="otp-box active"></div>
      <div class="otp-box"></div>
      <div class="otp-box"></div>
      <div class="otp-box"></div>
      <div class="otp-box"></div>
      <div class="otp-box"></div>
    </div>
    <p class="text-center text-muted" style="font-size:12px">Didn't receive? <span class="text-accent fw-6">Resend OTP</span></p>
    <button class="btn btn-primary btn-block mt-24">${I.check} Verify &amp; Start Service</button>
    <div class="card mt-20" style="padding:14px;background:var(--input-bg)">
      <p style="font-size:11px;color:var(--text-secondary);line-height:1.55;text-align:center">OTP confirms customer consent to begin service. Valid for 10 minutes from send time.</p>
    </div>
  </div>
</div>`;
    },
  },

  {
    num: 15,
    title: 'Service Checklist',
    group: 'Tasks',
    purpose: 'Safety and procedure checklist that engineer must complete during service.',
    elements: ['Safety checklist items', 'Checked/unchecked states', 'Progress indicator', 'Category sections', 'Complete Service CTA'],
    notes: 'Mix of completed and pending items. Progress bar at 60%. Cannot complete until all mandatory items checked.',
    render() {
      return `${statusBar('10:05')}
${header('Service Checklist', { back: true, right: I.more })}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:0">
    <div class="card glass mb-16" style="padding:14px">
      <div class="flex justify-between items-center mb-8">
        <span class="fw-7" style="font-size:13px">Progress</span>
        <span class="fw-8 text-primary">60%</span>
      </div>
      <div style="height:6px;border-radius:3px;background:var(--border);overflow:hidden">
        <div style="width:60%;height:100%;background:var(--grad-primary);border-radius:3px"></div>
      </div>
      <p class="text-muted mt-8" style="font-size:11px">6 of 10 items completed · 4 mandatory remaining</p>
    </div>
    <p class="label">Safety &amp; Preparation</p>
    <div class="check-item">
      <div class="check-box on">${I.check}</div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Wear safety gloves &amp; PPE</div>
        <div class="row-sub">Mandatory</div>
      </div>
    </div>
    <div class="check-item">
      <div class="check-box on">${I.check}</div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Vehicle powered off &amp; key removed</div>
        <div class="row-sub">Mandatory</div>
      </div>
    </div>
    <div class="check-item">
      <div class="check-box on">${I.check}</div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Work area clear &amp; ventilated</div>
      </div>
    </div>
    <p class="label mt-16">Service Procedure</p>
    <div class="check-item">
      <div class="check-box on">${I.check}</div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Connect diagnostic tool (OBD)</div>
        <div class="row-sub">Mandatory</div>
      </div>
    </div>
    <div class="check-item">
      <div class="check-box on">${I.check}</div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Run battery health scan</div>
        <div class="row-sub">Mandatory · Battery Check</div>
      </div>
    </div>
    <div class="check-item">
      <div class="check-box on">${I.check}</div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Check tyre pressure (F/R)</div>
      </div>
    </div>
    <div class="check-item">
      <div class="check-box"></div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Inspect brake pads &amp; fluid</div>
        <div class="row-sub">Mandatory</div>
      </div>
    </div>
    <div class="check-item">
      <div class="check-box"></div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Test headlight &amp; indicators</div>
      </div>
    </div>
    <div class="check-item">
      <div class="check-box"></div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Lubricate chain / belt drive</div>
      </div>
    </div>
    <div class="check-item">
      <div class="check-box"></div>
      <div class="flex-1">
        <div class="row-title" style="font-size:13px">Update firmware if available</div>
        <div class="row-sub">Mandatory</div>
      </div>
    </div>
    <button class="btn btn-primary btn-block mt-16" style="opacity:0.5">${I.check} Complete Checklist</button>
    <p class="text-center text-muted mt-10" style="font-size:11px">Complete all mandatory items to proceed</p>
  </div>
</div>`;
    },
  },

  {
    num: 16,
    title: 'Vehicle Inspection',
    group: 'Tasks',
    purpose: 'Detailed EV condition assessment with component ratings, photo evidence slots, and submit action.',
    elements: ['Condition ratings 1-5', 'Battery/brakes/motor/tires/software sections', 'Photo capture slots', 'Overall condition score', 'Submit Inspection CTA'],
    notes: 'Star ratings per component. Photo grid for damage evidence. Overall score 4.2/5.',
    render() {
      return `${statusBar('10:18')}
${header('Vehicle Inspection', { back: true, right: I.cam })}
<div class="app-scroll">
  <div class="section-pad" style="padding-top:0">
    <div class="card glass mb-16" style="padding:16px;display:flex;justify-between;align-items:center">
      <div>
        <p class="text-muted" style="font-size:11px;font-weight:600">Overall Condition</p>
        <p style="font-size:28px;font-weight:800;letter-spacing:-0.04em">4.2<span style="font-size:14px;color:var(--text-muted);font-weight:600">/5</span></p>
      </div>
      <div class="stars">
        <div class="star">${I.star}</div>
        <div class="star">${I.star}</div>
        <div class="star">${I.star}</div>
        <div class="star">${I.star}</div>
        <div class="star empty">${I.star}</div>
      </div>
    </div>
    <div class="card mb-12">
      <div class="flex justify-between items-center mb-8">
        <div class="flex items-center gap-8">
          <span style="color:var(--primary)">${I.battery}</span>
          <span class="fw-7" style="font-size:13px">Battery Pack</span>
        </div>
        <div class="stars" style="gap:4px">
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star empty" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
        </div>
      </div>
      <p class="text-sec" style="font-size:11px">SOH 86% · No swelling · Terminals clean</p>
    </div>
    <div class="card mb-12">
      <div class="flex justify-between items-center mb-8">
        <div class="flex items-center gap-8">
          <span style="color:var(--accent)">${I.shield}</span>
          <span class="fw-7" style="font-size:13px">Brakes</span>
        </div>
        <div class="stars" style="gap:4px">
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
        </div>
      </div>
      <p class="text-sec" style="font-size:11px">Front 4.2mm · Rear 5.1mm · Fluid OK</p>
    </div>
    <div class="card mb-12">
      <div class="flex justify-between items-center mb-8">
        <div class="flex items-center gap-8">
          <span style="color:var(--warning)">${I.bolt}</span>
          <span class="fw-7" style="font-size:13px">Motor &amp; Controller</span>
        </div>
        <div class="stars" style="gap:4px">
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star empty" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
        </div>
      </div>
      <p class="text-sec" style="font-size:11px">No unusual noise · Thermal normal</p>
    </div>
    <div class="card mb-12">
      <div class="flex justify-between items-center mb-8">
        <div class="flex items-center gap-8">
          <span style="color:var(--text-secondary)">${I.scooter}</span>
          <span class="fw-7" style="font-size:13px">Tires &amp; Wheels</span>
        </div>
        <div class="stars" style="gap:4px">
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star empty" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
        </div>
      </div>
      <p class="text-sec" style="font-size:11px">F: 28 PSI · R: 30 PSI · Tread good</p>
    </div>
    <div class="card mb-16">
      <div class="flex justify-between items-center mb-8">
        <div class="flex items-center gap-8">
          <span style="color:var(--accent)">${I.settings}</span>
          <span class="fw-7" style="font-size:13px">Software / Firmware</span>
        </div>
        <div class="stars" style="gap:4px">
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
          <div class="star" style="width:28px;height:28px;border-radius:8px">${I.star}</div>
        </div>
      </div>
      <p class="text-sec" style="font-size:11px">v4.2.1 · Update available → v4.3.0</p>
    </div>
    <p class="label">Photo Evidence</p>
    <div class="photo-grid mb-16">
      <div class="photo-slot filled">
        ${I.cam}
        <span class="ph-label">Front</span>
      </div>
      <div class="photo-slot filled">
        ${I.cam}
        <span class="ph-label">Battery</span>
      </div>
      <div class="photo-slot">
        ${I.plus}
        <span class="ph-label">Add Photo</span>
      </div>
    </div>
    <button class="btn btn-primary btn-block">${I.check} Submit Inspection</button>
  </div>
</div>`;
    },
  },
];
