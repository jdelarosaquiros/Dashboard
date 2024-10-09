import * as React from 'react';
import { ListFilter } from 'lucide-react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import type {
  ColumnDef,
  SortingState,
  VisibilityState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '~/components/ui';
import useLocalize from '~/hooks/useLocalize';

interface ResultsDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const getColorBasedOnValue = (value: number) => {
  if (value > 0.75) return 'text-green-500';
  if (value > 0.5) return 'text-yellow-500';
  return 'text-red-500';
};

export default function ResultsDataTable<TData, TValue>({ columns, data }: ResultsDataTableProps<TData, TValue>) {
  const localize = useLocalize();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = React.useState<string>(''); // Added state for global filtering


  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter, // Set global filter handler
    globalFilterFn: (row, columnId, filterValue) => {
      // Apply filter logic for all columns
      return row.getValue(columnId)
        ?.toString()
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    },
  });

  return (
    <>
      <div className="flex items-center gap-4 py-4">
        <Input
          placeholder={localize('com_date_filter')}
          value={globalFilter} // Apply the global filter value
          onChange={(event) => setGlobalFilter(event.target.value)} // Set the global filter based on input
          className="max-w-sm dark:border-pink-500"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <ListFilter className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          {/* Filter Menu */}
          <DropdownMenuContent
            align="end"
            className="z-[1001] dark:border-pink-700 dark:bg-gray-850"
          >
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="cursor-pointer capitalize dark:text-white dark:hover:bg-pink-700"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative max-h-[25rem] min-h-0 overflow-y-auto rounded-md border border-black/10 pb-4 dark:border-pink-600 sm:min-h-[28rem]">
        <Table className="w-full min-w-[600px] border-separate border-spacing-0">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="align-start sticky top-0 rounded-t border-b border-black/10 bg-white px-2 py-1 text-left font-medium text-gray-700 dark:border-pink-600 dark:bg-gray-700 dark:text-gray-20 sm:px-4 sm:py-2"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
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
                  className="border-b border-black/10 text-left text-gray-600 dark:border-pink-600 dark:text-gray-20 [tr:last-child_&]:border-b-0"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`align-start overflow-x-auto px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm [tr[data-disabled=true]_&]:opacity-50 ${
                        typeof cell.getValue() === 'number' ? getColorBasedOnValue(cell.getValue() as number) : ''
                      }`}
                    >
                      {typeof cell.getValue() === 'number' 
                        ? (cell.getValue() as number).toFixed(2) 
                        : flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-gray-700 dark:text-gray-300">
                  {localize('com_files_no_results')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="ml-4 mr-4 mt-4 flex h-auto items-center justify-end space-x-2 py-4 sm:ml-0 sm:mr-0 sm:h-0">
        <Button
          className="select-none dark:border-pink-500 dark:hover:bg-pink-600"
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {localize('com_ui_prev')}
        </Button>
        <Button
          className="select-none dark:border-pink-500 dark:hover:bg-pink-600"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {localize('com_ui_next')}
        </Button>
      </div>
    </>
  );
}
