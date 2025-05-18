# World Bank Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, minimalistic dashboard web application for visualizing World Bank data. Built with Next.js 14, TypeScript, and ShadcnUI.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [License](#license)

## ✨ Features

- **Modern Stack**: Built with Next.js 14 and TypeScript
- **Clean Architecture**: App Router for optimal routing and organization
- **Beautiful UI**:
  - ShadcnUI components for a clean, modern interface
  - Dark mode support
  - Responsive design with collapsible sidebar
- **Data Visualization**:
  - Interactive charts (Line, Bar, Donut, Area)
  - Data tables with sortable columns
  - CSV export functionality
- **State Management**:
  - Global state with Zustand
  - API data management with React Query v5
  - Type-safe API client with Zod schemas

## 🚀 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.17 or later
- pnpm (recommended package manager)

## 💻 Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

## 🛠 Development

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Make your changes and see them reflected in real-time.

## 📁 Project Structure

```
world-bank-dashboard/
├── app/                  # Next.js App Router
│   ├── api/             # API routes
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── charts/         # Chart components
│   ├── dashboard/      # Dashboard components
│   └── ui/             # UI components (shadcn)
├── lib/                 # Utility functions and hooks
│   ├── hooks/          # Custom React hooks
│   ├── stores/         # Zustand stores
│   └── types.ts        # TypeScript types
└── public/             # Static assets
```

## 🔧 Technologies

| Category         | Technologies                                        |
| ---------------- | --------------------------------------------------- |
| Framework        | [Next.js 14](https://nextjs.org/)                   |
| Language         | [TypeScript](https://www.typescriptlang.org/)       |
| UI Components    | [ShadcnUI](https://ui.shadcn.com/)                  |
| State Management | [Zustand](https://github.com/pmndrs/zustand)        |
| Data Fetching    | [React Query v5](https://tanstack.com/query/latest) |
| Charts           | [Recharts](https://recharts.org/)                   |
| Validation       | [Zod](https://zod.dev/)                             |
| Styling          | [Tailwind CSS](https://tailwindcss.com/)            |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
