# E Royce Service Manager — High-Fidelity Wireframe Presentation

**UI/UX Design Deliverable Only** — Not application source code.

## Open the presentation

1. Open `wireframes/index.html` in Chrome / Edge / Firefox  
   **or**
2. From this folder run:
   ```
   python -m http.server 8765
   ```
   Then visit: http://localhost:8765

## Client presentation controls

| Action | How |
|--------|-----|
| Browse screens | Left sidebar list or search |
| Next / Previous | Toolbar buttons, bottom arrows, or ← → keys |
| Dark Mode (default) | Toolbar **Dark Mode** or press `D` |
| Light Mode | Toolbar **Light Mode** or press `L` |
| Specs panel | Right panel — purpose, elements, flow position |

## Screen inventory (41)

| # | Screen | Flow |
|---|--------|------|
| 01 | Splash Screen | Auth |
| 02 | Login (Mobile + Password) | Auth |
| 03 | Check In | Attendance |
| 04 | Check Out | Attendance |
| 05 | Dashboard | Home |
| 06 | Today's Tasks | Tasks |
| 07 | Task Details | Tasks |
| 08 | Customer Details | Tasks |
| 09 | Vehicle Details | Tasks |
| 10 | Navigate To Customer | Navigation |
| 11 | Live GPS Tracking | Navigation (OpenStreetMap / MapLibre style — **no Google Maps**) |
| 12 | Reach Customer | Navigation |
| 13 | Start Service OTP | Service |
| 14 | Service Checklist | Service |
| 15 | Vehicle Inspection | Service |
| 16 | Select Service Items | Quotation |
| 17 | Add Labour Charges | Quotation |
| 18 | Add Spare Parts | Quotation |
| 19 | Quotation Preview | Quotation |
| 20 | Edit Quotation | Quotation |
| 21 | Apply Discount | Quotation |
| 22 | Add Notes | Quotation |
| 23 | Send PDF | Quotation |
| 24 | WhatsApp Preview | Quotation |
| 25 | SMS Preview | Quotation |
| 26 | Waiting Customer Approval | Approval |
| 27 | Customer Approved | Approval |
| 28 | Service In Progress | Execution |
| 29 | Upload Before Photos | Execution |
| 30 | Upload After Photos | Execution |
| 31 | Invoice Preview | Billing |
| 32 | Invoice PDF | Billing |
| 33 | Send Invoice | Billing |
| 34 | QR Payment | Billing |
| 35 | Payment Success | Billing |
| 36 | End Service OTP | Completion (after payment only) |
| 37 | Service Completed | Completion |
| 38 | Service History | Profile |
| 39 | Notifications | Alerts |
| 40 | Profile | Profile |
| 41 | Settings | Profile |

## Auth & attendance flow

```
Splash → Login (mobile + password) → Check In (GPS attendance) → Dashboard
      → … field work …
      → Check Out (end of shift) from Home or Profile
```

- **Username:** registered mobile number (+91)
- **Password:** required on Login
- **Attendance:** mandatory Check In after login; Check Out at shift end

## Design system

- **Theme:** Premium Enterprise · Glassmorphism · Material 3 inspired  
- **Default:** Dark Mode (`#0B1220` / `#111827`)  
- **Also:** Light Mode toggle  
- **Primary:** `#10B981` · **Accent:** `#2563EB` · **Warning:** `#F59E0B` · **Danger:** `#EF4444`  
- **Typography:** Plus Jakarta Sans  
- **Bottom nav:** Home · Tasks · Map · Alerts · Profile  

## Sample journey data (consistent across screens)

- Engineer: **Arjun Mehta** · ER-ENG-2041  
- Customer: **Priya Sharma** · +91 98765 43210  
- Vehicle: **TN 09 AB 4521** · Ather 450X Gen 3  
- Job: **SRV-78421** · Quotation **QT-2026-78421** · Invoice **INV-2026-78421** · Total **₹5,251**

## Scope note

This package is a **high-fidelity interactive wireframe deck** for stakeholder review.  
It does **not** include Flutter, React Native, Laravel, or backend implementation.
