import config from "@/config";

export default async function getPage(paginationToken?: string) {
  const url = `${config.api.API_URL}/books/page${paginationToken ? `/${paginationToken}` : ""}`;

  const response = await fetch(url, {
    method: "GET",
  });
  return response.json();
}
