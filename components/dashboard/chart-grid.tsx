'use client';

import { useChartStore } from '@/lib/stores/chart-store';
import { LineChartCard } from '@/components/charts/line-chart-card';
import { BarChartCard } from '@/components/charts/bar-chart-card';
import { DonutChartCard } from '@/components/charts/donut-chart-card';
import { AreaChartCard } from '@/components/charts/area-chart-card';
import { useWorldBankData } from '@/lib/hooks/use-world-bank-data';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function ChartGrid() {
  const charts = useChartStore((state) => state.charts);
  const removeChart = useChartStore((state) => state.removeChart);
  const { data, isLoading, error } = useWorldBankData();

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const renderChart = (chart: (typeof charts)[0]) => {
    const ChartComponent = {
      line: LineChartCard,
      bar: BarChartCard,
      donut: DonutChartCard,
      area: AreaChartCard,
    }[chart.type];

    if (!ChartComponent) return null;

    return (
      <div
        key={chart.id}
        className="relative group min-w-[15rem] min-h-[15rem]"
      >
        <Button
          variant="destructive"
          size="icon"
          className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity h-4 w-4"
          onClick={() => removeChart(chart.id)}
        >
          <X className="h-2 w-2" />
          <span className="sr-only">Remove chart</span>
        </Button>
        <ChartComponent chart={chart} data={data} />
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-[80vw]">
        {charts.map(renderChart)}
      </div>
    </div>
  );
}
