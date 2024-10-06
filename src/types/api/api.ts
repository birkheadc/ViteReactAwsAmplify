import { ExampleFormSchema } from "../../components/pages/FormPage/ExampleForm/ExampleForm.schema";
import { RegisterFormSchema } from "../../components/pages/RegisterPage/RegisterForm/RegisterForm.schema";
import { Book } from "../book/book";
import { CognitoTokens } from "../cognito/cognitoTokens";
import { Paginated } from "../paginated/paginated";
import { User } from "../user/user";

export type BooksApi = {
  getPage: (paginationToken?: string) => Promise<Paginated<Book>>;
};

export type AuthApi = {
  register: (data: RegisterFormSchema) => Promise<void>;
  login: (code: string | undefined) => Promise<CognitoTokens>;
};

export type ExampleApi = {
  submit: (data: ExampleFormSchema) => Promise<void>;
};

export type UsersApi = {
  getMe: (accessToken: string | undefined) => Promise<User>;
};

export type Api = {
  books: BooksApi;
  auth: AuthApi;
  example: ExampleApi;
  users: UsersApi;
};
