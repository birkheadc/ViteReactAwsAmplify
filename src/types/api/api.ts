import { BookFormSchema } from "../../components/pages/BooksPage/BookForm/BookForm.schema";
import { ExampleFormSchema } from "../../components/pages/FormPage/ExampleForm/ExampleForm.schema";
import { UpdateProfileFormSchema } from "../../components/pages/ProfilePage/UpdateProfileForm/UpdateProfileForm.schema";
import { Book } from "../book/book";
import { Paginated } from "../paginated/paginated";
import { User } from "../user/user";

export type BooksApi = {
  getPage: (paginationToken?: string) => Promise<Paginated<Book>>;
  create: (data: BookFormSchema) => Promise<void>;
  update: (book: BookFormSchema) => Promise<void>;
  deleteBook: (bookId: string) => Promise<void>;
};

export type AuthApi = {
  login: (code: string | undefined) => Promise<User>;
  logout: () => Promise<void>;
};

export type ExampleApi = {
  submit: (data: ExampleFormSchema) => Promise<void>;
};

export type UsersApi = {
  getMe: () => Promise<User>;
  updateProfile: (data: UpdateProfileFormSchema) => Promise<void>;
};

export type Api = {
  books: BooksApi;
  auth: AuthApi;
  example: ExampleApi;
  users: UsersApi;
};
