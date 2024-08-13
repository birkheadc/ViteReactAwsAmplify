import { AuthToken } from "@/types/authToken/authToken";
import { Book } from "@/types/book/book";
import { Paginated } from "@/types/paginated/paginated";

export type Api = {
  books: {
    getPage: (paginationToken?: string) => Promise<Paginated<Book>>;
  };
  auth: {
    register: (emailAddress: string, password: string) => Promise<void>;
    login: (emailAddress: string, password: string) => Promise<AuthToken>;
  };
};
