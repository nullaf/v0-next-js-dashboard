"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import type { WorldBankIndicator, ChartConfig } from "@/lib/types"

interface AreaChartCardProps {
  chart: ChartConfig
  data: WorldBankIndicator[]
}

export function AreaChartCard({ chart, data }: AreaChartCardProps) {
  // Process data for the chart
  const chartData = data
    .filter((item) => item.value !== null)
    .slice(0, 10)
    .map((item) => ({
      name: item.country.value,
      value: typeof item.value === "number" ? item.value : Number.parseFloat(item.value || "0"),
    }))

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{chart.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            data: {
              label: "Data",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="aspect-[4/3]"
        >
          <AreaChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tickFormatter={(value) => value.substring(0, 3)} />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-data)"
              fill="var(--color-data)"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
