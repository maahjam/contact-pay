import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "./api";
import { Contact } from "./components/contact";
import Pagination from "../../components/pagination";
import { useEffect, useState } from "react";
import { PaginatedContactsList } from "./types";
import Search from "../../components/search";
import Loading from "../../components/loading";
import NotFound from "../../components/notFound";
import ErrorMessage from "../../components/error";
import useStore from "./store";
import { ContactType } from "../../types/contact";
import useDebounce from "../../hooks/useDebounce";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const { setContacts, contacts, frequentlyVisited } = useStore(
    (state) => state,
  );

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => fetchContacts({ skip: currentPage, query: query }),
  });
  
  const hasContacts = data?.items.length;
  const debouncedRefetch = useDebounce(refetch, 500);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleOnSearch = (query: string) => setQuery(query);

  const handleClearSearch = () => setQuery("");

  useEffect(() => {
    if (data?.items) setContacts(data?.items as ContactType[]);
  }, [data?.items]);

  useEffect(() => {
    debouncedRefetch();
  }, [query, currentPage]);
  

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage errorMessage={error.message} />;

  return (
    <>
      <Search
        query={query}
        handleOnSearch={handleOnSearch}
        handleClearSearch={handleClearSearch}
      />
      {hasContacts ? (
        <div className="mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {contacts.map((contact) => (
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
