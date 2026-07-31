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

## Screen inventory (42)

| # | Screen | Flow |
|---|--------|------|
| 01 | Splash Screen | Auth |
| 02 | Login | Auth |
| 03 | Waiting For Admin Approval | Auth |
| 04 | Admin Approved | Auth |
| 05 | OTP Verification | Auth |
| 06 | Dashboard | Home |
| 07 | Today's Tasks | Tasks |
| 08 | Task Details | Tasks |
| 09 | Customer Details | Tasks |
| 10 | Vehicle Details | Tasks |
| 11 | Navigate To Customer | Navigation |
| 12 | Live GPS Tracking | Navigation (OpenStreetMap / MapLibre style — **no Google Maps**) |
| 13 | Reach Customer | Navigation |
| 14 | Start Service OTP | Service |
| 15 | Service Checklist | Service |
| 16 | Vehicle Inspection | Service |
| 17 | Select Service Items | Quotation |
| 18 | Add Labour Charges | Quotation |
| 19 | Add Spare Parts | Quotation |
| 20 | Quotation Preview | Quotation |
| 21 | Edit Quotation | Quotation |
| 22 | Apply Discount | Quotation |
| 23 | Add Notes | Quotation |
| 24 | Send PDF | Quotation |
| 25 | WhatsApp Preview | Quotation |
| 26 | SMS Preview | Quotation |
| 27 | Waiting Customer Approval | Approval |
| 28 | Customer Approved | Approval |
| 29 | Service In Progress | Execution |
| 30 | Upload Before Photos | Execution |
| 31 | Upload After Photos | Execution |
| 32 | Invoice Preview | Billing |
| 33 | Invoice PDF | Billing |
| 34 | Send Invoice | Billing |
| 35 | QR Payment | Billing |
| 36 | Payment Success | Billing |
| 37 | End Service OTP | Completion (after payment only) |
| 38 | Service Completed | Completion |
| 39 | Service History | Profile |
| 40 | Notifications | Alerts |
| 41 | Profile | Profile |
| 42 | Settings | Profile |

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
