import books from "@/api/books";
import auth from "@/api/auth";
import { Api } from "@/types/api/api";

const api: Api = {
  books,
  auth,
};

export default api;
