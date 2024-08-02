import { Book } from "@/types/book/book";

type BooksDisplayProps = {
  books: Book[];
};

function BooksDisplay({ books }: BooksDisplayProps): JSX.Element | null {
  return (
    <div>
      <span>BooksDisplay</span>
    </div>
  );
}

export default BooksDisplay;
