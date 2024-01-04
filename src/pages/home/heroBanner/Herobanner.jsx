import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.scss";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

const Herobanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchqueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} alt="" />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="herobannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies,Tv shows and people to discover, Explore now,
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search here movie or Tv shows ...."
              onKeyUp={searchqueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Herobanner;
