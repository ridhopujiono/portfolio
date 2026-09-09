---
title: Nginx Manager
summary: A decoupled, security-first platform for managing Nginx reverse proxies and SSL certificates, built with a Go backend API and a Laravel dashboard UI.
category: personal
projectStatus: production
publicationStatus: published
featured: true
detailPageReady: true
sortOrder: 1
cover: ../../assets/images/nginx/page1.jpg
coverAlt: "Nginx Manager Cover"
roles:
  - Full-Stack Development
technologies:
  - Go
  - Laravel
  - SQLite
  - Nginx
  - Certbot
  - Docker
  - Tailwind CSS

previews:
  - src: ../../assets/images/nginx/architecture.webp
    alt: "Nginx Manager Architecture Diagram"
  - src: ../../assets/images/nginx/page1.jpg
    alt: "Dashboard view showing proxies"
  - src: ../../assets/images/nginx/page2.jpg
    alt: "Adding a new reverse proxy"
  - src: ../../assets/images/nginx/page3.jpg
    alt: "Proxy configuration details"
  - src: ../../assets/images/nginx/page4.jpg
    alt: "SSL Certificates management"
  - src: ../../assets/images/nginx/page5.jpg
    alt: "System Status and Nginx Test"
  - src: ../../assets/images/nginx/page6.jpg
    alt: "Settings and User Management"
  - src: ../../assets/images/nginx/page7.jpg
    alt: "Audit logs showing recent actions"
---

## Overview

Nginx Manager is a two-part open-source platform for safely managing Nginx reverse proxies and Let's Encrypt SSL certificates through a web dashboard. The core design principle is **strict privilege separation**: the Laravel dashboard never directly touches Nginx configuration files, runs shell commands, or invokes Certbot. All privileged operations are delegated exclusively to a dedicated Go backend service via a Bearer Token–authenticated HTTP API.

<figure aria-label="Architecture showing how the browser, Laravel dashboard, and Go service interact." style="margin-block: 2rem; border: 1px solid var(--color-border-subtle); background: var(--color-surface); padding: 2rem; border-radius: var(--radius-surface);">
  <svg viewBox="0 0 680 220" width="100%" height="auto" fill="none" style="display: block; font-family: var(--font-sans);">
    <!-- Browser -->
    <rect x="20" y="85" width="120" height="40" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent)" stroke-width="2"/>
    <text x="80" y="110" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Browser</text>
    <text x="80" y="140" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">User / Admin</text>
    <!-- Arrow Browser -> Laravel -->
    <path d="M140 105 L200 105" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#a1)"/>
    <!-- Laravel -->
    <rect x="200" y="85" width="140" height="40" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent-strong)" stroke-width="2"/>
    <text x="270" y="110" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Laravel UI</text>
    <text x="270" y="140" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">Dashboard · Auth · CRUD</text>
    <!-- Arrow Laravel -> Go Service -->
    <path d="M340 105 L400 105" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#a1)"/>
    <!-- Bearer Token label -->
    <text x="370" y="97" text-anchor="middle" fill="var(--color-text-muted)" font-size="9">Bearer Token</text>
    <!-- Go Service -->
    <rect x="400" y="85" width="140" height="40" rx="8" fill="var(--color-surface-elevated)" stroke="var(--color-accent-strong)" stroke-width="2"/>
    <text x="470" y="110" text-anchor="middle" fill="var(--color-text-primary)" font-size="13" font-weight="600">Go Service</text>
    <text x="470" y="140" text-anchor="middle" fill="var(--color-text-secondary)" font-size="10">REST API :9001</text>
    <!-- Arrow Go -> Nginx -->
    <path d="M540 105 L600 105" stroke="var(--color-border-interactive)" stroke-width="2" marker-end="url(#a1)"/>
    <!-- Nginx / Certbot -->
    <rect x="600" y="75" width="60" height="30" rx="6" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="1.5"/>
    <text x="630" y="95" text-anchor="middle" fill="var(--color-text-primary)" font-size="10" font-weight="600">Nginx</text>
    <rect x="600" y="115" width="60" height="30" rx="6" fill="var(--color-surface-elevated)" stroke="var(--color-border-subtle)" stroke-width="1.5"/>
    <text x="630" y="135" text-anchor="middle" fill="var(--color-text-primary)" font-size="10" font-weight="600">Certbot</text>
    <defs>
      <marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-border-interactive)" />
      </marker>
    </defs>
  </svg>
  <figcaption style="margin-top: 1rem; font-size: var(--text-small); color: var(--color-text-muted); text-align: center;">Request flow: Browser → Laravel Dashboard → Go Service → Nginx / Certbot. Laravel never touches system resources directly.</figcaption>
</figure>

## Architecture

