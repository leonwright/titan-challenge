import { useContext, useState } from "react";
import {
  ApplicationContext,
  ISearchResult,
} from "../context/application.context";
import SearchResult from "./SearchResult";

function Search() {
  const applicationContext = useContext(ApplicationContext);
  const [data, setData] = applicationContext;
  const [query, setQuery] = useState<string | null>(null);

  // function to add a new search result
  const addSearchResult = (searchResult: ISearchResult) => {
    setData((prevData: ISearchResult[]) => {
      return [...prevData, searchResult];
    });
  };

  return (
    <>
      <input
        className="rounded-lg h-10 w-96 px-3"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className="bg-white w-96 mt-3 rounded-lg px-4">
        {data.map((item: ISearchResult, index: number) => (
          <SearchResult
            last_item={index === data.length - 1}
            key={index}
            {...item}
          />
        ))}
      </div>
      {/* button to add search result */}
      <button
        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
        onClick={() => {
          addSearchResult({
            username: "test",
            message: "test",
            post_date: "test",
          });
        }}
      >
        Add
      </button>
    </>
  );
}

export default Search;
