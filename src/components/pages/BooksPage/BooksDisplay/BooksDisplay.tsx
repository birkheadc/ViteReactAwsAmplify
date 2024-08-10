import PaginatedControls from "@/components/common/PaginatedControls/PaginatedControls";
import BookTableRow from "@/components/pages/BooksPage/BooksDisplay/BookTableRow/BookTableRow";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useKeyedTranslation } from "@/hooks/useKeyedTranslation/useKeyedTranslation";
import { usePaginatedQuery } from "@/hooks/usePaginatedQuery/usePaginatedQuery";
import { Book } from "@/types/book/book";
import { Paginated } from "@/types/paginated/paginated";

type BooksDisplayProps = {
  queryFn: (paginationToken?: string) => Promise<Paginated<Book>>;
};

function BooksDisplay({ queryFn }: BooksDisplayProps): JSX.Element | null {
  const { t } = useKeyedTranslation("components.pages.BooksPage.BooksDisplay");

  const { data, controls } = usePaginatedQuery<Book>({
    queryKey: "books",
    queryFn,
  });

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("title")}</TableHead>
            <TableHead>{t("author")}</TableHead>
            <TableHead>{t("pages")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((book) => (
            <BookTableRow key={book.id} book={book} />
          ))}
        </TableBody>
      </Table>
      <PaginatedControls {...controls} />
    </div>
  );
}

export default BooksDisplay;
