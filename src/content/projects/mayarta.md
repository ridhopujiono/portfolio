---
title: Mayarta (Personal Finance Tracker)
summary: A mobile-first personal finance app. It helps users track expenses and analyze spending profiles.
category: personal
projectStatus: production
publicationStatus: published
featured: true
detailPageReady: true
sortOrder: 2
cover: ../../assets/images/mayarta/Splash.png
coverAlt: "Mayarta Cover"
roles:
  - Full-Stack & Mobile Development
technologies:
  - React Native
  - NativeWind
  - Laravel
  - Python (Flask)
  - Google Gemini AI
  - Firebase Cloud Messaging
  - MySQL
  - Redis
  - Laravel Horizon

previews:
  - src: ../../assets/images/mayarta/Splash.png
    alt: "Splash Screen"
    orientation: portrait
  - src: ../../assets/images/mayarta/Login.png
    alt: "Login Screen"
    orientation: portrait
  - src: ../../assets/images/mayarta/Beranda.png
    alt: "Beranda Screen"
    orientation: portrait
  - src: ../../assets/images/mayarta/Transaksi.png
    alt: "Transaksi Screen"
    orientation: portrait
  - src: ../../assets/images/mayarta/Detail Transaksi.jpg
    alt: "Detail Transaksi Screen"
    orientation: portrait
  - src: ../../assets/images/mayarta/Scan.png
    alt: "Scan Screen"
    orientation: portrait
  - src: ../../assets/images/mayarta/Edit Scan Sebelum Simpan.png
    alt: "Edit Scan Screen"
    orientation: portrait
  - src: ../../assets/images/mayarta/DSS.png
    alt: "DSS Profile Screen"
    orientation: portrait
  - src: ../../assets/images/mayarta/Akun.png
    alt: "Akun Screen"
    orientation: portrait
---

## Overview

Mayarta is a personal finance app that helps users record, categorize, and analyze daily transactions. Its core workflows cover scanning receipts through an AI-powered OCR service, logging transactions manually, monitoring monthly budgets with automated push notifications, and generating a spending profile through an in-house Decision Support System (DSS).

The system is composed of three components: a React Native mobile app, a Laravel backend API, and a standalone Python OCR service that communicates with Google Gemini AI.

<figure aria-label="Simplified view of how each component in the Mayarta system connects." style="margin-block: 2rem; border: 1px solid var(--color-border-subtle); background: var(--color-surface); padding: 2rem; border-radius: var(--radius-surface);">
  <svg viewBox="0 0 700 260" width="100%" height="auto" fill="none" style="display: block; font-family: var(--font-sans);">
    <!-- Mobile App -->
    <rect x="20" y="90" width="140" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="90" y="116" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Mobile App</text>
    <text x="90" y="148" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">React Native + NativeWind</text>
    <!-- Arrow Mobile <-> Backend -->
    <path d="M160 112 L230 112" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)"/>
    <path d="M230 118 L160 118" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr-rev)"/>
    <!-- Backend API -->
    <rect x="230" y="90" width="160" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent-strong)" stroke-width="2"/>
    <text x="310" y="116" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Backend API</text>
    <text x="310" y="148" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Laravel 13 + Sanctum + Horizon</text>
    <!-- Arrow Backend -> OCR -->
    <path d="M390 100 L460 70" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)"/>
    <!-- OCR Service -->
    <rect x="460" y="40" width="160" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="540" y="66" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">OCR Service</text>
    <text x="540" y="98" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Python Flask + Gemini AI</text>
    <!-- Arrow Backend -> Firebase -->
    <path d="M390 122 L460 152" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)"/>
    <!-- Firebase FCM -->
    <rect x="460" y="140" width="160" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="2"/>
    <text x="540" y="166" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Firebase FCM</text>
    <text x="540" y="198" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Push Notifications</text>
    <!-- Arrow Backend -> DB -->
    <path d="M310 134 L310 185" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arr)"/>
    <!-- MySQL + Redis -->
    <rect x="220" y="185" width="180" height="44" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="2"/>
    <text x="310" y="210" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">MySQL + Redis</text>
    <text x="310" y="230" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Database + Queue / Cache</text>
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-border-interactive)" />
      </marker>
      <marker id="arr-rev" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 10 0 L 0 5 L 10 10 z" fill="var(--color-border-interactive)" />
      </marker>
    </defs>
  </svg>
  <figcaption style="margin-top: 1rem; font-size: var(--text-small); color: var(--color-text-muted); text-align: center;">Simplified view of how the mobile app, backend API, OCR service, and Firebase FCM connect.</figcaption>
</figure>

## My Role

