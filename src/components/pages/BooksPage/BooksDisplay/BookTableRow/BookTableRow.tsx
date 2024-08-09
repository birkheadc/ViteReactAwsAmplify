import { TableRow, TableCell } from "@/components/ui/table";
import { Book } from "@/types/book/book";

type BookTableRowProps = {
  book: Book;
};

function BookTableRow({ book }: BookTableRowProps): JSX.Element | null {
  return (
    <TableRow>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.pages}</TableCell>
    </TableRow>
  );
}

export default BookTableRow;
