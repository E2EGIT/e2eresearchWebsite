"use client";
import { useEffect, useState } from "react";
import SearchIcon from "../../../public/homePage/icons/search_icon.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/utils/useDebounce";

const Search = (props: any) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get("query");
  const [inputQuery, setInputQuery] = useState<any>(query);
  const debouncedQuery = useDebounce(inputQuery, 700);

  useEffect(() => {
    if (debouncedQuery?.trim()) {
      router.push(
        `/search?query=${encodeURIComponent(debouncedQuery?.trim())}`
      );
    } else {
      if (inputQuery != null) {
        router.push(`/`);
      }
    }
  }, [debouncedQuery, router]);

  return (
    <div className="search-container">
      {/* <form> */}
      <input
        className="search expandright"
        id="searchright"
        type="text"
        // name="q"
        placeholder="Search"
        value={inputQuery || ""}
        onChange={(e) => setInputQuery(e.target.value)}
      />
      <label className="search-btn" htmlFor="searchright">
        <SearchIcon className="search-svg" />
      </label>
      {/* </form> */}
    </div>
  );
};

export default Search;
