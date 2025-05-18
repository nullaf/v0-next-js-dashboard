'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Cell, Pie, PieChart } from 'recharts';
import type { WorldBankIndicator, ChartConfig } from '@/lib/types';

interface DonutChartCardProps {
  chart: ChartConfig;
  data: WorldBankIndicator[];
}

export function DonutChartCard({ chart, data }: DonutChartCardProps) {
  // Process data for the chart
  const chartData = data
    .filter((item) => item.value !== null)
    .slice(0, 5)
    .map((item) => ({
      name: item.country.value,
      value:
        typeof item.value === 'number'
          ? item.value
          : Number.parseFloat(item.value || '0'),
    }));

  const COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{chart.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartData.reduce(
            (acc, _, index) => ({
              ...acc,
              [`slice${index + 1}`]: {
                label: `Slice ${index + 1}`,
                color: COLORS[index % COLORS.length],
              },
            }),
            {}
          )}
          className="aspect-[4/3] w-full"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={45}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
              label={({ name }) => name.substring(0, 3)}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
