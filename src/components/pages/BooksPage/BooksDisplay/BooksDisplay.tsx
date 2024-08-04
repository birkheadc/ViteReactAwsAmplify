import api from "@/api";
import { Book } from "@/types/book/book";
import { useQuery } from "@tanstack/react-query";

type BooksDisplayProps = {};

function BooksDisplay(): JSX.Element | null {
  const query = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: api.books.fetchAll,
  });

  return (
    <div>
      <span>BooksDisplay</span>
    </div>
  );
}

export default BooksDisplay;