The project is split into two independent repositories, each with a single, well-defined responsibility:

**[nginx-manager-service](https://github.com/ridhopujiono/nginx-service-manager)** — The Go backend that owns all privileged operations. It manages Nginx configuration files using Go templates, calls Certbot for SSL certificate issuance and renewal, validates configuration before each reload, and exposes a secure REST API protected by Bearer Token authentication.

**[nginx-manager-ui](https://github.com/ridhopujiono/nginx-manager-ui)** — The Laravel dashboard that serves as the sole interface for end users. It handles authentication, provides CRUD forms for proxy management, renders real-time system status, and triggers certificate renewals — all through HTTP calls to the Go service. The Laravel process has no `sudo` access and cannot write to `/etc/nginx`.

## Go Service (nginx-manager-service)

Built in Go, the backend is a single lightweight binary with no database dependency. Core modules include:

- **Proxy Management** — Creates, updates, and deletes Nginx `conf.d` configurations from a Go template. Accepts a domain, target host, target port, and SSL flag.
- **Nginx Control** — Runs `nginx -t` before every reload to prevent broken configurations from reaching production. Supports multiple reload modes: `systemctl` for production and `noop` for development.
- **Certificate Management** — Delegates to Certbot for Let's Encrypt issuance and renewal. Exposes a per-domain `/renew` endpoint consumed by Laravel's scheduled command.
- **Status Endpoint** — Reports service health, Nginx config validity, reload mode, certificate mode, and managed proxy count in a single JSON response.
- **Middleware** — Bearer Token authentication on all protected routes; structured logging for all operations.
- **Docker Support** — Includes a `Dockerfile.dev` and `compose.yaml` for containerised development.

## Laravel Dashboard (nginx-manager-ui)

The frontend is a server-rendered Laravel application styled with Tailwind CSS in a dark, minimal aesthetic. Key design decisions:

- **NginxManagerClient** — A single service class wrapping Laravel's HTTP client with `withToken()`, configurable timeout, and centralised error handling for connection errors, timeouts, and HTTP 4xx/5xx responses. The API token is configuration-only and never exposed to the browser, JavaScript, or logs.
- **Proxy CRUD** — Full create/edit/delete cycle backed by `StoreProxyRequest` and `UpdateProxyRequest` form validation. Domain names are normalised to lowercase; target hosts support IPv4, IPv6, hostnames, and Docker container names. The proxy list is always fetched live from the Go service — Laravel holds no local copy.
- **System Status** — A dedicated page that displays service health, Nginx configuration validity, reload mode (rendered as human-friendly labels), certificate mode, and managed proxy count. Includes one-click **Test Configuration** and **Reload Nginx** actions, both routed through Laravel (never called from the browser directly).
- **Certificate Management** — Lists all SSL-enabled domains and exposes a per-domain renewal trigger backed by the Go service's `/renew` endpoint.
- **Scheduled Renewal** — An Artisan command (`nginx-manager:renew-certificates`) checks all SSL-enabled proxies daily and calls the renewal endpoint per domain, handling per-domain failures independently without aborting the batch.
- **Admin Setup** — An interactive Artisan command (`nginx-manager:create-admin`) creates admin users with email uniqueness validation and minimum password length enforcement.
- **Audit Log** — All mutating operations (proxy created/updated/deleted, config tested, Nginx reloaded, certificate renewed) are written to an `audit_logs` table with `user_id`, `action`, `metadata`, and timestamp. Tokens and credentials are never logged.
- **Security** — All management routes are protected by `auth` middleware. All POST/PUT/DELETE forms carry CSRF tokens. Sensitive actions use throttle middleware (`throttle:30,1` for proxy mutations; `throttle:5,1` for Nginx reload). Stack traces are suppressed in production responses.

## Security Model

The defining feature of this project is what Laravel is explicitly **not allowed to do**:

| Operation | Laravel UI | Go Service |
|---|---|---|
| Write `/etc/nginx` | ✗ | ✓ |
| Run `nginx -t` / reload | ✗ | ✓ |
| Execute Certbot | ✗ | ✓ |
| Use `sudo` / shell commands | ✗ | ✓ |
| Hold Bearer Token in browser | ✗ | — |
| Authenticate end users | ✓ | — |
| Validate form input | ✓ | — |
| Render UI / audit log | ✓ | — |

This separation means a compromised web session cannot gain system-level access — the worst case is limited to Laravel's own database and session data.

## Comparison with Similar Tools

[Nginx Proxy Manager](https://nginxproxymanager.com) and [Nginx UI](https://nginxui.com) are the most popular alternatives. Both bundle the configuration writer and the UI into the same process, so a UI vulnerability can expose direct write access to Nginx configs. Nginx Manager's decoupled design keeps the attack surface of the web-facing component small by design.
