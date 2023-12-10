import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const videoTitle = searchParams.get("query");
  return <div className="mt-28">{videoTitle}</div>;
};

export default SearchPage;
