---
title: Presensi Lab Informatika
summary: A mobile-first, QR-based laboratory attendance and monitoring system for university students, lecturers, and administrators.
category: professional
projectStatus: production
publicationStatus: published
featured: true
detailPageReady: true
sortOrder: 7
cover: ../../assets/images/attandance/Display.png
coverAlt: "Presensi Lab Cover"
roles:
  - Full-Stack Development
  - UI/UX Design
technologies:
  - Laravel
  - PHP
  - MySQL
  - HTML5-QRCode
  - Leaflet.js
  - Geolocation API

  - Phosphor Icons
  - Blade Templating

previews:
  - src: ../../assets/images/attandance/Login.png
    alt: "Login Screen"
    orientation: portrait
  - src: ../../assets/images/attandance/Scan.png
    alt: "QR Scanner Screen"
    orientation: portrait
  - src: ../../assets/images/attandance/History.png
    alt: "Attendance History"
    orientation: portrait
  - src: ../../assets/images/attandance/Dashboard.png
    alt: "Admin Dashboard"
    orientation: landscape
  - src: ../../assets/images/attandance/Display.png
    alt: "Live Lab Display"
    orientation: landscape
---

## Overview

Presensi Lab Informatika is a fast, lightweight, and mobile-optimized web application designed to streamline laboratory attendance and monitoring in university environments. The system completely replaces expensive, hardware-based attendance machines (like fingerprint or barcode scanners) with a decentralized approach: students and lecturers use their own smartphones to scan a static QR code printed on the laboratory door.

The system is composed of a mobile-first user interface for students and lecturers, a comprehensive admin dashboard for lab managers, and a live display screen meant for monitors mounted inside the laboratories.

<figure aria-label="Simplified view of how the Presensi Lab system operates." style="margin-block: 2rem; border: 1px solid var(--color-border-subtle); background: var(--color-surface); padding: 2rem; border-radius: var(--radius-surface);">
  <svg viewBox="0 0 700 260" width="100%" height="auto" fill="none" style="display: block; font-family: var(--font-sans);">
    <!-- Student's Phone -->
    <rect x="20" y="90" width="140" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="90" y="116" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Student Device</text>
    <text x="90" y="148" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">HTML5-QRCode + Browser</text>
    <!-- Arrow Device <-> Backend -->
    <path d="M160 112 L230 112" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)"/>
    <path d="M230 118 L160 118" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr-rev)"/>
    <!-- Backend System -->
    <rect x="230" y="90" width="160" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent-strong)" stroke-width="2"/>
    <text x="310" y="116" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Laravel Backend</text>
    <text x="310" y="148" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Session Auth + SSR Views</text>
    <!-- Arrow Backend -> Live Monitor -->
    <path d="M390 100 L460 70" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)"/>
    <!-- Live Monitor -->
    <rect x="460" y="40" width="160" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="540" y="66" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Lab Display</text>
    <text x="540" y="98" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Live Occupancy Monitor</text>
    <!-- Arrow Backend -> Admin -->
    <path d="M390 122 L460 152" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)"/>
    <!-- Admin Dashboard -->
    <rect x="460" y="140" width="160" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="2"/>
    <text x="540" y="166" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Admin Dashboard</text>
    <text x="540" y="198" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Reporting & Management</text>
    <!-- Arrow Backend -> DB -->
    <path d="M310 134 L310 185" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)"/>
    <!-- Database -->
    <rect x="220" y="185" width="180" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="2"/>
    <text x="310" y="210" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">MySQL Database</text>
    <text x="310" y="230" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Attendance Logs & Users</text>
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-border-interactive)" />
      </marker>
      <marker id="arr-rev" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 10 0 L 0 5 L 10 10 z" fill="var(--color-border-interactive)" />
      </marker>
    </defs>
  </svg>
  <figcaption style="margin-top: 1rem; font-size: var(--text-small); color: var(--color-text-muted); text-align: center;">System architecture demonstrating decentralized scanning via student devices.</figcaption>
</figure>

## My Role

I designed and developed the entire application from scratch, heavily focusing on performance and user experience. This included the database schema design, Laravel backend development, and writing raw, lightweight CSS to perfectly emulate a native mobile app feel inside the browser.

## The Decentralized Scanning Flow

Unlike traditional attendance systems that rely on dedicated scanning hardware at the door, this system leverages the users' own devices. 

1. Admin generates and prints a **Static QR Code Poster** for each laboratory from the dashboard.
2. The poster is placed outside the lab entrance.
3. Students and lecturers log in to the web app on their phones.
4. Using the built-in HTML5-QRCode scanner on the app's Scan page, users scan the poster.
5. The backend validates the user's active session, registers a check-in (or check-out) event, and records their stated purpose (e.g., Practicum, Research).
6. The user immediately receives a success confirmation on their screen.

This decentralized approach offers massive cost savings (no hardware to purchase or maintain), functions flawlessly during lab power outages (since users use their own mobile data and battery), and eliminates long queues because dozens of students can scan the poster simultaneously.

## Geofencing Anti-Cheat System

To prevent users from photographing the static QR code and scanning it remotely, a dual-layer geolocation validation system was implemented:
- **Admin Configuration:** The admin dashboard features an interactive map (powered by Leaflet.js) where lab managers can drag a pin to set exact coordinates and visually adjust the allowed attendance radius (e.g., 50 meters) for each lab.
- **Frontend Validation:** Upon scanning, the browser's Geolocation API fetches the user's coordinates. A lightweight JavaScript implementation of the Haversine formula instantly calculates the distance and blocks the action if the user is out of bounds, providing immediate UI feedback.
- **Backend Verification:** To prevent client-side tampering, the coordinates are sent securely to the Laravel backend which re-calculates the distance and acts as the final source of truth before persisting the attendance log.


## Mobile-First Frontend Architecture

Instead of utilizing a heavy UI framework like Bootstrap or Tailwind, the user-facing interface was custom-built using raw, minimalistic CSS. The layout strictly enforces a mobile frame (max-width 428px) even on desktop browsers, delivering a focused, app-like experience.

Key frontend features include:
- **Sticky Navigation:** An absolute-positioned bottom navigation bar anchoring to the 100vh container frame, providing a true native app feel while the content scrolls smoothly behind it.
- **Server-Side Rendering (SSR):** Powered by Laravel Blade, the HTML is generated on the server and delivered instantly, completely avoiding the blank loading states associated with Single Page Applications (SPAs).
- **Lazy Loaded Scanner:** The relatively heavy `html5-qrcode` library is only initialized on the scanning page, saving bandwidth and memory when users are just viewing their history or contacts.
- **Modern iconography:** Consistent usage of Phosphor Icons across all user and admin views, ensuring a clean and professional aesthetic.

## Admin Dashboard & Live Monitoring

The administrative panel is completely separated from the student interface, featuring a responsive, light-themed dashboard that is powerful enough for desktop management.

- **Master Data Management:** Full CRUD capabilities for student and lecturer records, including bulk Excel imports for easy onboarding at the start of a semester.
- **Live Occupancy:** The dashboard provides real-time statistics on how many people are currently active in each laboratory.
- **Reporting & Exporting:** Advanced filtering options allow admins to generate attendance reports by date, user type, lab, or purpose, with one-click exports to PDF and Excel.
- **Lab Display Link:** A dedicated auto-refreshing public view (`/lab/display`) is available to be cast onto smart TVs or monitors inside the laboratories, showing exactly who is currently checked into that specific room.
