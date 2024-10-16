import { Paginated } from "@/types/paginated/paginated";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React from "react";

export type PaginatedQueryParams<T> = {
  queryKey: string;
  queryFn: (paginationToken?: string | undefined) => Promise<Paginated<T>>;
};

export type PaginatedQueryReturn<T> = {
  data: T[];
  isLoading: boolean;
  isFetched: boolean;
  isError: boolean;
  controls: {
    currentPage: number;
    goToFirstPage: () => void;
    goToPrevPage: () => void;
    goToNextPage: () => void;
    canGoToPrev: boolean;
    canGoToNext: boolean;
  };
};

export function usePaginatedQuery<T>({
  queryKey,
  queryFn,
}: PaginatedQueryParams<T>): PaginatedQueryReturn<T> {
  const [paginationTokens, setPaginationTokens] = React.useState<string[]>([]);

  React.useEffect(() => {
    console.log(paginationTokens);
  }, [paginationTokens]);

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { data, isError, isFetching, isFetched, isLoading } = useQuery<
    Paginated<T>
  >({
    queryKey: [queryKey, paginationTokens.at(-1)],
    queryFn: () => queryFn(paginationTokens.at(-1)),
    placeholderData: keepPreviousData,
  });

  const goToFirstPage = () => {
    if (isFetching) return;
    setPaginationTokens([]);
  };

  const goToPrevPage = () => {
    if (isFetching) return;
    setPaginationTokens((tokens) => {
      if (tokens.length < 1) {
        return tokens;
      }
      const newTokens = [...tokens];
      newTokens.pop();
      return newTokens;
    });
  };

  const goToNextPage = () => {
    if (isFetching) return;
    setPaginationTokens((tokens) => {
      if (!data?.paginationToken) {
        return tokens;
      }
      const newTokens = [...tokens];
      newTokens.push(data.paginationToken);
      return newTokens;
    });
  };

  React.useEffect(
    function setCurrentPageWhenDoneFetching() {
      if (!isFetched) return;

      setCurrentPage(paginationTokens.length + 1);
    },
    [isFetched, paginationTokens],
  );

  return {
    data: data?.values ?? [],
    isLoading,
    isError,
    isFetched,
    controls: {
      currentPage,
      goToFirstPage,
      goToPrevPage,
      goToNextPage,
      canGoToPrev: paginationTokens.length > 0,
      canGoToNext: data?.paginationToken != null,
    },
  };
}
