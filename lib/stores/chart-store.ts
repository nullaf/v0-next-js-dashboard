import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { ChartConfig } from "@/lib/types"

interface ChartState {
  charts: ChartConfig[]
  addChart: (chart: ChartConfig) => void
  removeChart: (id: string) => void
  clearCharts: () => void
}

export const useChartStore = create<ChartState>()(
  persist(
    (set) => ({
      charts: [
        {
          id: "1",
          type: "line",
          title: "GDP Growth",
        },
        {
          id: "2",
          type: "bar",
          title: "Population",
        },
        {
          id: "3",
          type: "donut",
          title: "Energy Consumption",
        },
        {
          id: "4",
          type: "area",
          title: "CO2 Emissions",
        },
      ],
      addChart: (chart) =>
        set((state) => ({
          charts: [...state.charts, chart],
        })),
      removeChart: (id) =>
        set((state) => ({
          charts: state.charts.filter((chart) => chart.id !== id),
        })),
      clearCharts: () => set({ charts: [] }),
    }),
    {
      name: "chart-storage",
    },
  ),
)
