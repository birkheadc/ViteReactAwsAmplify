import { Book } from "@/types/book/book";
import { Paginated } from "@/types/paginated/paginated";

export type Api = {
  books: {
    getPage: (paginationToken?: string) => Promise<Paginated<Book>>;
  };
};
