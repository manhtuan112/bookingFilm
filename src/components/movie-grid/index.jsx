import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./movie-grid.scss";
import tmdbApi, { category, movieType, tvType } from "./../../api/tmdbApi";
import MovieCard from "./../movie-card/index";
import { OutlineButton } from "../button";
import MovieSearch from "./MovieSearch";

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();
  

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {page: page};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          page: page,
          query: keyword,
        };
        
        response = await tmdbApi.search(props.category, { params });

        
      }
    
      setItems(response.results);
      setTotalPage(response.total_pages);
      
    };

    getList();
    
  }, [props.category, keyword]);

  const viewMore = async() => {
      let response = null;

      if (keyword === undefined) {
        const params = {
          page: page+1
        };
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          page: page+1,
          query: keyword,
        };
        
        response = await tmdbApi.search(props.category, { params });

        
      }
    
      
      
      setItems([...items, ...response.results]);
      setPage(page+1)
      
      
    

  };
  return (
    <>
    <section className="section mb-3">
      <MovieSearch category={props.category} keyword={keyword} />
    </section>
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
