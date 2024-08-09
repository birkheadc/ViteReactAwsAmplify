export type Paginated<T> = {
  values: T[];
  paginationToken?: string;
};
