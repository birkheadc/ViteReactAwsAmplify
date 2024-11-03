import { Book } from "../../../../../types/book/book";
import { TableRow, TableCell } from "../../../../ui/table";
import DeleteBookButton from "./DeleteBookButton/DeleteBookButton";
import EditBookButton from "./EditBookButton/EditBookButton";

type BookTableRowProps = {
  book: Book;
};

function BookTableRow({ book }: BookTableRowProps): JSX.Element | null {
  return (
    <TableRow>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.pages}</TableCell>
      <TableCell className="flex gap-2 justify-end">
        <EditBookButton book={book} />
        <DeleteBookButton book={book} />
      </TableCell>
    </TableRow>
  );
}

export default BookTableRow;
