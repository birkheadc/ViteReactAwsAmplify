import { Book } from "../../../types/book/book";
import { Paginated } from "../../../types/paginated/paginated";
import utils from "../../../utils";

const getPage = async (paginationToken?: string): Promise<Paginated<Book>> => {
  const result = await utils.apiFetch({
    path: `books/page${paginationToken ? `/${paginationToken}` : ""}`,
    init: {
      method: "GET",
    },
    builder: async (json) => Paginated.fromJson(json, Book.fromJson),
  });

  return result;
};

export default getPage;
