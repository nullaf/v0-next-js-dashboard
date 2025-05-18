export type ChartType = "line" | "bar" | "donut" | "area"

export interface ChartConfig {
  id: string
  type: ChartType
  title: string
}

export interface WorldBankIndicator {
  indicator: {
    id: string
    value: string
  }
  country: {
    id: string
    value: string
  }
  countryiso3code: string
  date: string
  value: string | number | null
  unit: string
  obs_status: string
  decimal: number
}

export interface WorldBankResponse {
  [0]: {
    page: number
    pages: number
    per_page: number
    total: number
  }
  [1]: WorldBankIndicator[]
}
