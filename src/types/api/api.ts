import { ExampleFormSchema } from "../../components/pages/FormPage/ExampleForm/ExampleForm.schema";
import { UpdateProfileFormSchema } from "../../components/pages/ProfilePage/UpdateProfileForm/UpdateProfileForm.schema";
import { Book } from "../book/book";
import { Paginated } from "../paginated/paginated";
import { User } from "../user/user";

export type BooksApi = {
  getPage: (paginationToken?: string) => Promise<Paginated<Book>>;
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
