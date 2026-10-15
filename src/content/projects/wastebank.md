---
title: Waste Bank Management Platform
summary: A full-stack platform for managing waste bank operations. It handles waste deposits, withdrawals, and financial reporting.
category: professional
projectStatus: production
publicationStatus: published
featured: true
detailPageReady: true
sortOrder: 3
cover: ../../assets/images/wastebank/11-Splash.png
coverAlt: "Waste Bank"
roles:
  - Full-Stack Development (Backend, Web Dashboard & Mobile)
technologies:
  - Laravel
  - Sanctum
  - MySQL
  - Redis
  - React Native
  - NativeWind
  - Firebase Cloud Messaging
  - Docker
  - DomPDF
  - Maatwebsite Excel

previews:
  - src: ../../assets/images/wastebank/11-Splash.png
    alt: "Splash Screen"
    orientation: portrait
  - src: ../../assets/images/wastebank/1-DashboardNasabah.png
    alt: "Dashboard Nasabah (Mobile)"
    orientation: portrait
  - src: ../../assets/images/wastebank/2-FormTarikSaldoDanPIN.png
    alt: "Tarik Saldo & Verifikasi PIN"
    orientation: portrait
  - src: ../../assets/images/wastebank/3-DashboardAdmin.png
    alt: "Dashboard Admin (Mobile)"
    orientation: portrait
  - src: ../../assets/images/wastebank/4-FormSetor(POS).png
    alt: "Sistem Setor POS"
    orientation: portrait
  - src: ../../assets/images/wastebank/5-PersetujuanPenarikan.png
    alt: "Persetujuan Penarikan Saldo"
    orientation: portrait
  - src: ../../assets/images/wastebank/6-Notifikasi.png
    alt: "Push Notification"
    orientation: portrait
  - src: ../../assets/images/wastebank/7-DashboardWeb.png
    alt: "Web Dashboard"
    orientation: landscape
  - src: ../../assets/images/wastebank/8-LaporanBukuKas.png
    alt: "Laporan Buku Kas (Web)"
    orientation: landscape
  - src: ../../assets/images/wastebank/9-ManajemenNasabah.png
    alt: "Manajemen Nasabah (Web)"
    orientation: landscape
  - src: ../../assets/images/wastebank/10-Nota-Pdf.png
    alt: "Nota PDF"
    orientation: landscape
---

## Overview

The platform powers day-to-day waste bank operations through a Laravel backend, a server-rendered web dashboard, and a React Native mobile application. Nasabah (customers) deposit waste to earn wallet credits, track prices, and request balance withdrawals. Admin staff record deposits at the counter, approve or reject withdrawals, manage waste categories and pricing, and review financial reports. The system supports multi-branch tenancy, where each branch operates with isolated data while a Super Admin oversees all branches.

<figure aria-label="Simplified architecture: how the mobile app, backend API, web dashboard, and supporting services connect." style="margin-block: 2rem; border: 1px solid var(--color-border-subtle); background: var(--color-surface); padding: 2rem; border-radius: var(--radius-surface);">
  <svg viewBox="0 0 720 260" width="100%" height="auto" fill="none" style="display: block; font-family: var(--font-sans);">
    <!-- Mobile App -->
    <rect x="20" y="30" width="140" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="90" y="57" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Mobile App</text>
    <text x="90" y="90" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">React Native · NativeWind</text>
    <text x="90" y="103" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Nasabah &amp; Admin Roles</text>
    <!-- Connector Mobile -> Backend -->
    <path d="M160 52 L260 52" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)" marker-start="url(#arr-s)"/>
    <text x="210" y="44" text-anchor="middle" fill="var(--color-text-muted)" font-size="9">REST API</text>
    <!-- Backend API -->
    <rect x="260" y="30" width="160" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent-strong)" stroke-width="2"/>
    <text x="340" y="57" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Backend API</text>
    <text x="340" y="90" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Laravel · Sanctum · PHP 8.3</text>
    <text x="340" y="103" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Business Rules &amp; Wallet Ledger</text>
    <!-- Connector Backend -> Web Dashboard -->
    <path d="M420 52 L530 52" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)" marker-start="url(#arr-s)"/>
    <text x="475" y="44" text-anchor="middle" fill="var(--color-text-muted)" font-size="9">Server-Side</text>
    <!-- Web Dashboard -->
    <rect x="530" y="30" width="160" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="610" y="57" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Web Dashboard</text>
    <text x="610" y="90" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Blade · Tailwind · Alpine.js</text>
    <text x="610" y="103" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Admin &amp; Super Admin</text>
    <!-- Connector Backend -> MySQL -->
    <path d="M310 74 L310 140" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)"/>
    <!-- MySQL -->
    <rect x="240" y="140" width="120" height="40" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="2"/>
    <text x="300" y="165" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">MySQL 8</text>
    <text x="300" y="195" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Multi-Branch Data</text>
    <!-- Connector Backend -> Redis -->
    <path d="M370 74 L370 140" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)"/>
    <!-- Redis -->
    <rect x="370" y="140" width="100" height="40" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="2"/>
    <text x="420" y="165" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Redis</text>
    <text x="420" y="195" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Cache &amp; Queues</text>
    <!-- Connector Backend -> FCM -->
    <path d="M340 74 L340 215 L560 215" stroke="var(--color-border-interactive)" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#arr)"/>
    <!-- FCM -->
    <rect x="560" y="195" width="130" height="40" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="2"/>
    <text x="625" y="220" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Firebase FCM</text>
    <text x="625" y="250" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Push Notifications</text>
    <!-- Connector FCM -> Mobile -->
    <path d="M625 195 L625 130 L90 130 L90 103" stroke="var(--color-border-interactive)" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#arr)"/>
    <!-- Arrow defs -->
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-border-interactive)"/>
      </marker>
      <marker id="arr-s" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-border-interactive)" transform="rotate(180 5 5)"/>
      </marker>
    </defs>
  </svg>
  <figcaption style="margin-top: 1rem; font-size: var(--text-small); color: var(--color-text-muted); text-align: center;">Simplified architecture: how the mobile app, backend API, web dashboard, and supporting services connect.</figcaption>
