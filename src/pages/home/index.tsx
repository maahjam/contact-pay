import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "./api";
import { Contact } from "./components/contact";
import Pagination from "../../components/pagination";
import { useEffect, useState } from "react";
import { PaginatedContactsList } from "./types";
import Search from "../../components/search";
import Loading from "../../components/loading";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => fetchContacts({ skip: currentPage, query: query }),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleOnSearch = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    refetch();
  }, [query, currentPage]);

  const handleClearSearch = () => {
    setQuery("");
  };

  return (
    <>
      <Search
        query={query}
        handleOnSearch={handleOnSearch}
        handleClearSearch={handleClearSearch}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data?.items.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
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
