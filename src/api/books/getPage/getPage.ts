import config from "@/config";
import { Book } from "@/types/book/book";
import { Paginated } from "@/types/paginated/paginated";

const getPage = async (paginationToken?: string): Promise<Paginated<Book>> => {
  const url = `${config.api.API_URL}/books/page${paginationToken ? `/${paginationToken}` : ""}`;

  const response = await fetch(url, {
    method: "GET",
  });
  return response.json();
};

export default getPage;
