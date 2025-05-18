import { Suspense } from "react"
import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ChartGrid } from "@/components/dashboard/chart-grid"
import { DataTableSkeleton } from "@/components/dashboard/data-table-skeleton"
import { ChartGridSkeleton } from "@/components/dashboard/chart-grid-skeleton"
import { DataTable } from "@/components/dashboard/data-table"
import { ErrorBoundary } from "@/components/error-boundary"

export const metadata: Metadata = {
  title: "Dashboard | World Bank Data",
  description: "Interactive dashboard for World Bank data visualization",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" description="Visualize World Bank data with interactive charts" />

      <ErrorBoundary>
        <Suspense fallback={<ChartGridSkeleton />}>
          <ChartGrid />
        </Suspense>
      </ErrorBoundary>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Data Table</h2>
        <ErrorBoundary>
          <Suspense fallback={<DataTableSkeleton />}>
            <DataTable />
          </Suspense>
        </ErrorBoundary>
      </div>
    </DashboardShell>
  )
}
