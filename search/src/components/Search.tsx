import { useContext, useState } from "react";
import {
  ApplicationContext,
  ISearchResult,
} from "../context/application.context";
import { useSearch } from "../hooks/queries/search";
import SearchResult from "./SearchResult";

function Search() {
  const applicationContext = useContext(ApplicationContext);
  const [data, setData] = applicationContext;
  const [query, setQuery] = useState<string | null>(null);
  const { isLoading, error, data: searchResults } = useSearch(query!);

  if (!isLoading && !error && searchResults) {
    setData(searchResults);
  }

  return (
    <div className="h'auto flex flex-col">
      <input
        className="rounded-lg h-10 w-96 px-3 border border-cyan-900"
        onChange={async (e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search..."
      />
      {!isLoading && searchResults?.length !== 0 && (
        <div className="bg-white w-96 mt-3 rounded-lg px-4 border border-cyan-900">
          {data.map((item: ISearchResult, index: number) => (
            <SearchResult
              last_item={index === data.length - 1}
              key={index}
              {...item}
            />
          ))}
        </div>
      )}
      {!isLoading && searchResults?.length === 0 && query !== "" && (
        <div className="bg-white w-96 mt-3 rounded-lg px-4 border border-cyan-900">
          <div className="text-center text-gray-700">No results found</div>
        </div>
      )}
      {isLoading && (
        <div className="bg-white w-96 mt-3 rounded-lg px-4 border border-cyan-900">
          <div className="text-center text-gray-700">Loading...</div>
        </div>
      )}
    </div>
  );
}

export default Search;
