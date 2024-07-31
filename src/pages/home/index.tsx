import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "./api";
import { Contact } from "./components/contact";
import Pagination from "@components/pagination";
import { useEffect, useState } from "react";
import { PaginatedContactsList } from "./types";
import Search from "@components/search";
import Loading from "@components/loading";
import NotFound from "@components/notFound";
import ErrorMessage from "@components/error";
import useStore from "./store";
import { ContactType } from "@type/contact";
import useDebounce from "@hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
import { RecentVisited } from "./components/recentVisited";

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_QUERY_VALUE = "";

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPage = parseInt(
    searchParams.get("page") || DEFAULT_PAGE_NUMBER.toString(),
    10,
  );
  const initialQuery = searchParams.get("query") || DEFAULT_QUERY_VALUE;

  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [query, setQuery] = useState<string>(initialQuery);

  const { setContacts, contacts, recentVisited, recentVisitedQueue } = useStore(
    (state) => state,
  );

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => fetchContacts({ skip: currentPage, query: query }),
  });

  const debouncedValue = useDebounce(query, 500);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
  };

  const handleOnSearch = (newQuery: string) => {
    setQuery(newQuery);
    setCurrentPage(DEFAULT_PAGE_NUMBER);
    setSearchParams({ page: DEFAULT_PAGE_NUMBER.toString(), query: newQuery });
  };

  const handleClearSearch = () => {
    setQuery(DEFAULT_QUERY_VALUE);
    setCurrentPage(DEFAULT_PAGE_NUMBER);
    setSearchParams({ page: DEFAULT_PAGE_NUMBER.toString() });
  };

  useEffect(() => {
    if (data?.items) setContacts(data?.items as ContactType[]);
  }, [data?.items]);

  useEffect(() => {
    refetch();
  }, [currentPage, debouncedValue]);

  const hasContact = contacts.length;
  const hasVisitedContacts = recentVisitedQueue.length > 0;

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage errorMessage={error.message} />;

  return (
    <>
      <Search
        query={query}
        handleOnSearch={handleOnSearch}
        handleClearSearch={handleClearSearch}
      />

      {hasVisitedContacts && (
        <div className="mx-auto p-4 mb-5">
          <p className="text-zinc-600 font-bold text-xl my-4">
            Recent visited contacts
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recentVisitedQueue.map((contact) => (
              <RecentVisited key={contact.id} contact={contact} />
            ))}
          </div>
          <div className="border mx-4"></div>
        </div>
      )}

      {hasContact ? (
        <div className="mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {contacts
              .filter((item) => !(item.id in recentVisited))
              .map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
      <Pagination
        totalPages={(data as PaginatedContactsList)?.pager.totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Home;
