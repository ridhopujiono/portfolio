---
title: Field Management System
summary: A web and mobile platform supporting agricultural field operations. It helps teams plan activities and manage resources efficiently.
category: professional
projectStatus: production
publicationStatus: published
featured: true
detailPageReady: true
isConfidential: true
sortOrder: 1
roles:
  - Backend, Web & Mobile Development
technologies:
  - Laravel
  - React
  - Mantine
  - React Native
  - MySQL
  - Redis
  - SQLite
  - Firebase
  - AWS
  - Docker
---

## Overview

> **Confidentiality Note:** This is an internal private project. Some operational details, intellectual property, and client identities have been anonymized or omitted to comply with Non-Disclosure Agreement (NDA) requirements.

The Field Management System (FMS) is a full-stack agricultural operations platform. It serves field workers, agronomists, QC teams, and management through two clients: a web application for planning, reporting, and configuration, and a mobile app for on-site field workflows. The backend provides shared business logic, APIs, scheduled jobs, and event-driven notifications that serve both surfaces. The mobile app supports offline usage with a local SQLite database that synchronizes with the server when connectivity is restored.

The system covers a wide operational scope: location master data, seasonal activity planning and realization, materials management, water source and irrigation management, field notes and journals, QC inspections, dynamic forms (Form Studio), report generation, weather data, and analytics.

<figure aria-label="High-level architecture: web, backend API, mobile app, and offline SQLite." style="margin-block: 2rem; border: 1px solid var(--color-border-subtle); background: var(--color-surface); padding: 2rem; border-radius: var(--radius-surface);">
  <svg viewBox="0 0 720 260" width="100%" height="auto" fill="none" style="display: block; font-family: var(--font-sans);">
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-border-interactive)" />
      </marker>
    </defs>
    <!-- Web App -->
    <rect x="20" y="90" width="150" height="50" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="95" y="111" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Web App</text>
    <text x="95" y="128" text-anchor="middle" fill="var(--color-text-secondary)" font-size="11">React + Mantine</text>
    <text x="95" y="152" text-anchor="middle" fill="var(--color-text-muted)" font-size="10">Plans · Notes · Analytics</text>
    <!-- Arrow Web -> Backend -->
    <line x1="170" y1="115" x2="260" y2="115" stroke="var(--color-border-interactive)" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="260" y1="125" x2="170" y2="125" stroke="var(--color-border-interactive)" stroke-width="1.5" marker-end="url(#arr)"/>
    <!-- Backend API -->
    <rect x="260" y="70" width="200" height="90" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent-strong)" stroke-width="2"/>
    <text x="360" y="97" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Backend API</text>
    <text x="360" y="114" text-anchor="middle" fill="var(--color-text-secondary)" font-size="11">Laravel 12 · Octane · Horizon</text>
    <text x="360" y="131" text-anchor="middle" fill="var(--color-text-muted)" font-size="10">Business Logic · Jobs · Events</text>
    <text x="360" y="148" text-anchor="middle" fill="var(--color-text-muted)" font-size="10">MySQL · Redis · Firebase · AWS S3</text>
    <!-- Arrow Backend -> Mobile -->
    <line x1="460" y1="105" x2="550" y2="80" stroke="var(--color-border-interactive)" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="550" y1="90" x2="460" y2="115" stroke="var(--color-border-interactive)" stroke-width="1.5" marker-end="url(#arr)"/>
    <!-- Mobile App -->
    <rect x="550" y="30" width="150" height="75" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="625" y="55" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Mobile App</text>
    <text x="625" y="72" text-anchor="middle" fill="var(--color-text-secondary)" font-size="11">React Native 0.79</text>
    <text x="625" y="89" text-anchor="middle" fill="var(--color-text-muted)" font-size="10">Field Workflows · Offline</text>
    <!-- Arrow Mobile <-> SQLite -->
    <line x1="625" y1="105" x2="625" y2="145" stroke="var(--color-border-interactive)" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="615" y1="145" x2="615" y2="105" stroke="var(--color-border-interactive)" stroke-width="1.5" marker-end="url(#arr)"/>
    <!-- SQLite -->
    <rect x="550" y="145" width="150" height="60" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="2"/>
    <text x="625" y="170" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Local SQLite</text>
    <text x="625" y="187" text-anchor="middle" fill="var(--color-text-secondary)" font-size="11">op-sqlite</text>
    <text x="625" y="200" text-anchor="middle" fill="var(--color-text-muted)" font-size="10">Offline Records · Sync Queue</text>
    <!-- Scheduled Jobs box -->
    <rect x="260" y="190" width="200" height="50" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="360" y="212" text-anchor="middle" fill="var(--color-text-primary)" font-size="12" font-weight="600">Scheduled Jobs</text>
    <text x="360" y="229" text-anchor="middle" fill="var(--color-text-muted)" font-size="10">Sync · Generate · Notifications</text>
    <line x1="360" y1="160" x2="360" y2="190" stroke="var(--color-border-subtle)" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr)"/>
  </svg>
  <figcaption style="margin-top: 1rem; font-size: var(--text-small); color: var(--color-text-muted); text-align: center;">High-level architecture: web app, backend API, mobile app, local SQLite, and scheduled jobs.</figcaption>
