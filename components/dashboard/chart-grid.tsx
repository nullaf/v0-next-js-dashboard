"use client"

import { useChartStore } from "@/lib/stores/chart-store"
import { LineChartCard } from "@/components/charts/line-chart-card"
import { BarChartCard } from "@/components/charts/bar-chart-card"
import { DonutChartCard } from "@/components/charts/donut-chart-card"
import { AreaChartCard } from "@/components/charts/area-chart-card"
import { useWorldBankData } from "@/lib/hooks/use-world-bank-data"

export function ChartGrid() {
  const charts = useChartStore((state) => state.charts)
  const { data, isLoading, error } = useWorldBankData()

  if (isLoading) {
    return <div>Loading data...</div>
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {charts.map((chart) => {
        switch (chart.type) {
          case "line":
            return <LineChartCard key={chart.id} chart={chart} data={data} />
          case "bar":
            return <BarChartCard key={chart.id} chart={chart} data={data} />
          case "donut":
            return <DonutChartCard key={chart.id} chart={chart} data={data} />
          case "area":
            return <AreaChartCard key={chart.id} chart={chart} data={data} />
          default:
            return null
        }
      })}
    </div>
  )
}
