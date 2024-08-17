import { AccessToken } from "../accessToken/accessToken";
import { Book } from "../book/book";
import { Paginated } from "../paginated/paginated";

export type Api = {
  books: {
    getPage: (paginationToken?: string) => Promise<Paginated<Book>>;
  };
  auth: {
    register: (emailAddress: string, password: string) => Promise<void>;
    login: (emailAddress: string, password: string) => Promise<AccessToken>;
  };
};
