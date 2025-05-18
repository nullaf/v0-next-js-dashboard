"use client"

import { useState } from "react"
import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useChartStore } from "@/lib/stores/chart-store"
import type { ChartType } from "@/lib/types"

export function AddChartDialog() {
  const [open, setOpen] = useState(false)
  const [chartType, setChartType] = useState<ChartType>("line")
  const [title, setTitle] = useState("")
  const { toast } = useToast()
  const addChart = useChartStore((state) => state.addChart)

  const handleAddChart = () => {
    if (!title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a chart title",
        variant: "destructive",
      })
      return
    }

    addChart({
      id: Date.now().toString(),
      type: chartType,
      title,
    })

    toast({
      title: "Success",
      description: "Chart added successfully",
    })

    setOpen(false)
    setTitle("")
    setChartType("line")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Plot</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Chart</DialogTitle>
          <DialogDescription>Create a new chart to visualize World Bank data</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="chart-type" className="text-right">
              Chart Type
            </Label>
            <Select value={chartType} onValueChange={(value) => setChartType(value as ChartType)}>
              <SelectTrigger className="col-span-3" id="chart-type">
                <SelectValue placeholder="Select chart type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="line">
                  <div className="flex items-center gap-2">
                    <LineChart className="h-4 w-4" />
                    <span>Line Chart</span>
                  </div>
                </SelectItem>
                <SelectItem value="bar">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    <span>Bar Chart</span>
                  </div>
                </SelectItem>
                <SelectItem value="donut">
                  <div className="flex items-center gap-2">
                    <PieChart className="h-4 w-4" />
                    <span>Donut Chart</span>
                  </div>
                </SelectItem>
                <SelectItem value="area">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Area Chart</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddChart}>
            Add Chart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
