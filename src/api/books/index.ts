import { BooksApi } from "../../types/api/api";
import getPage from "./getPage/getPage";
import create from "./create/create";
import update from "./update/update";
import deleteBook from "./deleteBook/deleteBook";

const books: BooksApi = {
  getPage,
  create,
  update,
  deleteBook,
};

export default books;
