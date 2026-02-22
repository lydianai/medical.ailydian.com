<div align="center">

# MedBoard - Modern Healthcare Analytics Dashboard

<p><em>High-Performance Clinical and Administrative Analytics Built with Next.js 16, React 19, and Tailwind CSS v4</em></p>

<p>
  <a href="#overview"><img src="https://img.shields.io/badge/Docs-Overview-blue?style=for-the-badge" alt="Overview"></a>
  <a href="#architecture"><img src="https://img.shields.io/badge/Docs-Architecture-purple?style=for-the-badge" alt="Architecture"></a>
  <a href="#key-features"><img src="https://img.shields.io/badge/Docs-Features-green?style=for-the-badge" alt="Features"></a>
  <a href="#getting-started"><img src="https://img.shields.io/badge/Docs-Setup-orange?style=for-the-badge" alt="Setup"></a>
</p>

<p>
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/License-Proprietary-red?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4">
  <img src="https://img.shields.io/badge/WCAG-2.1_AA-009900?style=flat-square" alt="Accessibility">
</p>

<br>

<table>
<tr>
<td width="50%">

**Platform Highlights**
- Patient overview with real-time status indicators and KPIs
- Analytics charts for clinical and operational performance metrics
- Appointment management with integrated calendar interface
- Staff scheduling and inventory supply status monitoring

</td>
<td width="50%">

**Technical Excellence**
- React Server Components for minimal client JavaScript bundle
- Streaming responses with Suspense boundaries for instant paint
- TypeScript strict mode with Zod validation at all data boundaries
- Tailwind CSS v4 with dark mode and WCAG 2.1 AA accessibility

</td>
</tr>
</table>

</div>

---

## Overview

MedBoard is a modern healthcare analytics interface designed for clinical and administrative teams. It provides a clean, high-performance environment for monitoring patient metrics, managing appointments, and visualizing operational data across healthcare facilities.

Built on Next.js 16 App Router with React 19 and Tailwind CSS v4, the dashboard leverages the latest stable releases for optimal server-rendering performance, smallest possible bundle size, and a best-in-class developer experience.

---

## Architecture

```mermaid
graph TD
    subgraph "Frontend"
        A[Next.js 16 App Router] --> B[Dashboard Views]
        B --> C[Patient Overview]
        B --> D[Analytics Charts]
        B --> E[Appointment Manager]
    end
    subgraph "Design System"
        F[Tailwind CSS v4] --> B
        G[Component Library] --> B
        H[Theme Engine] --> B
    end
```

---

## Key Features

### Dashboard Interface
- Patient overview with real-time status indicators
- Analytics charts for clinical and operational KPIs
- Appointment management with calendar integration
- Staff scheduling and workload visualization
- Inventory and supply status monitoring

### Performance
- Server-Side Rendering (SSR) for instant first paint
- React Server Components for minimal client JavaScript
- Streaming responses with Suspense boundaries
- Automatic static optimization for non-dynamic routes
- Image optimization via Next.js Image component

### Design System
- Tailwind CSS v4 with the latest design tokens
- Dark mode support with system preference detection
- Fully responsive across mobile, tablet, and desktop
- Accessible components following WCAG 2.1 AA guidelines
- Consistent spacing, typography, and color scales

### Type Safety
- TypeScript strict mode across the entire codebase
- End-to-end type safety from API to component props
- Zod schema validation for all data boundaries
- No implicit `any` types

---

## Tech Stack

| Layer | Technology | Badge |
|:------|:-----------|:------|
| Framework | Next.js 16 (App Router) | ![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js) |
| UI Library | React 19 | ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black) |
| Language | TypeScript (strict mode) | ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| Styling | Tailwind CSS v4 | ![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| Linting | ESLint | ![ESLint](https://img.shields.io/badge/ESLint-latest-4B32C3?style=flat-square&logo=eslint) |
| Package Manager | npm | ![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat-square&logo=npm&logoColor=white) |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/lydianai/medical.ailydian.com.git
cd medical.ailydian.com
npm install
```

### Environment Setup

```bash
cp .env.example .env.local
# Configure your environment variables
```

### Development

```bash
npm run dev
# Opens http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
medical.ailydian.com/
├── app/                    # Next.js 16 App Router
│   ├── (dashboard)/        # Dashboard route group
│   │   ├── patients/       # Patient management
│   │   ├── analytics/      # Charts and KPIs
│   │   └── appointments/   # Scheduling
│   ├── api/                # API route handlers
│   └── layout.tsx          # Root layout with theme
├── components/             # Shared UI components
│   ├── charts/             # Data visualization
│   ├── forms/              # Form components
│   └── layout/             # Navigation and shell
├── lib/                    # Utilities
│   ├── api/                # API client functions
│   └── utils/              # Helper functions
└── public/                 # Static assets
```

---

## Deployment

The application is optimized for deployment on Vercel. The included `vercel.json` provides production-ready configuration.

```bash
vercel deploy --prod
```

For other platforms, run `npm run build` and serve the `.next` output directory with any Node.js-compatible host.

---

## Security

Security vulnerabilities should be reported privately. See [SECURITY.md](SECURITY.md) for our responsible disclosure policy.

---

## License

Copyright (c) 2024-2026 Lydian (AiLydian). All Rights Reserved.

This software is proprietary. See [LICENSE](LICENSE) for full terms.

---

## Contact

- Website: [https://www.ailydian.com](https://www.ailydian.com)
- Email: info@ailydian.com
