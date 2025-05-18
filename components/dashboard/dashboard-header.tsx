import { AddChartDialog } from "@/components/dashboard/add-chart-dialog"

interface DashboardHeaderProps {
  heading: string
  description?: string
}

export function DashboardHeader({ heading, description }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <AddChartDialog />
    </div>
  )
}
