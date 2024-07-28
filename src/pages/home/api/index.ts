import axiosInstance from "../../../services/axios";
import { PaginatedContactsList, QueryParams } from "../types";
import { getContactListTransformer } from "../transformers";

export const fetchContacts = async (
  queryParams: QueryParams,
): Promise<PaginatedContactsList> => {
  const { query, limit = 10, skip } = queryParams;

  console.log({ query });

  let firstName = "";
  let lastName = "";
  let phone = "";

  if (query) {
    if (/^\d+$/.test(query)) {
      // Query is a number, treat it as phone
      phone = query;
    } else if (query.includes(" ")) {
      // Query contains space, split into first name and last name
      const [first, ...rest] = query.split(" ");
      firstName = first;
      lastName = rest.join(" ");
    } else {
      // Query is a single word, treat it as first name
      firstName = query;
    }
  }

  const whereClause = {
    first_name: { contains: firstName },
    last_name: { contains: lastName },
    phone: { contains: phone },
  };

  const params = new URLSearchParams({
    where: JSON.stringify(whereClause),
    sort: "createdAt DESC",
    limit: limit.toString(),
    skip: skip.toString(),
  });

  const url = `passenger/?${params.toString()}`;

  try {
    const response = await axiosInstance.get(url);
    return getContactListTransformer(response.data);
  } catch (error) {
    throw new Error("Failed to fetch contacts");
  }
};
