import FooterLink from "@/Component/Footer";
import CopyFooter from "@/Component/Footer/copyFooter";
import Header from "@/Component/Header";
import React, { FC } from "react";
import "./SearchList.scss";

import searchList from "../../mock/siteData.json";
import SearchLists from "@/Component/SearchList";
const SearchList: FC<any> = ({ searchParams }) => {
  const query: string = searchParams?.query || "";
  const searchListData: any[] = searchList || [];

  return (
    <>
      <Header />
      <section className="light-gray-bg sec-margin-t pb-x  padding-left-x ">
        <div
          className="search-list-container container-fluid
    "
        >
          <SearchLists searchListData={searchListData} searchQuery={query} />
        </div>
      </section>
      <FooterLink />
      <CopyFooter />
    </>
  );
};

export default SearchList;
