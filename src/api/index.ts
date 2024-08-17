import { Api } from "../types/api/api";
import auth from "./auth";
import books from "./books";

const api: Api = {
  books,
  auth,
};

export default api;
