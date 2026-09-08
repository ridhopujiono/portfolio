---
title: Field Management System
summary: A web and mobile platform supporting agricultural field operations, from activity planning and water management to offline field records.
category: professional
projectStatus: production
publicationStatus: published
featured: true
detailPageReady: true
sortOrder: 1
roles:
  - Backend, Web & Mobile Development
technologies:
  - Laravel
  - React
  - Mantine
  - React Native
  - MySQL
  - SQLite
---

## Overview

The platform supports agricultural field operations through a web application and a mobile app. Its workflows cover location data, activity planning, materials, water management, and field records. The backend provides data and business rules for both applications, while the mobile app supports usage when connectivity is limited.

<figure aria-label="Simplified view of how web, backend, and mobile workflows connect." style="margin-block: 2rem; border: 1px solid var(--color-border-subtle); background: var(--color-surface); padding: 2rem; border-radius: var(--radius-surface);">
  <svg viewBox="0 0 600 200" width="100%" height="auto" fill="none" style="display: block; font-family: var(--font-sans);">
    <!-- Web -->
    <rect x="40" y="80" width="140" height="40" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="110" y="105" text-anchor="middle" fill="var(--color-text-primary)" font-size="14" font-weight="600">Web App</text>
    <text x="110" y="135" text-anchor="middle" fill="var(--color-text-secondary)" font-size="11">Management & Reporting</text>
    <!-- Connector Web <-> Backend -->
    <path d="M180 100 L250 100" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow-start)"/>
    <!-- Backend -->
    <rect x="250" y="80" width="140" height="40" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent-strong)" stroke-width="2"/>
    <text x="320" y="105" text-anchor="middle" fill="var(--color-text-primary)" font-size="14" font-weight="600">Backend API</text>
    <text x="320" y="135" text-anchor="middle" fill="var(--color-text-secondary)" font-size="11">Business Rules & Shared Data</text>
    <!-- Connector Backend <-> Mobile -->
    <path d="M390 100 L460 100" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow-start)"/>
    <!-- Mobile -->
    <rect x="460" y="40" width="120" height="40" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="520" y="65" text-anchor="middle" fill="var(--color-text-primary)" font-size="14" font-weight="600">Mobile App</text>
    <text x="520" y="95" text-anchor="middle" fill="var(--color-text-secondary)" font-size="11">Field Workflows</text>
    <!-- Connector Mobile <-> SQLite -->
    <path d="M520 80 L520 120" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow-start)"/>
    <!-- SQLite -->
    <rect x="460" y="120" width="120" height="40" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="2"/>
    <text x="520" y="145" text-anchor="middle" fill="var(--color-text-primary)" font-size="14" font-weight="600">Local SQLite</text>
    <text x="520" y="175" text-anchor="middle" fill="var(--color-text-secondary)" font-size="11">Local Records & Sync</text>
    <!-- Definitions for arrows -->
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-border-interactive)" />
      </marker>
      <marker id="arrow-start" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-border-interactive)" transform="rotate(180 5 5)"/>
      </marker>
    </defs>
  </svg>
  <figcaption style="margin-top: 1rem; font-size: var(--text-small); color: var(--color-text-muted); text-align: center;">Simplified view of how web, backend, and mobile workflows connect.</figcaption>
</figure>

## My Role

I contribute through Mandatech Mataram Mukti as part of the development team. My work spans Laravel backend services, React and Mantine interfaces, and React Native mobile features. My contributions focus on specific modules and workflows within an existing team-built system.

## Field Operations

Developed and maintained location details, planned activities, and actual operations. Workflows handle activities with and without materials, material accumulations, and Exception Letters. Contributions include UI adjustments, APIs, validations, and permissions. The functional results deliver interfaces and data processing tailored to different activity requirements, template imports and exports suited to data types, and access controls on related features.

## Water Management

Built and extended workflows for engine set and pump transfers, handovers, pipe relocations, and approvals. Features include change history and notifications, interconnecting backend, web, and mobile. Specific contributions span database and model changes, APIs and process rules, web forms and controls, as well as mobile forms and related synchronization workflows.

## Offline Mobile Workflows

Field tasks need to remain usable when connectivity is limited. Contributions include local data storage using SQLite, field records (location notes, journals, QC inspection), and water management workflows. I addressed synchronization state tracking, matching local IDs with server IDs, Android background sync, and connection status indicators. Specific challenges handled include generating local records before obtaining server IDs, linking related data during transmission, and ensuring users can identify unsynced changes.

## Dynamic Forms and Reporting

Extended existing dynamic-form capabilities across web and mobile. Adjusted backend endpoints for mobile consumption, developed Form Studio v2 features, and worked on form fields, filters, and signature-related notifications. Implemented multi-sheet Excel imports and exports, alongside workflows for operational support data.

## Delivery and Collaboration

Developed and maintained scheduled backend jobs, including location synchronization. Maintained APIs, investigated and verified reported bugs, and supported junior developers as part of a collaborative team effort.
