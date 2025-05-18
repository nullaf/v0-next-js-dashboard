import { Skeleton } from "@/components/ui/skeleton"

export function DataTableSkeleton() {
  return (
    <div>
      <div className="flex justify-end mb-4">
        <Skeleton className="h-9 w-24" />
      </div>
      <div className="rounded-md border">
        <div className="h-10 border-b bg-muted/50 px-4">
          <div className="flex h-full items-center gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-24" />
            ))}
          </div>
        </div>
        <div>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex h-16 items-center gap-4 border-b px-4 last:border-0">
              {Array.from({ length: 5 }).map((_, j) => (
                <Skeleton key={j} className="h-4 w-24" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
