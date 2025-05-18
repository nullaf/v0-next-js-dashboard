"use client"

import { useQuery } from "@tanstack/react-query"
import { z } from "zod"
import type { WorldBankIndicator } from "@/lib/types"

// GDP per capita indicator
const INDICATOR = "NY.GDP.PCAP.CD"

// Zod schema for validation
const worldBankResponseSchema = z.tuple([
  z.object({
    page: z.number(),
    pages: z.number(),
    per_page: z.number(),
    total: z.number(),
  }),
  z.array(
    z.object({
      indicator: z.object({
        id: z.string(),
        value: z.string(),
      }),
      country: z.object({
        id: z.string(),
        value: z.string(),
      }),
      countryiso3code: z.string(),
      date: z.string(),
      value: z.union([z.number(), z.string(), z.null()]),
      unit: z.string(),
      obs_status: z.string(),
      decimal: z.number(),
    }),
  ),
])

async function fetchWorldBankData(): Promise<WorldBankIndicator[]> {
  // Fetch GDP per capita for top 20 countries
  const response = await fetch(
    `https://api.worldbank.org/v2/countries/USA;CHN;JPN;DEU;GBR;IND;FRA;ITA;CAN;KOR;RUS;BRA;AUS;ESP;MEX;IDN;TUR;NLD;SAU;CHE/indicators/${INDICATOR}?format=json&per_page=100&date=2022`,
  )

  if (!response.ok) {
    throw new Error("Failed to fetch World Bank data")
  }

  const data = await response.json()

  // Validate the response
  const validatedData = worldBankResponseSchema.parse(data)

  // Convert the data to ensure consistent types
  return validatedData[1].map((item) => ({
    ...item,
    // Ensure value is always a string or null for consistent handling
    value: item.value !== null ? String(item.value) : null,
  }))
}

export function useWorldBankData() {
  return useQuery<WorldBankIndicator[], Error>({
    queryKey: ["worldBankData"],
    queryFn: fetchWorldBankData,
  })
}
