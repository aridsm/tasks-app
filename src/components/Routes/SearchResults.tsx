import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import useSearchQuery from "../hooks/useSearchQuery";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [currQueryParam, setCurrQueryParam] = useState<string>("");

  useEffect(() => {
    const query = searchParams.get("q");
    if (!query) {
      // se "q" for igual a '' ou "q" não existir
      navigate("/");
    } else {
      setCurrQueryParam(query);
    }
  }, [navigate, searchParams]);

  const matchedTasks = useSearchQuery(currQueryParam);

  const title = `Results for "${currQueryParam}"`;

  useDescriptionTitle(title, title);

  return <LayoutRoutes title={title} tasks={matchedTasks}></LayoutRoutes>;
};

export default SearchResults;