</figure>

## My Role

I designed and built the full system end-to-end — Laravel backend services with RESTful API and server-rendered web dashboard, React Native mobile application with role-based interfaces for Nasabah and Admin, database architecture with wallet ledger, Docker-based infrastructure, push notification pipeline, and financial reporting with PDF and Excel exports.

## Wallet Ledger and Transactions

The core of the platform is an immutable wallet mutation ledger. Every waste deposit creates a credit entry; every withdrawal creates a debit entry. Each mutation records the balance before and after, linked polymorphically to its source transaction. The system supports two payout modes: credits saved to the wallet for future withdrawal, and direct cash payouts where the deposit immediately generates a paired credit-then-debit mutation with an auto-approved withdrawal record. Deposit cancellations verify the current balance can absorb the reversal — if funds were already withdrawn, deletion is blocked. Wallet reads during withdrawal processing use row-level locking to prevent race conditions on concurrent requests.

## Waste Deposit Workflow

Admin staff record waste deposits through a POS-style form on both the mobile app and the web dashboard. The form supports selecting a Nasabah via a searchable picker, adding multiple waste items each with a category and weight in kilograms, and toggling between wallet credit and instant cash settlement. Prices are resolved from the latest effective price record per category, preserving historical accuracy. After submission, the system generates a unique transaction code, updates the wallet, and triggers a push notification to the Nasabah. Saved deposits can be viewed in detail, filtered by date range and Nasabah, and exported. The web dashboard additionally generates a printable PDF receipt (nota kwitansi).

## Balance Withdrawal and Approval

Nasabah submit withdrawal requests through the mobile app, choosing from five methods: Bank Transfer, OVO, GoPay, DANA, or Cash. The form validates the amount against the current wallet balance, applies a configurable admin fee percentage, and requires PIN verification before submission. Admin staff receive a push notification and review requests through a moderation screen with status filtering and search. Approving a request requires uploading a transfer proof image, which the backend compresses to WebP format. Rejecting a request requires a written reason and automatically refunds the reserved balance.

## Multi-Branch Tenancy

The system is designed for multi-branch deployment. Each branch operates with isolated waste categories, prices, transactions, wallets, and cash flow records. A global scope automatically filters queries by the authenticated user's branch. Super Admins bypass branch scoping to manage all branches, create and assign branch admin accounts, and oversee cross-branch operations. Branch-specific settings, such as withdrawal fee percentages, are stored in a key-value settings table scoped per branch.

## Nasabah Mobile Experience

The React Native mobile app provides Nasabah with a dashboard showing their greeting, total wallet balance with a hide/show toggle, deposit statistics, and recent transactions. A real-time waste price catalog supports search with debounced filtering. Transaction history is filterable by type (deposits, withdrawals, or all) with infinite scroll pagination. The profile section supports editing personal data, changing passwords, and setting up a 6-digit security PIN. The app displays push notifications via Firebase Cloud Messaging with Notifee for foreground display, and maintains an in-app notification inbox with unread counters and mark-as-read controls.

## Admin Mobile Experience

The admin-facing mobile interface provides an operational dashboard with daily metrics — number of depositing customers, waste weight collected, outgoing balance, and pending withdrawal count — alongside a weekly top-nasabah leaderboard and latest deposit feed. The deposit creation screen functions as a mobile POS terminal. The Nasabah management module supports full CRUD with status filtering and detailed profile views including wallet balances and bank account information. The withdrawal moderation screen enables approving with photo proof upload or rejecting with reasons. Additional modules cover master waste category and pricing management, and operational expense tracking with categorized entries.

## Web Dashboard and Reporting

The server-rendered web dashboard extends the mobile admin capabilities with richer data visualization and export features. The main dashboard presents a 7-day deposit trend chart, current month metrics, and pending action counters. Financial management includes an income ledger, expense tracker, and a waste sales module for recording bulk sales to buyers — each sale automatically creates a linked income entry. Reporting covers general deposit summaries, a cash book (Buku Kas) combining incomes, approved withdrawals, and expenses in chronological order, and a balance sheet (Neraca) showing financial health with 12-month trends. All reports support Excel and PDF export. The web interface also supports category management with historical price versioning and configurable system settings.

## Push Notification Pipeline

The notification system combines Firebase Cloud Messaging for device delivery with a database-backed inbox for persistence. When key events occur — deposits recorded, withdrawals approved or rejected, new withdrawal requests submitted — the backend stores a notification record and dispatches an FCM message through the Firebase PHP SDK. Broadcast announcements to all branch Nasabah are processed through a queued job that chunks recipients in batches of 100. The mobile app registers its FCM token on authentication, handles foreground messages through Notifee local display, and processes background taps to navigate to relevant screens.

## Infrastructure and Deployment

The development environment is containerized with Docker Compose: PHP 8.3 FPM with GD (WebP support), Nginx on port 8007, MySQL 8 with health checks, Redis for caching and queue processing, and a dedicated queue worker container. Automated nightly database backups dump MySQL and optionally upload to S3-compatible storage with configurable retention. The mobile app supports product flavor builds — ErtigaCash and DuklinDuit — sharing a single codebase with distinct application IDs, display names, and branding assets.
