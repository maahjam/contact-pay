export interface ContactType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  note: string;
  telegram: string;
  avatar: string;
  company: string;
  address: string;
  createdAt: number;
  updatedAt: number;
}

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