</figure>

## My Role

I contributed through **Mandatech Mataram Mukti** as part of a cross-functional development team. My work spanned Laravel backend services, React/Mantine web interfaces, and React Native mobile features. Contributions were focused on specific modules and workflows within a larger team-built system, collaborating closely with other developers. I also provided guidance and support to junior developers on the team.

---

## Location & Field Data

The system manages a large catalogue of field locations with associated master data including plant types, statuses, zones, PG zones, commodity, and historical records.

**Backend:** Maintained and extended APIs for location data, zone filtering, commodity data, plant state/status listing, and location mode history. Contributed to large controller classes including the location list and resource controllers. Worked on models for `Location` and related entities covering location histories, master users, material accumulation, and realization.

**Web:** UI adjustments and feature work in the plans/locations pages, covering activities, notes, QC notes, strategies, and material accumulation sections. Location flush priority views and analytics.

**Mobile:** Maintained the locations screen flow including location list, detail, and activity material screens. Local SQLite caching via `dbLocation.ts` and `dbLocationActivities.ts` supports offline access to location and activity data across a wide range of sub-entities (materials, spray times, soil analyses, leaf color, NDVI, rainfall, DSM, plant weight, etc.).

---

## Activity Planning & Realization

The planning module manages seasonal activity cycles — planned activities (RPK / Rencana Pelaksanaan Kegiatan), actual realizations, and deviation tracking through Exception Letters.

**Backend:** Developed and maintained APIs for the Plans module, covering activities, Exception Letters, material accumulation activities, and materials. Supported workflows for activities with and without materials, material accumulation, and the full Exception Letter lifecycle (submission, approval, rejection, comments). Different activity types — standard with material, non-material, manual SBT, and manual non-SBT — each follow distinct validation and processing rules.

**Imports & Exports:** Contributed to multi-sheet Excel imports and exports for plan activities, differentiated by type: material-based sheets, non-material sheets, manual SBT/non-SBT sheets. Each sheet type targets a distinct data structure. Exports include template downloads used by field teams to batch-upload activity realizations. Exception Letter data exports are also supported.

**Web:** UI work in the plans/activities, exception-letters, material-accumulation, and related pages. Adjustments to forms, tables, validations, and access controls.

**Mobile (RPK/Pra-RPK):** Maintained the mobile RPK screen and Exception Letter screens. The Pra-RPK module covers pre-planning input, listing, detail views, and analytic progress screens. Exception Letter non-accumulation screens cover creation, detail, and approval flows.

**Notifications:** Exception Letter lifecycle triggers in-app and push notifications including approval, rejection, comments, and deadline reminders — covering a full set of notification types for each participant in the approval chain.

---

## Water Management

Water management covers irrigation engine sets, pump operations, transfers, handovers, pipe relocations, rainfall sampling, irrigation inspections, and approvals. It is one of the most complex modules in the system, with rich interconnections between backend, web, and mobile.

### Engine Sets & Transfers

**Backend:** Built and extended the engine set controller (the largest single controller in the codebase at ~97 KB), the transfer controller, handover controller, and permission controller. Core workflows handled include: creating and updating engine sets with location assignments, processing pump transfers between sites, managing multi-step handovers with item checklists and signatures, pipe relocations, repair requests, quick count irrigation entries, and VCB status tracking.

Models include `WaterSourceLocationEngineSet`, `WaterSourceLocationEngineSetTransfer`, `WaterSourceLocationEngineSetHandover`, `WaterSourceLocationEngineSetChangeHistory`, `WaterSourceLocationEngineSetPipeRelocation`, `WaterSourceLocationEngineSetSignature`, `WaterSourceLocationEngineSetPermission`, and `WaterSourceLocationEngineSetRepair`.