I built this system end-to-end as a personal project, covering every layer: the React Native mobile app, the Laravel backend API, and the standalone Python OCR microservice. All architectural decisions, feature design, and implementation were done independently.

## Receipt OCR and Scan Flow

The centrepiece feature is scanning paper receipts using the phone camera. Users can capture a photo directly, pick one from their gallery, or use the automatic document scanner. Once an image is submitted, the following pipeline runs asynchronously:

1. The backend stores the image and creates a `ReceiptScan` record with a `pending` status.
2. A `ProcessReceiptScan` job is dispatched to the Laravel Horizon queue (backed by Redis).
3. The job sends the image to the Python OCR service (`ocr-gemini`) over HTTP.
4. The OCR service analyzes the image with Google Gemini AI, extracting the transaction date, merchant name, line items with prices and categories, tax, service charge, and total amount.
5. The result is returned to the backend, the `ReceiptScan` record is updated to `completed`, and a push notification is sent to the user's device via Firebase Cloud Messaging.
6. The mobile app polls for the scan status, then presents the OCR Result screen where the user can review and edit items before saving them as a transaction.

The OCR service (`ocr-gemini`) is a self-contained Flask microservice. It accepts both local file uploads and remote image URLs, handles data normalization — including merchant-specific date format parsing (e.g. Indomaret's `DD.MM.YY` format) — and validates all transaction categories against a fixed allowed list.

## Transaction Management

Transactions can be entered through two paths: automatic OCR or manual entry. The transaction management features include:

- **List and filtering** — filter by month, type (income/expense), category, merchant name, and input method.
- **Monthly summary** — displays total expenses, income, net balance, and a comparison against the previous month.
- **Period total** — a dedicated endpoint for calculating totals used by the budget widget.
- **Full CRUD** — create, read, update, and delete transactions along with their line items in a single request.
- **Structured categorization** — 28 transaction categories kept consistent across OCR extraction, the manual entry form, and all filters.

Each transaction has a `items` relation that stores item name, price, and category. Categories also determine whether a transaction counts as income or expense.

## Budget and Smart Alerts

Users can set a monthly spending budget. Every time a new transaction is saved, `BudgetAlertService` calculates the total expenses for the current month and compares them against the defined limit. Push notifications are sent automatically when spending reaches certain thresholds (e.g. 80%, 100%). The service respects each user's notification preferences, including quiet hours and per-type notification toggles.

## Decision Support System

The DSS Profile screen analyzes a user's spending patterns using an in-house rule-based classification system (`dss-v1`). The system computes three features from transaction data across a configurable time window (default: 6 months):

- **Monthly Burn Rate** — average monthly spending.
- **Discretionary Ratio** — proportion of non-essential spending relative to total expenses.
- **Budget Adherence** — how consistently the user stays within their defined budget.

Based on scores derived from these three features, the system classifies the user into one of five profiles: **Saver**, **Spender**, **Investor**, **Debtor**, or **Balanced** — each with a confidence score and human-readable reasons. Profiles are computed on demand, and the system tracks whether a profile is stale (i.e. new transactions exist since the last analysis).

## Push Notifications

The notification system is built on Firebase Cloud Messaging via the `kreait/firebase-php` SDK. Each user can register multiple devices. FCM tokens are stored per device in the `user_devices` table, and notifications are fanned out to all active tokens. Notifications are triggered for two events:

- **Scan complete** — when OCR finishes successfully or fails.
- **Budget alert** — when monthly spending approaches or exceeds the user's limit.

Notification preferences (global enable/disable, per-type toggles, quiet hours) are managed per user and checked before every dispatch.

## Mobile App Architecture

The mobile app is built with React Native 0.84 (New Architecture) using:

- **NativeWind v4** — utility-first styling with Tailwind CSS classes.
- **React Navigation** — native stack with per-screen animation customizations (fade, slide, bottom sheet).
- **TanStack Query** — server state management for DSS data hooks.
- **Notifee + Firebase Messaging** — foreground and background push notification handling.
- **AsyncStorage** — persistence for the auth token and onboarding completion state.

The app flow is: Splash → Onboarding (first launch) → Auth (Login / Register) → Main Stack (Home, Scan, OCR Result, Transactions, Manual Entry, DSS Profile, Settings).

## Backend Architecture

The backend is built on Laravel 13 with:

- **Sanctum** — token-based API authentication for the mobile client.
- **Laravel Horizon** — Redis-backed queue management for asynchronous scan processing.
- **Redis** — queue backing store and cache layer for budget alert deduplication.
- **Docker** — containerized development environment via `docker-compose`.
- **Laravel Telescope** — request and job debugging in development.
