import { ApiError } from "../apiResult/apiError";

export class Book {
  id: string = "";
  title: string = "";
  author: string = "";
  pages: number = 0;

  static fromJson(json: unknown): Book {
    if (json == null) throw ApiError.UNEXPECTED_FORMAT;
    if (typeof json !== "object") throw ApiError.UNEXPECTED_FORMAT;

    if (!("id" in json) || typeof json.id !== "string")
      throw ApiError.UNEXPECTED_FORMAT;

    if (!("title" in json) || typeof json.title !== "string")
      throw ApiError.UNEXPECTED_FORMAT;

    if (!("author" in json) || typeof json.author !== "string")
      throw ApiError.UNEXPECTED_FORMAT;

    if (!("pages" in json) || typeof json.pages !== "number")
      throw ApiError.UNEXPECTED_FORMAT;

    const book = new Book();
    book.id = json.id;
    book.title = json.title;
    book.author = json.author;
    book.pages = json.pages;
    return book;
  }
}
