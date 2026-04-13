import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  
  useReactTable,
} from "@tanstack/react-table";
import { ISubscription } from "../_utils/types";
const Table = ({
  data,
  columns,
}: {
  data: ISubscription[];
  columns:ColumnDef<ISubscription, any>[];
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table className="w-full border border-gray-400">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-gray-100 ">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border-r px-0.5 py-1">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="border-b border-gray-100">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-r px-0.5 py-1">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
