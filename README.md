# World Bank Dashboard

A modern, minimalistic dashboard web application for visualizing World Bank data.

## Features

- Built with Next.js 14 and TypeScript
- App Router architecture
- ShadcnUI components for a clean, modern UI
- Interactive charts (Line, Bar, Donut, Area)
- Data table with sortable columns and CSV export
- Responsive design with collapsible sidebar
- Dark mode support
- Global state management with Zustand
- API data management with React Query v5
- Type-safe API client with Zod schemas

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended)

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/world-bank-dashboard.git
cd world-bank-dashboard
\`\`\`

2. Install dependencies:

\`\`\`bash
pnpm install
\`\`\`

3. Start the development server:

\`\`\`bash
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
world-bank-dashboard/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── charts/           # Chart components
│   ├── dashboard/        # Dashboard components
│   └── ui/               # UI components (shadcn)
├── lib/                  # Utility functions and hooks
│   ├── hooks/            # Custom React hooks
│   ├── stores/           # Zustand stores
│   └── types.ts          # TypeScript types
├── public/               # Static assets
└── README.md             # Project documentation
\`\`\`

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ShadcnUI](https://ui.shadcn.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Query v5](https://tanstack.com/query/latest)
- [Recharts](https://recharts.org/)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is licensed under the MIT License.
