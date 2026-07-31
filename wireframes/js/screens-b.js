/* E Royce Service Manager — Screens 17–31 (Quotation → Service Execution) */
const SCREENS_B = [
  {
    num: 17,
    title: 'Select Service Items',
    group: 'Quotation',
    purpose: 'Let the field engineer pick billable EV service tasks from a priced checklist before building the quotation.',
    elements: [
      'Service context card (SRV-78421, customer, vehicle)',
      'Filter chips: All, Paid, Free, Warranty',
      'Checklist with prices and category tags',
      'Selected count and running subtotal',
      'Continue CTA',
    ],
    notes: 'Multi-select checklist drives quotation line items. Warranty and free-service tags use chip colors for quick scanning.',
    render() {
      return `
        ${statusBar('10:38')}
        ${header('Select Service Items')}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="card glass" style="margin-bottom:14px;padding:14px">
              <div style="display:flex;align-items:center;gap:12px">
                <div class="avatar sm" style="background:var(--grad-primary)">${I.scooter.replace('width="22"','width="18"').replace('height="22"','height="18"')}</div>
                <div style="flex:1">
                  <div class="row-title">SRV-78421 · Priya Sharma</div>
                  <div class="row-sub">TN 09 AB 4521 · Ather 450X Gen 3</div>
                </div>
                <span class="chip chip-blue">Paid Visit</span>
              </div>
            </div>
            <div class="tag-row" style="margin-bottom:14px">
              <span class="chip chip-green">All</span>
              <span class="chip chip-slate">Paid</span>
              <span class="chip chip-slate">Free</span>
              <span class="chip chip-slate">Warranty</span>
            </div>
            <div class="check-item">
              <div class="check-box on">${I.check}</div>
              <div style="flex:1">
                <div class="row-title">Battery Diagnostics</div>
                <div class="row-sub">BMS scan · cell balance · SOH report</div>
                <div class="tag-row" style="margin-top:6px"><span class="chip chip-blue">Paid</span></div>
              </div>
              <div style="text-align:right">
                <div class="fw-7" style="font-size:14px">₹450</div>
              </div>
            </div>
            <div class="check-item">
              <div class="check-box on">${I.check}</div>
              <div style="flex:1">
                <div class="row-title">Brake Pad Replacement</div>
                <div class="row-sub">Front disc pads · bed-in procedure</div>
                <div class="tag-row" style="margin-top:6px"><span class="chip chip-blue">Paid</span></div>
              </div>
              <div style="text-align:right">
                <div class="fw-7" style="font-size:14px">₹1,850</div>
              </div>
            </div>
            <div class="check-item">
              <div class="check-box on">${I.check}</div>
              <div style="flex:1">
                <div class="row-title">Motor Controller Check</div>
                <div class="row-sub">Phase current · thermal log · fault codes</div>
                <div class="tag-row" style="margin-top:6px"><span class="chip chip-blue">Paid</span></div>
              </div>
              <div style="text-align:right">
                <div class="fw-7" style="font-size:14px">₹900</div>
              </div>
            </div>
            <div class="check-item">
              <div class="check-box on">${I.check}</div>
              <div style="flex:1">
                <div class="row-title">Software Update</div>
                <div class="row-sub">Firmware v3.8.2 · OTA patch bundle</div>
                <div class="tag-row" style="margin-top:6px"><span class="chip chip-green">Warranty</span></div>
              </div>
              <div style="text-align:right">
                <div class="fw-7 text-primary" style="font-size:14px">₹0</div>
              </div>
            </div>
            <div class="check-item" style="opacity:0.55">
              <div class="check-box"></div>
              <div style="flex:1">
                <div class="row-title">Tyre Pressure Calibration</div>
                <div class="row-sub">TPMS reset · recommended PSI set</div>
                <div class="tag-row" style="margin-top:6px"><span class="chip chip-slate">Paid</span></div>
              </div>
              <div style="text-align:right">
                <div class="fw-7" style="font-size:14px">₹200</div>
              </div>
            </div>
            <div class="check-item" style="opacity:0.55">
              <div class="check-box"></div>
              <div style="flex:1">
                <div class="row-title">General EV Inspection</div>
                <div class="row-sub">32-point safety checklist</div>
                <div class="tag-row" style="margin-top:6px"><span class="chip chip-amber">Free Service</span></div>
              </div>
              <div style="text-align:right">
                <div class="fw-7 text-primary" style="font-size:14px">₹0</div>
              </div>
            </div>
            <div class="card" style="margin-top:12px;display:flex;justify-content:space-between;align-items:center">
              <div>
                <div class="text-sec" style="font-size:11px;font-weight:600">4 items selected</div>
                <div class="fw-8" style="font-size:18px;margin-top:2px">₹3,200 <span class="text-sec fw-6" style="font-size:12px">+ labour & spares</span></div>
              </div>
              <span class="chip chip-green">${I.bolt} EV Services</span>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <button class="btn btn-primary btn-block">Continue to Labour ${I.chevron}</button>
        </div>`;
    },
  },
  {
    num: 18,
    title: 'Add Labour Charges',
    group: 'Quotation',
    purpose: 'Capture technician labour hours and hourly rate to compute labour line totals for the quotation.',
    elements: [
      'Preset labour task rows with hours steppers',
      'Hourly rate ₹500/hr display',
      'Add custom labour row action',
      'Running labour subtotal card',
      'Continue to Spares CTA',
    ],
    notes: 'Default rate comes from centre config. Hours support 0.5 increments for partial-hour billing.',
    render() {
      return `
        ${statusBar('10:39')}
        ${header('Add Labour Charges')}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="card glass" style="margin-bottom:14px">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div>
                  <div class="text-sec" style="font-size:11px;font-weight:600">Standard Rate</div>
                  <div class="fw-8" style="font-size:22px;margin-top:2px">₹500<span style="font-size:13px;font-weight:600;opacity:0.7">/hr</span></div>
                </div>
                <div class="kpi-card kpi-violet" style="min-height:auto;padding:10px 14px;width:110px">
                  <div class="kpi-label">Engineer</div>
                  <div class="kpi-value" style="font-size:14px">Arjun M.</div>
                </div>
              </div>
            </div>
            <div class="card" style="margin-bottom:10px">
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Diagnostic & Testing</div>
                  <div class="row-sub">Battery + motor controller</div>
                </div>
                <div style="display:flex;align-items:center;gap:10px">
                  <div style="display:flex;align-items:center;gap:8px;background:var(--input-bg);border-radius:12px;padding:6px 8px;border:1px solid var(--border)">
                    <div class="icon-btn" style="width:28px;height:28px;border-radius:8px;font-size:16px;font-weight:700">−</div>
                    <span class="fw-8" style="font-size:15px;font-family:var(--mono);min-width:28px;text-align:center">1.0</span>
                    <div class="icon-btn" style="width:28px;height:28px;border-radius:8px;font-size:16px;font-weight:700">+</div>
                  </div>
                  <div class="fw-7" style="font-size:14px;min-width:56px;text-align:right">₹500</div>
                </div>
              </div>
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Brake Service Labour</div>
                  <div class="row-sub">Pad swap · rotor clean · bed-in</div>
                </div>
                <div style="display:flex;align-items:center;gap:10px">
                  <div style="display:flex;align-items:center;gap:8px;background:var(--input-bg);border-radius:12px;padding:6px 8px;border:1px solid var(--border)">
                    <div class="icon-btn" style="width:28px;height:28px;border-radius:8px;font-size:16px;font-weight:700">−</div>
                    <span class="fw-8" style="font-size:15px;font-family:var(--mono);min-width:28px;text-align:center">1.5</span>
                    <div class="icon-btn" style="width:28px;height:28px;border-radius:8px;font-size:16px;font-weight:700">+</div>
                  </div>
                  <div class="fw-7" style="font-size:14px;min-width:56px;text-align:right">₹750</div>
                </div>
              </div>
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Firmware Flash & QA</div>
                  <div class="row-sub">Software update · ride test</div>
                </div>
                <div style="display:flex;align-items:center;gap:10px">
                  <div style="display:flex;align-items:center;gap:8px;background:var(--input-bg);border-radius:12px;padding:6px 8px;border:1px solid var(--border)">
                    <div class="icon-btn" style="width:28px;height:28px;border-radius:8px;font-size:16px;font-weight:700">−</div>
                    <span class="fw-8" style="font-size:15px;font-family:var(--mono);min-width:28px;text-align:center">0.0</span>
                    <div class="icon-btn" style="width:28px;height:28px;border-radius:8px;font-size:16px;font-weight:700">+</div>
                  </div>
                  <div class="fw-7 text-primary" style="font-size:14px;min-width:56px;text-align:right">₹0</div>
                </div>
              </div>
            </div>
            <button class="btn btn-outline btn-block btn-sm" style="margin-bottom:14px">${I.plus} Add Labour Row</button>
            <div class="card" style="background:var(--grad-card);border-color:rgba(16,185,129,0.2)">
              <div style="display:flex;justify-content:space-between;margin-bottom:8px">
                <span class="text-sec fw-6" style="font-size:12px">Total Hours</span>
                <span class="fw-8" style="font-family:var(--mono)">2.5 hrs</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span class="text-sec fw-6" style="font-size:12px">Labour Subtotal</span>
                <span class="fw-8" style="font-size:22px;color:var(--primary)">₹1,250</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <button class="btn btn-primary btn-block">Continue to Spares ${I.chevron}</button>
        </div>`;
    },
  },
  {
    num: 19,
    title: 'Add Spare Parts',
    group: 'Quotation',
    purpose: 'Add inventory spare parts with quantity controls and optional barcode scan for accurate part picking.',
    elements: [
      'Parts catalogue rows with SKU codes',
      'Quantity steppers per part',
      'Barcode scan hint banner',
      'Spares subtotal summary',
      'Preview Quotation CTA',
    ],
    notes: 'Scanning resolves ATH-BP-450 to Brake Pads for Ather 450X. Stock is checked against Indiranagar van inventory.',
    render() {
      return `
        ${statusBar('10:40')}
        ${header('Add Spare Parts', { right: I.qr })}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="card" style="margin-bottom:14px;display:flex;align-items:center;gap:12px;background:var(--accent-dim);border-color:rgba(37,99,235,0.25)">
              <div class="icon-btn" style="background:var(--grad-accent);border:none;color:#fff">${I.qr}</div>
              <div style="flex:1">
                <div class="fw-7" style="font-size:13px">Scan barcode on part box</div>
                <div class="row-sub">Point camera at ATH-BP-450 or Contactor label</div>
              </div>
              <span class="chip chip-blue">Scan</span>
            </div>
            <div class="card" style="margin-bottom:10px">
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Brake Pads — Front</div>
                  <div class="row-sub">SKU ATH-BP-450 · Ather 450X</div>
                  <div class="tag-row" style="margin-top:6px"><span class="chip chip-green">In Van Stock · 3</span></div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
                  <div class="fw-7" style="font-size:14px">₹1,200</div>
                  <div style="display:flex;align-items:center;gap:8px;background:var(--input-bg);border-radius:12px;padding:4px 6px;border:1px solid var(--border)">
                    <div class="icon-btn" style="width:26px;height:26px;border-radius:7px;font-size:15px">−</div>
                    <span class="fw-8" style="font-size:14px;font-family:var(--mono);min-width:20px;text-align:center">1</span>
                    <div class="icon-btn" style="width:26px;height:26px;border-radius:7px;font-size:15px">+</div>
                  </div>
                </div>
              </div>
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Contactor Assembly</div>
                  <div class="row-sub">SKU ATH-CON-12 · 48V relay</div>
                  <div class="tag-row" style="margin-top:6px"><span class="chip chip-amber">Low Stock · 1</span></div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
                  <div class="fw-7" style="font-size:14px">₹650</div>
                  <div style="display:flex;align-items:center;gap:8px;background:var(--input-bg);border-radius:12px;padding:4px 6px;border:1px solid var(--border)">
                    <div class="icon-btn" style="width:26px;height:26px;border-radius:7px;font-size:15px">−</div>
                    <span class="fw-8" style="font-size:14px;font-family:var(--mono);min-width:20px;text-align:center">1</span>
                    <div class="icon-btn" style="width:26px;height:26px;border-radius:7px;font-size:15px">+</div>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-outline btn-block btn-sm" style="margin-bottom:14px">${I.plus} Search Parts Catalogue</button>
            <div class="grid-2" style="margin-bottom:14px">
              <div class="kpi-card kpi-slate">
                <div class="kpi-label">Parts Added</div>
                <div class="kpi-value" style="font-size:20px">2</div>
                <div class="kpi-sub">₹1,850 value</div>
              </div>
              <div class="kpi-card kpi-blue">
                <div class="kpi-label">Quotation Preview</div>
                <div class="kpi-value" style="font-size:20px">QT-78421</div>
                <div class="kpi-sub">Ready to generate</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <button class="btn btn-primary btn-block">Preview Quotation ${I.chevron}</button>
        </div>`;
    },
  },
  {
    num: 20,
    title: 'Quotation Preview',
    group: 'Quotation',
    purpose: 'Show a print-ready quotation document preview before sending to the customer for approval.',
    elements: [
      'White paper doc-preview layout',
      'E Royce EV Care company header',
      'Customer and vehicle details block',
      'Line items table with amounts',
      'Subtotal, GST 18%, grand total',
      'Validity date and engineer signature line',
      'Edit / Send actions',
    ],
    notes: 'doc-preview uses light paper styling for PDF fidelity. GST is computed on taxable subtotal excluding warranty items.',
    render() {
      return `
        ${statusBar('10:41')}
        ${header('Quotation Preview', { right: I.pdf })}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="doc-preview">
              <div class="doc-brand">
                <div>
                  <div style="font-size:16px;font-weight:800;color:#10B981">E Royce EV Care</div>
                  <div style="font-size:9px;color:#64748B;margin-top:2px">Premium Electric Vehicle Service · Bangalore</div>
                  <div style="font-size:9px;color:#64748B">GSTIN 29AABCE1234F1Z5 · +91 80 4567 8900</div>
                </div>
                <div style="text-align:right">
                  <div style="font-size:13px;font-weight:800">QUOTATION</div>
                  <div style="font-size:10px;color:#64748B;margin-top:2px;font-family:var(--mono)">QT-2026-78421</div>
                  <div style="font-size:9px;color:#64748B;margin-top:4px">31 Jul 2026</div>
                </div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;font-size:9px">
                <div>
                  <div style="font-weight:700;color:#64748B;margin-bottom:3px">BILL TO</div>
                  <div style="font-weight:700">Priya Sharma</div>
                  <div style="color:#475569">+91 98765 43210</div>
                  <div style="color:#475569">Indiranagar, Bangalore 560038</div>
                </div>
                <div>
                  <div style="font-weight:700;color:#64748B;margin-bottom:3px">VEHICLE</div>
                  <div style="font-weight:700">Ather 450X Gen 3</div>
                  <div style="color:#475569;font-family:var(--mono)">TN 09 AB 4521</div>
                  <div style="color:#475569">Service Ref SRV-78421</div>
                </div>
              </div>
              <table>
                <thead>
                  <tr><th>Description</th><th style="text-align:right">Qty</th><th style="text-align:right">Amount</th></tr>
                </thead>
                <tbody>
                  <tr><td>Battery Diagnostics</td><td style="text-align:right">1</td><td style="text-align:right">₹450</td></tr>
                  <tr><td>Brake Pad Replacement</td><td style="text-align:right">1</td><td style="text-align:right">₹1,850</td></tr>
                  <tr><td>Motor Controller Check</td><td style="text-align:right">1</td><td style="text-align:right">₹900</td></tr>
                  <tr><td>Software Update <span style="color:#10B981;font-size:9px">(Warranty)</span></td><td style="text-align:right">1</td><td style="text-align:right">₹0</td></tr>
                  <tr><td>Labour — 2.5 hrs @ ₹500/hr</td><td style="text-align:right">2.5</td><td style="text-align:right">₹1,250</td></tr>
                </tbody>
              </table>
              <div style="border-top:1px solid #E2E8F0;padding-top:8px;font-size:10px">
                <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="color:#64748B">Subtotal</span><span style="font-weight:700">₹4,450</span></div>
                <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="color:#64748B">GST (18%)</span><span style="font-weight:700">₹801</span></div>
                <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:800;color:#10B981;margin-top:6px"><span>Total Payable</span><span>₹5,251</span></div>
              </div>
              <div style="margin-top:10px;font-size:9px;color:#64748B;border-top:1px dashed #E2E8F0;padding-top:8px">
                Valid for 7 days · Prices inclusive of standard consumables unless noted.<br>
                Engineer: Arjun Mehta · Authorised E Royce Partner
              </div>
            </div>
            <div class="grid-2" style="margin-top:14px">
              <button class="btn btn-outline btn-sm">${I.edit} Edit</button>
              <button class="btn btn-primary btn-sm">${I.send} Send to Customer</button>
            </div>
          </div>
        </div>`;
    },
  },
  {
    num: 21,
    title: 'Edit Quotation',
    group: 'Quotation',
    purpose: 'Allow last-minute edits to quotation line items with live total recalculation before sending.',
    elements: [
      'Editable line item rows with edit icons',
      'Add new line item action',
      'Live subtotal / GST / total footer',
      'Save changes CTA',
    ],
    notes: 'Inline edit opens amount and description fields. Totals update reactively on save.',
    render() {
      return `
        ${statusBar('10:42')}
        ${header('Edit Quotation')}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="card glass" style="margin-bottom:14px;padding:12px 14px">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div>
                  <div class="text-sec" style="font-size:11px;font-weight:600">Quotation</div>
                  <div class="fw-8" style="font-family:var(--mono);font-size:15px">QT-2026-78421</div>
                </div>
                <span class="chip chip-amber">Draft · Unsent</span>
              </div>
            </div>
            <div class="card" style="margin-bottom:10px">
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Battery Diagnostics</div>
                  <div class="row-sub">Qty 1 · Paid</div>
                </div>
                <div class="fw-7" style="font-size:14px;margin-right:8px">₹450</div>
                <div class="icon-btn" style="width:34px;height:34px">${I.edit}</div>
              </div>
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Brake Pad Replacement</div>
                  <div class="row-sub">Qty 1 · Includes pads</div>
                </div>
                <div class="fw-7" style="font-size:14px;margin-right:8px">₹1,850</div>
                <div class="icon-btn" style="width:34px;height:34px">${I.edit}</div>
              </div>
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Motor Controller Check</div>
                  <div class="row-sub">Qty 1 · Paid</div>
                </div>
                <div class="fw-7" style="font-size:14px;margin-right:8px">₹900</div>
                <div class="icon-btn" style="width:34px;height:34px">${I.edit}</div>
              </div>
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Software Update</div>
                  <div class="row-sub">Qty 1 · Warranty</div>
                </div>
                <div class="fw-7 text-primary" style="font-size:14px;margin-right:8px">₹0</div>
                <div class="icon-btn" style="width:34px;height:34px">${I.edit}</div>
              </div>
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Labour — Diagnostic & Service</div>
                  <div class="row-sub">2.5 hrs @ ₹500/hr</div>
                </div>
                <div class="fw-7" style="font-size:14px;margin-right:8px">₹1,250</div>
                <div class="icon-btn" style="width:34px;height:34px">${I.edit}</div>
              </div>
            </div>
            <button class="btn btn-outline btn-block btn-sm" style="margin-bottom:14px">${I.plus} Add Line Item</button>
            <div class="card">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px">
                <span class="text-sec">Subtotal</span><span class="fw-7">₹4,450</span>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px">
                <span class="text-sec">GST (18%)</span><span class="fw-7">₹801</span>
              </div>
              <div class="divider" style="margin:10px 0"></div>
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span class="fw-7">Grand Total</span>
                <span class="fw-8" style="font-size:22px;color:var(--primary)">₹5,251</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <button class="btn btn-primary btn-block">Save & Continue</button>
        </div>`;
    },
  },
  {
    num: 22,
    title: 'Apply Discount',
    group: 'Quotation',
    purpose: 'Apply authorised percentage or flat discounts with clear before/after pricing for customer transparency.',
    elements: [
      'Percentage / flat amount toggle',
      'Preset discount chips including 10% selected',
      'Before and after price comparison',
      'Authorisation note for discounts above threshold',
      'Apply & Preview CTA',
    ],
    notes: 'Discounts above 15% require supervisor OTP. 10% loyalty discount pre-approved for repeat customer Priya Sharma.',
    render() {
      return `
        ${statusBar('10:43')}
        ${header('Apply Discount')}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="card glass" style="margin-bottom:14px;text-align:center;padding:20px">
              <div class="text-sec" style="font-size:11px;font-weight:600;margin-bottom:4px">Current Total</div>
              <div class="fw-8" style="font-size:28px;letter-spacing:-0.03em">₹5,251</div>
              <div class="row-sub" style="margin-top:4px">QT-2026-78421 · Priya Sharma</div>
            </div>
            <div style="display:flex;background:var(--input-bg);border-radius:14px;padding:4px;margin-bottom:16px;border:1px solid var(--border)">
              <div class="btn btn-primary btn-sm" style="flex:1;border-radius:11px;padding:10px">Percentage</div>
              <div class="btn btn-ghost btn-sm" style="flex:1;border-radius:11px;padding:10px;background:transparent;color:var(--text-secondary)">Flat Amount</div>
            </div>
            <div class="label">Quick Discounts</div>
            <div class="tag-row" style="margin-bottom:16px">
              <span class="chip chip-slate">5%</span>
              <span class="chip chip-green" style="box-shadow:0 0 0 2px var(--primary)">10% Loyalty</span>
              <span class="chip chip-slate">15%</span>
              <span class="chip chip-slate">₹500 Off</span>
            </div>
            <div class="input-field" style="margin-bottom:16px">
              <span class="prefix">%</span>
              <span class="value">10</span>
              <span class="chip chip-green">Applied</span>
            </div>
            <div class="card" style="margin-bottom:14px">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
                <span class="text-sec fw-6" style="font-size:12px">Before Discount</span>
                <span class="fw-7" style="font-size:16px;text-decoration:line-through;opacity:0.6">₹5,251</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
                <span class="text-sec fw-6" style="font-size:12px">Discount (10%)</span>
                <span class="fw-7 text-primary" style="font-size:16px">− ₹525</span>
              </div>
              <div class="divider" style="margin:10px 0"></div>
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span class="fw-7">After Discount</span>
                <span class="fw-8" style="font-size:24px;color:var(--primary)">₹4,726</span>
              </div>
            </div>
            <div class="card" style="display:flex;gap:10px;align-items:flex-start;background:var(--primary-dim);border-color:rgba(16,185,129,0.2)">
              ${I.shield.replace('width="20"','width="18"').replace('height="20"','height="18"')}
              <div>
                <div class="fw-7" style="font-size:12px">Pre-authorised loyalty discount</div>
                <div class="row-sub">Repeat customer · 3rd service visit · no supervisor OTP needed</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <button class="btn btn-primary btn-block">Apply & Add Notes</button>
        </div>`;
    },
  },
  {
    num: 23,
    title: 'Add Notes',
    group: 'Quotation',
    purpose: 'Capture internal technician notes and optional customer-visible remarks before sending the quotation.',
    elements: [
      'Technician internal notes textarea',
      'Customer-visible notes toggle and field',
      'Suggested note templates',
      'Continue to Send CTA',
    ],
    notes: 'Customer-visible notes appear on quotation footer when the toggle is enabled.',
    render() {
      return `
        ${statusBar('10:44')}
        ${header('Add Notes')}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="label">Technician Notes <span class="text-sec">(Internal)</span></div>
            <div class="input-field" style="align-items:flex-start;min-height:100px;flex-direction:column;padding:14px;margin-bottom:18px">
              <div style="font-size:13px;line-height:1.55;color:var(--text)">Front brake pads at 1.2mm — recommend immediate replacement. Motor controller thermal log shows spike at 92°C during hill climb; firmware update should resolve throttle mapping issue. Battery SOH 86%, no cell imbalance detected.</div>
            </div>
            <div class="toggle-row">
              <div>
                <div class="fw-7" style="font-size:13px">Show notes to customer</div>
                <div class="row-sub">Appears on quotation PDF footer</div>
              </div>
              <div class="toggle"></div>
            </div>
            <div class="label" style="margin-top:14px">Customer-Visible Notes</div>
            <div class="input-field" style="align-items:flex-start;min-height:72px;flex-direction:column;padding:14px;margin-bottom:14px">
              <div style="font-size:13px;line-height:1.55;color:var(--text-secondary)">Brake pads due for replacement. Software update included under warranty. Estimated completion: 2.5 hours.</div>
            </div>
            <div class="label">Quick Templates</div>
            <div class="tag-row">
              <span class="chip chip-slate">Parts on order</span>
              <span class="chip chip-slate">Warranty item</span>
              <span class="chip chip-slate">Same-day completion</span>
              <span class="chip chip-slate">Follow-up needed</span>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <button class="btn btn-primary btn-block">Continue to Send PDF</button>
        </div>`;
    },
  },
  {
    num: 24,
    title: 'Send PDF',
    group: 'Quotation',
    purpose: 'Choose delivery channel and send the generated quotation PDF to the customer.',
    elements: [
      'PDF preview card with file name and size',
      'Channel options: WhatsApp, SMS, Email',
      'Customer contact confirmation',
      'Send Quotation primary CTA',
    ],
    notes: 'PDF is generated server-side and cached. WhatsApp is default channel for Bangalore metro customers.',
    render() {
      return `
        ${statusBar('10:45')}
        ${header('Send PDF')}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="card" style="margin-bottom:16px;display:flex;gap:14px;align-items:center">
              <div style="width:52px;height:64px;background:linear-gradient(145deg,#FEE2E2,#FECACA);border-radius:10px;display:grid;place-items:center;color:#DC2626;flex-shrink:0">${I.pdf}</div>
              <div style="flex:1">
                <div class="fw-7" style="font-size:14px">QT-2026-78421.pdf</div>
                <div class="row-sub">Quotation · 248 KB · Generated 10:45 AM</div>
                <div class="tag-row" style="margin-top:6px">
                  <span class="chip chip-green">${I.check} Ready</span>
                  <span class="chip chip-slate">Total ₹5,251</span>
                </div>
              </div>
              <div class="icon-btn">${I.download}</div>
            </div>
            <div class="label">Send Via</div>
            <div class="card" style="margin-bottom:10px;padding:0;overflow:hidden">
              <div class="list-row" style="padding:14px 16px;background:var(--primary-dim);border-bottom:1px solid var(--border)">
                <div class="icon-btn" style="background:#25D366;border:none;color:#fff">${I.whatsapp}</div>
                <div style="flex:1">
                  <div class="row-title">WhatsApp</div>
                  <div class="row-sub">+91 98765 43210 · Priya Sharma</div>
                </div>
                <div class="check-box on">${I.check}</div>
              </div>
              <div class="list-row" style="padding:14px 16px">
                <div class="icon-btn" style="background:var(--grad-accent);border:none;color:#fff">${I.phone}</div>
                <div style="flex:1">
                  <div class="row-title">SMS</div>
                  <div class="row-sub">Short link · eroyce.app/q/78421</div>
                </div>
                <div class="check-box"></div>
              </div>
              <div class="list-row" style="padding:14px 16px">
                <div class="icon-btn" style="background:var(--grad-warning);border:none;color:#fff">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
                </div>
                <div style="flex:1">
                  <div class="row-title">Email</div>
                  <div class="row-sub">priya.sharma@gmail.com</div>
                </div>
                <div class="check-box"></div>
              </div>
            </div>
            <div class="card glass" style="display:flex;gap:10px;align-items:center">
              ${I.send}
              <div class="row-sub">Customer will receive approval link valid for 7 days</div>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <button class="btn btn-primary btn-block">${I.send} Send Quotation</button>
        </div>`;
    },
  },
  {
    num: 25,
    title: 'WhatsApp Preview',
    group: 'Quotation',
    purpose: 'Preview exactly how the quotation message will appear in the customer WhatsApp chat.',
    elements: [
      'WhatsApp dark chat chrome with header',
      'Outgoing green bubble with quotation summary',
      'PDF attachment chip QT-78421.pdf',
      'Delivery timestamp and read ticks',
    ],
    notes: 'Uses wa-header and wa-bubble classes. Message template includes approve link and service centre contact.',
    render() {
      return `
        ${statusBar('10:45')}
        <div class="wa-header">
          <div class="icon-btn ghost" style="color:#E9EDEF;border:none;background:transparent">${I.back}</div>
          <div class="avatar sm" style="background:#25D366;font-size:11px">PS</div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:14px">Priya Sharma</div>
            <div style="font-size:11px;opacity:0.7">online</div>
          </div>
          ${I.phone.replace('stroke="currentColor"','stroke="#E9EDEF"')}
        </div>
        <div class="app-scroll" style="background:#0B141A;padding:16px">
          <div style="text-align:center;margin-bottom:16px">
            <span style="font-size:11px;color:#8696A0;background:#182229;padding:4px 12px;border-radius:8px">Today</span>
          </div>
          <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
            <div class="wa-bubble">
              <div style="font-weight:700;margin-bottom:6px">E Royce EV Care — Quotation</div>
              <div style="opacity:0.9;margin-bottom:8px">Hi Priya, please find your service quotation for <strong>Ather 450X (TN 09 AB 4521)</strong>.</div>
              <div style="background:rgba(0,0,0,0.2);border-radius:8px;padding:8px;margin-bottom:8px;font-size:11px">
                <div style="display:flex;justify-content:space-between;margin-bottom:3px"><span>Ref</span><span style="font-family:var(--mono)">QT-2026-78421</span></div>
                <div style="display:flex;justify-content:space-between;margin-bottom:3px"><span>Items</span><span>5 services + labour</span></div>
                <div style="display:flex;justify-content:space-between"><span>Total</span><span style="font-weight:700;color:#25D366">₹5,251</span></div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;background:rgba(0,0,0,0.25);border-radius:8px;padding:8px;margin-bottom:6px">
                <div style="color:#DC2626">${I.pdf}</div>
                <div style="flex:1">
                  <div style="font-weight:600;font-size:11px">QT-78421.pdf</div>
                  <div style="font-size:10px;opacity:0.7">248 KB · PDF</div>
                </div>
              </div>
              <div style="font-size:11px;opacity:0.85">Tap to review & approve: eroyce.app/q/78421</div>
              <div style="text-align:right;font-size:10px;opacity:0.6;margin-top:4px">10:45 AM ✓✓</div>
            </div>
          </div>
          <div style="text-align:center;margin-top:20px">
            <span class="chip chip-slate" style="background:#182229;color:#8696A0">Preview · Message not sent yet</span>
          </div>
        </div>
        <div class="section-pad" style="padding-top:8px;padding-bottom:22px;background:#0B141A">
          <button class="btn btn-primary btn-block" style="background:#25D366;box-shadow:0 8px 24px rgba(37,211,102,0.35)">${I.whatsapp} Send on WhatsApp</button>
        </div>`;
    },
  },
  {
    num: 26,
    title: 'SMS Preview',
    group: 'Quotation',
    purpose: 'Preview the SMS fallback message with short approval link for customers without WhatsApp.',
    elements: [
      'SMS thread layout with contact header',
      'Outgoing blue sms-bubble',
      'Quotation summary text with short link',
      'Character count and segment indicator',
    ],
    notes: 'SMS kept under 160 chars where possible. Link opens mobile-optimised approval web view.',
    render() {
      return `
        ${statusBar('10:45')}
        ${header('SMS Preview', { right: I.phone })}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="card glass" style="margin-bottom:16px;padding:12px 14px">
              <div style="display:flex;align-items:center;gap:12px">
                <div class="avatar sm">PS</div>
                <div style="flex:1">
                  <div class="fw-7">Priya Sharma</div>
                  <div class="row-sub">+91 98765 43210</div>
                </div>
                <span class="chip chip-blue">SMS</span>
              </div>
            </div>
            <div style="background:var(--input-bg);border-radius:18px;padding:16px;min-height:280px;border:1px solid var(--border)">
              <div style="text-align:center;margin-bottom:16px">
                <span class="text-sec" style="font-size:10px;font-weight:600">Today 10:45 AM</span>
              </div>
              <div class="sms-bubble">
                E Royce: Quotation QT-78421 for your Ather 450X service is ready. Total ₹5,251 (incl. GST). Review & approve: eroyce.app/q/78421 — Valid 7 days. Reply STOP to opt out.
                <div style="text-align:right;font-size:10px;opacity:0.75;margin-top:6px">10:45 AM · Delivered</div>
              </div>
            </div>
            <div class="grid-2" style="margin-top:14px">
              <div class="kpi-card kpi-slate" style="min-height:auto;padding:12px">
                <div class="kpi-label">Characters</div>
                <div class="kpi-value" style="font-size:18px">186</div>
                <div class="kpi-sub">2 SMS segments</div>
              </div>
              <div class="kpi-card kpi-blue" style="min-height:auto;padding:12px">
                <div class="kpi-label">Short Link</div>
                <div class="kpi-value" style="font-size:13px;font-family:var(--mono)">/q/78421</div>
                <div class="kpi-sub">Opens approval page</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <button class="btn btn-accent btn-block">${I.send} Send SMS</button>
        </div>`;
    },
  },
  {
    num: 27,
    title: 'Waiting Customer Approval',
    group: 'Approval',
    purpose: 'Show pending state while the customer reviews and approves the quotation via link or app.',
    elements: [
      'Animated pending indicator',
      'Elapsed wait timer 04:12',
      'Push notification delivery status',
      'Resend and call customer actions',
    ],
    notes: 'Polling checks approval status every 15 seconds. Push notification confirms WhatsApp delivery to customer device.',
    render() {
      return `
        ${statusBar('10:49')}
        ${header('Awaiting Approval')}
        <div class="app-scroll">
          <div class="section-pad" style="text-align:center;padding-top:32px">
            <div style="position:relative;width:120px;height:120px;margin:0 auto 24px">
              <div class="progress-ring" style="width:120px;height:120px;background:conic-gradient(var(--warning) 35%, var(--border) 0)">
                <span style="font-size:14px">${I.clock.replace('width="16"','width="20"').replace('height="16"','height="20"')}</span>
              </div>
            </div>
            <div class="fw-8" style="font-size:22px;margin-bottom:6px">Waiting for Approval</div>
            <div class="row-sub" style="margin-bottom:20px">Quotation sent to Priya Sharma via WhatsApp</div>
            <div class="kpi-card kpi-amber" style="max-width:200px;margin:0 auto 20px">
              <div class="kpi-label">Elapsed Time</div>
              <div class="kpi-value" style="font-family:var(--mono);font-size:28px">04:12</div>
              <div class="kpi-sub">Sent at 10:45 AM</div>
            </div>
            <div class="card" style="text-align:left;margin-bottom:14px">
              <div class="list-row">
                <div class="check-box on" style="width:18px;height:18px;border-radius:50%">${I.check.replace('width="14"','width="10"').replace('height="14"','height="10"')}</div>
                <div style="flex:1">
                  <div class="row-title">WhatsApp Delivered</div>
                  <div class="row-sub">10:45 AM · Read 10:46 AM</div>
                </div>
                <span class="chip chip-green">✓✓</span>
              </div>
              <div class="list-row">
                <div class="check-box on" style="width:18px;height:18px;border-radius:50%">${I.check.replace('width="14"','width="10"').replace('height="14"','height="10"')}</div>
                <div style="flex:1">
                  <div class="row-title">Push Notification</div>
                  <div class="row-sub">"Tap to review quotation" · Delivered</div>
                </div>
                <span class="chip chip-green">Sent</span>
              </div>
              <div class="list-row">
                <div class="check-box" style="width:18px;height:18px;border-radius:50%;border-color:var(--warning)"></div>
                <div style="flex:1">
                  <div class="row-title">Customer Approval</div>
                  <div class="row-sub">Pending · Link opened once</div>
                </div>
                <span class="chip chip-amber">Waiting</span>
              </div>
            </div>
            <div class="card glass" style="display:flex;gap:12px;align-items:center;text-align:left">
              <div class="avatar sm" style="background:var(--grad-accent)">PS</div>
              <div style="flex:1">
                <div class="fw-7" style="font-size:13px">QT-2026-78421 · ₹5,251</div>
                <div class="row-sub">Ather 450X · SRV-78421</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <div class="grid-2">
            <button class="btn btn-outline btn-sm">${I.send} Resend</button>
            <button class="btn btn-accent btn-sm">${I.phone} Call Customer</button>
          </div>
        </div>`;
    },
  },
  {
    num: 28,
    title: 'Customer Approved',
    group: 'Approval',
    purpose: 'Confirm customer quotation approval and prompt the engineer to begin service work.',
    elements: [
      'Success burst animation icon',
      'Approved amount ₹5,251',
      'Approval timestamp and method',
      'Start Service Work primary CTA',
    ],
    notes: 'Approval triggers job state change to In Progress. Customer signature captured on web approval page.',
    render() {
      return `
        ${statusBar('10:53')}
        ${header('Approved', { back: false, right: I.check })}
        <div class="app-scroll">
          <div class="section-pad" style="text-align:center;padding-top:28px">
            <div class="success-burst" style="margin-bottom:24px">${I.check.replace('width="14"','width="40"').replace('height="14"','height="40"').replace('stroke-width="3"','stroke-width="2.5"')}</div>
            <div class="fw-8" style="font-size:24px;margin-bottom:6px">Customer Approved!</div>
            <div class="row-sub" style="margin-bottom:24px">Priya Sharma approved quotation via WhatsApp link</div>
            <div class="kpi-card kpi-green" style="max-width:240px;margin:0 auto 20px">
              <div class="kpi-label">Approved Amount</div>
              <div class="kpi-value" style="font-size:32px">₹5,251</div>
              <div class="kpi-sub">Incl. GST · QT-2026-78421</div>
            </div>
            <div class="card" style="text-align:left;margin-bottom:14px">
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Approved At</div>
                  <div class="row-sub">31 Jul 2026 · 10:52 AM IST</div>
                </div>
                <span class="chip chip-green">${I.whatsapp} WhatsApp</span>
              </div>
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Digital Signature</div>
                  <div class="row-sub">Captured on approval page</div>
                </div>
                <span class="chip chip-blue">${I.check} Verified</span>
              </div>
              <div class="list-row">
                <div style="flex:1">
                  <div class="row-title">Service Reference</div>
                  <div class="row-sub">SRV-78421 · Arjun Mehta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <button class="btn btn-primary btn-block">${I.bolt} Start Service Work</button>
        </div>`;
    },
  },
  {
    num: 29,
    title: 'Service In Progress',
    group: 'Service Execution',
    purpose: 'Track active service job with running timer, checklist progress, and pause/complete controls.',
    elements: [
      'Running service timer 00:42:18',
      'Checklist progress 3/7 items',
      'Current task highlight',
      'Pause and Mark Complete actions',
      'Customer and vehicle context bar',
    ],
    notes: 'Timer pauses automatically on app background. Checklist syncs with screen 15 safety items and screen 16 inspection.',
    render() {
      return `
        ${statusBar('11:35')}
        ${header('Service In Progress', { right: I.settings })}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="card glass" style="margin-bottom:14px;display:flex;align-items:center;gap:12px;padding:12px 14px">
              <div class="avatar sm" style="background:var(--grad-primary)">${I.scooter.replace('width="22"','width="16"').replace('height="22"','height="16"')}</div>
              <div style="flex:1">
                <div class="row-title">SRV-78421 · Priya Sharma</div>
                <div class="row-sub">TN 09 AB 4521 · Ather 450X</div>
              </div>
              <span class="chip chip-green">${I.bolt} Live</span>
            </div>
            <div class="kpi-card kpi-violet" style="margin-bottom:14px;text-align:center;padding:20px">
              <div class="kpi-label">Service Timer</div>
              <div class="kpi-value" style="font-size:36px;font-family:var(--mono);letter-spacing:0.06em">00:42:18</div>
              <div class="kpi-sub">Started 10:53 AM · Arjun Mehta</div>
            </div>
            <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
              <div class="progress-ring" style="width:72px;height:72px;background:conic-gradient(var(--primary) 43%, var(--border) 0)">
                <span>3/7</span>
              </div>
              <div style="flex:1">
                <div class="fw-7" style="font-size:15px;margin-bottom:4px">Checklist Progress</div>
                <div class="row-sub">3 of 7 tasks completed</div>
                <div style="margin-top:8px;height:6px;background:var(--input-bg);border-radius:3px;overflow:hidden">
                  <div style="width:43%;height:100%;background:var(--grad-primary);border-radius:3px"></div>
                </div>
              </div>
            </div>
            <div class="card" style="margin-bottom:14px;padding:0;overflow:hidden">
              <div class="check-item" style="margin:0;border-radius:0;border:none;border-bottom:1px solid var(--border);opacity:0.6">
                <div class="check-box on">${I.check}</div>
                <div style="flex:1"><div class="row-title">Vehicle immobilised & safe</div></div>
              </div>
              <div class="check-item" style="margin:0;border-radius:0;border:none;border-bottom:1px solid var(--border);opacity:0.6">
                <div class="check-box on">${I.check}</div>
                <div style="flex:1"><div class="row-title">Battery diagnostics complete</div></div>
              </div>
              <div class="check-item" style="margin:0;border-radius:0;border:none;border-bottom:1px solid var(--border);background:var(--primary-dim)">
                <div class="check-box on">${I.check}</div>
                <div style="flex:1">
                  <div class="row-title">Brake pad replacement</div>
                  <div class="row-sub">In progress · Front axle</div>
                </div>
                <span class="chip chip-amber">Active</span>
              </div>
              <div class="check-item" style="margin:0;border-radius:0;border:none;border-bottom:1px solid var(--border);opacity:0.45">
                <div class="check-box"></div>
                <div style="flex:1"><div class="row-title">Motor controller check</div></div>
              </div>
              <div class="check-item" style="margin:0;border-radius:0;border:none;opacity:0.45">
                <div class="check-box"></div>
                <div style="flex:1"><div class="row-title">Software update & ride test</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <div class="grid-2">
            <button class="btn btn-outline btn-sm">${I.clock} Pause</button>
            <button class="btn btn-primary btn-sm">${I.check} Mark Complete</button>
          </div>
        </div>`;
    },
  },
  {
    num: 30,
    title: 'Upload Before Photos',
    group: 'Service Execution',
    purpose: 'Capture mandatory pre-service vehicle photos for documentation and dispute protection.',
    elements: [
      '6-slot photo grid with labels',
      'Filled slots: Front, Left, Right, Battery Bay, Odometer, Damage',
      'Empty slot add-photo affordance',
      'Auto-compression note',
      'Continue CTA',
    ],
    notes: 'Photos geo-tagged and timestamped. Compression targets 800KB per image on 4G upload from field.',
    render() {
      return `
        ${statusBar('10:54')}
        ${header('Before Photos', { right: I.cam })}
        <div class="app-scroll">
          <div class="section-pad">
            <div class="card glass" style="margin-bottom:14px;padding:12px 14px">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div>
                  <div class="fw-7" style="font-size:13px">Pre-Service Documentation</div>
                  <div class="row-sub">SRV-78421 · Required before work starts</div>
                </div>
                <span class="chip chip-green">5/6</span>
              </div>
            </div>
            <div class="photo-grid" style="margin-bottom:14px">
              <div class="photo-slot filled">
                <div style="font-size:24px;opacity:0.4">${I.cam}</div>
                <div class="ph-label">Front</div>
              </div>
              <div class="photo-slot filled">
                <div style="font-size:24px;opacity:0.4">${I.cam}</div>
                <div class="ph-label">Left</div>
              </div>
              <div class="photo-slot filled">
                <div style="font-size:24px;opacity:0.4">${I.cam}</div>
                <div class="ph-label">Right</div>
              </div>
              <div class="photo-slot filled">
                <div style="font-size:24px;opacity:0.4">${I.bolt}</div>
                <div class="ph-label">Battery Bay</div>
              </div>
              <div class="photo-slot filled">
                <div style="font-size:24px;opacity:0.4;font-family:var(--mono);font-size:11px;font-weight:700">12480</div>
                <div class="ph-label">Odometer</div>
              </div>
              <div class="photo-slot">
                <div style="font-size:28px">${I.plus}</div>
                <div class="ph-label" style="background:transparent;color:var(--text-muted)">Damage</div>
              </div>
            </div>
            <div class="card" style="display:flex;gap:10px;align-items:flex-start;background:var(--accent-dim);border-color:rgba(37,99,235,0.2);margin-bottom:14px">
              ${I.cam.replace('width="20"','width="18"').replace('height="20"','height="18"')}
              <div>
                <div class="fw-7" style="font-size:12px">Auto-compression enabled</div>
                <div class="row-sub">Images optimised to ~800 KB each before upload · Originals saved locally</div>
              </div>
            </div>
            <div class="tag-row">
              <span class="chip chip-slate">${I.loc} Geo-tagged</span>
              <span class="chip chip-slate">${I.clock} Timestamped</span>
              <span class="chip chip-slate">12,480 km logged</span>
            </div>
          </div>
        </div>
        <div class="section-pad" style="padding-top:0;padding-bottom:22px">
          <button class="btn btn-primary btn-block">Continue to After Photos ${I.chevron}</button>
        </div>`;
    },
  },
];
