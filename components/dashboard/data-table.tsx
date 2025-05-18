'use client';

import { useState } from 'react';
import { CSVLink } from 'react-csv';
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, Download } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useWorldBankData } from '@/lib/hooks/use-world-bank-data';
import type { WorldBankIndicator } from '@/lib/types';

export function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { data, isLoading, error } = useWorldBankData();

  const dataToExport = data?.map((item) => ({
    ...item,
    indicator: item.indicator.value,
    country: item.country.value,
    value: item.value !== null ? String(item.value) : null,
  }));

  const columns: ColumnDef<WorldBankIndicator>[] = [
    {
      accessorKey: 'countryiso3code',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Country ISO
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: 'country.value',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Country
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: 'date',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: 'value',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Value
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const value = row.getValue('value');
        const numValue =
          typeof value === 'number'
            ? value
            : Number.parseFloat(value as string);
        return <div>{isNaN(numValue) ? 'N/A' : numValue.toFixed(2)}</div>;
      },
    },
    {
      accessorKey: 'indicator.value',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Indicator
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
  ];

  const table = useReactTable({
    data: data || [],
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button variant="outline" size="sm">
          <CSVLink
            data={dataToExport || []}
            filename="world-bank-data.csv"
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </CSVLink>
        </Button>
      </div>
      <div className="rounded-md border overflow-auto max-w-[90vw] max-h-[50rem] mx-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