**Web:** Engine set management pages under water management: location engine set listing, engine set form, pipe relocation, handover, additional unit requests, and repair workflows. Quick count and daily irrigation analysis input pages.

**Mobile:** Engine set forms and workflows — form screen (~48 KB), location form screen (~16 KB), cancellation form, signature, and list/detail screens. Handover, quick count, pipe condition report, repair request, and daily analysis input are each covered by dedicated screens. Local SQLite tables cover all engine set sub-entities with full sync queue support.

**Change History & Notifications:** Engine set changes (status, location, transfer) record histories and dispatch push notifications to relevant parties.

### Rainfall & Irrigation Inspection

Built endpoints and web views for rainfall sampling points and sampling point history. Irrigation inspection endpoint handles inspection records linked to engine sets. Mobile rainfall history input provides offline capture of rainfall sampling data.

### Water Source Notes & Settings

Extended water source notes (list, form, detail) on both web and mobile. Web-side settings cover signatures, item handover checklists, plant state, evapotranspiration coefficients, poor pipe categories, mapping of stations to locations, and year configuration.

### Scheduled Data Generation

Background jobs handle water source data regeneration: engine sets generation, irrigators generation, and water source simulation — all dispatched via scheduled Artisan commands.

---

## Field Notes, Journals & QC

### Location Notes

**Backend:** The notes controller handles full CRUD, history tracking, photo attachments (via the `Attachment` model), zone-level notes, supervision form linking, and PIC (person in charge) assignment. The main resource controller is one of the largest in the codebase (~125 KB). Related endpoints cover note history and linked location activities.

**Mobile:** Full note workflows — list, detail, add/edit form, photo modal, and history views. Local storage covers note metadata, observation QC settings, and PIC supervision data.

**Notifications:** Note lifecycle events (new notes, description updates, comments, zone descriptions, supervision negative answers, overdue cases) trigger in-app notifications to relevant PICs and supervisors.

### Journals

**Mobile:** Journal creation, editing, detail, and tab content views. Local SQLite covers journal entries with full offline creation support. Journal-related notifications cover comments, description updates, PIC assignments, and zone descriptions.

### QC Inspection (QC Notes / Non-conformance)

**Backend:** QC notes controller and inspection workflows share infrastructure with location notes, maintaining separate QC-specific fields and tracking. Journal settings QC controllers configure inspection templates.

**Mobile:** QC observation notes stored offline with full CRUD support. Settings cache enables offline schema lookup. The non-conformance and internal customer complaint screens provide structured inspection and complaint capture with dedicated SQLite modules covering categories, types, created-by, direct-to recipients, verification signatures, and unsynced state tracking.

---

## Offline Mobile Architecture

Field operations often happen in locations with limited or no connectivity. A central design goal of the mobile app is to keep field workflows fully functional offline.

### Local SQLite via op-sqlite

The mobile app maintains a local SQLite database with **82 table modules** under `src/database/`, covering nearly all operational entities: locations, activities, materials, water sources, engine sets, notes, journals, form studio entries, Exception Letters, rainfall history, and more. SQLite access is provided by `@op-engineering/op-sqlite`, enabling high-performance native SQL queries directly from React Native without a JavaScript bridge overhead.

### Sync State Tracking

Each local record carries sync-state metadata to distinguish between:
- **Unsynced new records** — created locally, not yet pushed to the server.
- **Synced records** — confirmed by the server with a server-assigned ID.
- **Dirty records** — locally modified after the last successful sync.

This allows the UI to display connection status indicators and warn users about unsynced changes before navigating away or closing the app.

### ID Resolution & Linking

A key challenge in offline-first design is creating records locally before obtaining server-assigned IDs. The database modules handle this by:
- Generating local UUIDs for all new records at creation time.
- Tracking `local_id` alongside `server_id` once synchronization succeeds.
- Resolving relationships between locally-created parent and child records during transmission — for example, linking a locally-created engine set location to its parent engine set before the parent's server ID is confirmed.

This is particularly complex in the water management module where engine sets, their locations, handovers, pipe relocations, repairs, and report pipes each form a multi-level hierarchy that must be resolved in the correct order during upload.

### Android Background Sync

Implemented Android background synchronization using `@notifee/react-native`, allowing the app to push locally-queued records to the server even when the app is backgrounded. A `@react-native-community/netinfo` integration monitors connection state and triggers sync attempts when connectivity is restored.

