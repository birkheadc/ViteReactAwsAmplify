import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

type TableRowSkeletonProps = {
  numCells: number;
};

function TableRowSkeleton({
  numCells,
}: TableRowSkeletonProps): JSX.Element | null {
  return (
    <TableRow>
      {Array.from({ length: numCells }).map((_, i) => (
        <TableCell key={i}>
          <Skeleton className="w-full h-5" />
        </TableCell>
      ))}
    </TableRow>
  );
}

export default TableRowSkeleton;
