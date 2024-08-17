import React from "react";
import { ApiProviderContext } from "../../../../contexts/ApiContext/ApiContext";
import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { usePaginatedQuery } from "../../../../hooks/usePaginatedQuery/usePaginatedQuery";
import NoMoreData from "../../../common/NoMoreData/NoMoreData";
import PaginatedControls from "../../../common/PaginatedControls/PaginatedControls";
import TableRowSkeleton from "../../../skeletons/TableRowSkeleton/TableRowSkeleton";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  Table,
} from "../../../ui/table";
import BookTableRow from "./BookTableRow/BookTableRow";
import { Book } from "../../../../types/book/book";

function BooksDisplay(): JSX.Element | null {
  const { t } = useKeyedTranslation("components.pages.BooksPage.BooksDisplay");

  const { api } = React.useContext(ApiProviderContext);

  const { data, isFetched, controls } = usePaginatedQuery<Book>({
    queryKey: "books",
    queryFn: api.books.getPage,
  });

  return (
    <div className="flex flex-col gap-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("title")}</TableHead>
            <TableHead>{t("author")}</TableHead>
            <TableHead>{t("pages")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isFetched
            ? data.map((book) => <BookTableRow key={book.id} book={book} />)
            : Array.from({ length: PAGE_LENGTH }).map((_, i) => (
                <TableRowSkeleton numCells={3} key={i} />
              ))}
        </TableBody>
      </Table>
      <NoMoreData data={data} isFetched={isFetched} pageLength={PAGE_LENGTH} />
      <PaginatedControls {...controls} />
    </div>
  );
}

const PAGE_LENGTH = 10;

export default BooksDisplay;