### Offline-Capable Workflows

The following mobile workflows are fully or partially offline-capable:

| Workflow | SQLite Module |
|---|---|
| Location notes | `dbNote`, `dbNoteHelper` |
| Journals | `dbJournal` |
| QC inspection notes | `dbNoteObservationQC`, `dbNoteObservationQCSettings` |
| Location activities | `dbLocationActivities`, `dbLocationActivitiesRealization` |
| Location materials | `dbLocationMaterials`, `dbLocationSprayTimes` |
| Water source engine sets | `dbWaterSourceLocationEngineSets` |
| Engine set locations | `dbWaterSourceLocationEngineSetLocations` |
| Real irrigation records | `dbWaterSourceLocationEngineSetLocationRealIrrigations` |
| Engine set handovers | `dbWaterSourceLocationEngineSetHandovers` |
| Handover generate unsynced | `dbWaterSourceHandoverGenerateUnsynced` |
| Pipe relocations | `dbWaterSourceLocationEngineSetPipeRelocations` |
| Pipe condition reports | `dbWaterSourceLocationEngineSetReportPipe` |
| Engine set repairs | `dbWaterSourceLocationEngineSetRepairs` |
| Quick count irrigation | `dbWaterSourceLocationEngineSetQuickCountIrrigations` |
| Engine set signatures | `dbWaterSourceLocationEngineSetSignatures` |
| Engine set permissions | `dbWaterSourceLocationEngineSetPermissions` |
| Additional unit requests | `dbWaterSourceLocationEngineSetAdditionalUnitRequest` |
| Water source notes | `dbWaterSourceNotes`, `dbWaterSourceNoteDepths` |
| Rainfall history | `dbWaterSourceRainfallHistory` |
| Exception Letters (non-accum) | `dbELNonAccum`, `dbELNonAccumSetting` |
| Internal customer complaints | `dbELInternalCustomerComplaints` |
| ELICC metadata | `dbELICCCategories`, `dbELICCTypes`, `dbELICCCreatedBy`, etc. |
| Form Studio submissions | `dbFormStudioData` (~61 KB) |
| Form Studio schemas/categories | `dbFormStudioSchemas`, `dbFormStudioCategories` |
| Smartlab requests | `dbSmartlabRequests` |
| Pra-RPK | `dbPraRPK`, `dbPraRPKList` |

---

## Dynamic Forms & Form Studio

The Form Studio allows configurable data forms to be built by administrators and filled by field users on both web and mobile.

**Backend:** Worked on Form Studio v2 endpoints (~55 KB controller). Adjusted existing endpoints for mobile consumption (pagination, filtering, response shaping). Contributed to schema, field, filter, and signature-related features on the schema and table models. Implemented signature workflow notifications. Form-level access control is managed through `FormStudioPermission`.

**Exports:** Multi-sheet Excel export for Form Studio data covering configurable column types and multiple sheets per template, enabling bulk data download from dynamic form entries.

**Web:** Form Studio pages under `formGenerator` and `data-form-studio` cover template configuration, field management, and data entry views. Dashboard Studio and Report Studio Apply Menu controllers (~11 KB and ~24 KB respectively) provide configurable embedded views.

**Mobile:** Form Studio screens include category listing, form submission (add/edit ~33–35 KB each), detail, signature, and signature log views. Form data is stored offline via the `dbFormStudioData` module — the largest single SQLite module at ~61 KB — with schema and category caching modules supporting offline schema lookup.

---

## Operational Data & Reporting

### Support Data Exports

Developed and maintained operational support data exports. The `AllSupportDataExport` (~16 KB) handles multi-sheet export covering activities, materials, realizations, and other operational dimensions for management reporting.

### Analyses & Analytics

Contributed to analysis workflows across leaf color, plant weight, disease, NDVI, soil, rainfall, and population dimensions. Each analysis type has a dedicated generate job and associated notification. Mobile analysis screens cover location analytics, activity analytics, material analytics, plant weight, and flush priority analytics.

### Report Studio

Extended web and mobile Report Studio, which provides configurable report views driven by backend-configured schemas. Report Studio tables support dashboards and report apply menus, making analytical reports available to specific user roles without custom code.

### Operational Monitoring

Water management operational monitoring analytics cover flush priority analytics, monitoring analytics, and operational monitoring analytics pages on the web — providing dashboards for irrigation planning decisions.

---

## Scheduled Jobs & Background Processing

