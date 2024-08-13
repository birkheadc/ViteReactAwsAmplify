import { Api } from "../../src/types/api/api";
import books from "./books";
import auth from "./auth";

const mockApi: Api = {
  books,
  auth,
};

export default mockApi;
