import BooksDisplay from "./BooksDisplay/BooksDisplay";
import CreateBookWidget from "./CreateBookWidget/CreateBookWidget";

function BooksPage(): JSX.Element | null {
  return (
    <div>
      <h1>Books Page</h1>
      <p>Welcome to the Books Page</p>
      <CreateBookWidget />
      <BooksDisplay />
    </div>
  );
}

export default BooksPage;
