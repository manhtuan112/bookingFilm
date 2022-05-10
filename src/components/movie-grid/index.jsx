import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./movie-grid.scss";
import tmdbApi, { category, movieType, tvType } from "./../../api/tmdbApi";
import MovieCard from "./../movie-card/index";
import { OutlineButton } from "../button";

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let reponse = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            reponse = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            reponse = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        reponse = tmdbApi.search(props.category, { params });
      }
      setItems(reponse.results);
      setTotalPage(reponse.total_pages);
    };

    getList();
  }, [props.category, keyword]);

  const viewMore = () => {
    console.log("view more");
  };
  return (
    <>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard category={props.category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage && (
        <div className="movie-grid__viewmore">
          <OutlineButton className="small" onClick={viewMore}>
            View more
          </OutlineButton>
        </div>
      )}
    </>
  );
};

export default MovieGrid;
