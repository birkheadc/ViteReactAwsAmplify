import BooksDisplay from "@/components/pages/BooksPage/BooksDisplay/BooksDisplay";

function BooksPage(): JSX.Element | null {
  return (
    <div>
      <h1>Books Page</h1>
      <p>Welcome to the Books Page</p>
      <BooksDisplay />
    </div>
  );
}

export default BooksPage;
