"use client";
import Link from "next/link";
import React, { useState } from "react";
import RightArrow from "../../../public/homePage/icons/right_arrow.svg";

const SearchLists = ({ searchListData, searchQuery }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const siteData = filterList(searchListData, searchQuery);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(siteData?.length / itemsPerPage);
  const pageNumbers = Array?.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <>
      <div className="search-query">
        <div className="heading heading-sec res-head">
          <h2> Search Result </h2>
          <div className="horizontal-row"></div>
        </div>
        {/* Search Result  */}
        for <b>"{searchQuery}"</b> — {siteData?.length} articles.
      </div>
      {siteData?.length > 0 ? (
        siteData.slice(startIndex, endIndex).map((item: any) => (
          <div className="search-list" key={item?.url}>
            <div className="search-list-title">
              <Link
                href={item?.url}
                className="search-link search-link-hover hover-line-effect"
              >
                {item?.title}
              </Link>
            </div>
            <div className="search-list-link">
              <Link
                href={item?.url}
                className="search-link hover-line-effect search-link-hover"
              >
                {process.env.NEXT_PUBLIC_URL_SEARCH}
                {item?.url}
              </Link>
            </div>
            <div className="search-description">
              {item?.description} […]
              {"    "}
              <Link
                href={item?.url}
                className="read-more right-arrow-hover hover-line-effect"
              >
                READ MORE <RightArrow />
              </Link>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <>
          <div className="no-data-found-title">No results Found</div>
          <div className="no-data-found-description">
            {" "}
            It seems we can’t find what you’re looking for. plesae try again
            with a different search .
          </div>
        </>
      )}
      {siteData?.length > 0 ? (
        <div className="pagination-con">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`action-btn back-btn ${
              currentPage === 1 ? "hide-button" : ""
            }`}
          >
            Back
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`action-btn number-btn ${
                number === currentPage ? "active-btn" : ""
              }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`action-btn next-btn ${
              currentPage == totalPages ? "hide-button" : ""
            }`}
          >
            Next
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchLists;
const filterList = (listData: any, searchQuery: string) => {
  const filteredData = listData?.filter((item: any) =>
    // item?.title?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
    item?.description?.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  return filteredData;
};