The backend runs a large fleet of scheduled Artisan commands and queued jobs managed by **Laravel Horizon**. The console kernel registers over 150 commands. Key contributions include:

- **Location Sync:** Synchronize location master data, activity records, and material records from upstream systems (SAP / DWH integration).
- **Activity & Material Sync:** Keep master activity and material dictionaries current, including standard activities, materials, and strategy data.
- **Analyses Generation:** Dedicated generate jobs for each analysis dimension — leaf color, plant weight, soil, disease, NDVI, rainfall, population — each dispatched on schedule and sending completion notifications.
- **Exception Letter Jobs:** Scheduled checks for EL reminder deadlines, NC per month, NC until harvest, and NC without EL.
- **Notification Jobs:** Generate note/QC note notifications, set default unread notification state (~18 KB job), and sync notification state.
- **Weather Data:** Fetch and process external weather data (OpenWeather API), compare with station data, and push weather-related notifications.
- **Vehicle Sync:** Sync vehicle master data used in field operation assignments.
- **Water Source Generation:** Regenerate engine data, irrigator data, and simulation data on schedule.
- **Work Order Plan Generation:** Batch generate work order plan data and materials.

---

## Quality, Access Control & Permissions

**Permissions:** The system uses role-based access control enforced at both backend middleware and controller level. Contributed to permission configuration and a console command that scans all registered routes and synchronizes route-level permissions with the database, enabling fine-grained per-route access control management through the admin UI.

**Bug Investigation & API Maintenance:** Investigated and verified reported bugs across backend and mobile layers, maintained API correctness, and ensured backward compatibility as new features were added alongside ongoing production use.

**Code Quality Standards:** The project enforces coding standards through ESLint (Airbnb + Mantine configs on web; React Native ESLint config on mobile), TypeScript strict mode, and Laravel Pint for PHP. Agent rules govern patterns for dropdowns/selects, table sorting, and validation message language across the team, ensuring UI consistency.

**Monitoring:** The backend integrates Sentry for error tracking, OpenTelemetry for distributed tracing, and supports AWS CloudWatch alongside Laravel Telescope for development-time inspection.

---

## Tech Stack Summary

### Backend
| Layer | Technology |
|---|---|
| Framework | Laravel 12 (PHP 8.2) |
| Runtime | Laravel Octane |
| Queue | Laravel Horizon (Redis) |
| Real-time | Laravel Reverb (WebSockets) |
| Auth | Laravel Sanctum |
| Excel I/O | Maatwebsite Laravel Excel |
| Push Notifications | Firebase Cloud Messaging (FCM) |
| Messaging | Laravel Slack Notification Channel |
| Geo | phayes/geophp |
| Error Tracking | Sentry |
| Observability | OpenTelemetry (OTLP/gRPC) |
| PDF | Browsershot (Puppeteer) |
| Storage | AWS S3 (Flysystem) |
| Database | MySQL 8, Redis |
| Infrastructure | Docker, AWS, GitHub Actions / GitLab CI |

### Web Frontend
| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| UI Library | Mantine v6 |
| State | Recoil, TanStack Query v4 |
| Charts | Nivo (bar, line, pie, radar, geo, treemap, radial-bar, scatter) |
| Maps | React Leaflet, MapLibre GL, Turf.js |
| Tables | TanStack Table v8 (with virtual scrolling) |
| Rich Text | Tiptap |
| Calendar | FullCalendar |
| Drag & Drop | dnd-kit |
| SQL Editor | CodeMirror |
| Build | Vite + Laravel Vite Plugin |
| PWA | vite-plugin-pwa |
| E2E Tests | Playwright |

### Mobile
| Layer | Technology |
|---|---|
| Framework | React Native 0.79 (React 19) |
| Navigation | React Navigation v7 (native stack, bottom tabs, stack) |
| Server State | TanStack Query v5 |
| Client State | Jotai |
| Local DB | op-sqlite (SQLite — high-performance native) |
| Charts | Victory Native + @shopify/react-native-skia |
| Maps | react-native-maps |
| Push Notifications | @react-native-firebase/messaging + Notifee |
| Forms | Formik + Yup |
| HTTP | Axios |
| Background Sync | Notifee background handler |
| Network State | @react-native-community/netinfo |
| Images | react-native-fast-image, react-native-compressor, react-native-image-picker |
| Lists | @shopify/flash-list |
| Date/Time | dayjs, @react-native-community/datetimepicker |
| Utilities | lodash, uuid |
