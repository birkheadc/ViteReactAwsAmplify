import { Api } from "../types/api/api";
import auth from "./auth";
import books from "./books";
import example from "./example";
import users from "./users";

const api: Api = {
  books,
  auth,
  example,
  users,
};

export default api;
