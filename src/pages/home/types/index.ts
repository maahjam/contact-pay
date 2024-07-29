import { ContactType } from "../../../types/contact";
export interface PaginatedContactsList {
  items: ContactType[];
  pager: {
    limit: number;
    skip: number;
    totalPages: number;
  };
}

export interface QueryParams {
  query?: string;
  limit?: number;
  skip: number;
}
