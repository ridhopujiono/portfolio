---
title: Nginx Manager
summary: A Go service and Laravel dashboard intended for reverse proxy management and configuration.
category: personal
projectStatus: in-progress
publicationStatus: draft
featured: false
detailPageReady: false
sortOrder: 3
roles: []
technologies:
  - Go
  - Laravel
---

## Overview

Nginx Manager aims to simplify reverse proxy administration by coupling a backend Go service with a Laravel-based dashboard. The system is designed to manage domain routing, configuration validation, and proxy host routing.

## Project Status

Initial development and deployment trials have been conducted. Proxy configurations and Nginx configuration checks have been successfully tested. HTTPS provisioning via Certbot has been trialed, with varying results across different host environments.

## Technical Approach

- **Go Service**: Manages Nginx processes, validates configurations, and reloads the proxy safely.
- **Laravel Dashboard**: Provides the web interface for managing domains, routes, and viewing service status.
- **Routing**: Intended to manage traffic forwarding to specific internal hosts and ports.

## Current Limitations

Features such as fully automated HTTPS generation, robust configuration rollbacks, and comprehensive status panels are part of the planned scope but are not yet finalized for production use.
