import React, { useState, useEffect } from "react";
import tmdbApi, { category } from "../../api/tmdbApi";
import { useParams } from "react-router-dom";
import apiConfig from '../../api/apiConfig';
import './detail.scss'
import CastList from './CastList';
import VideoList from "./VideoList";
import MovieList from "../../components/movie-list";
const Detal = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
    {
      item && (
        <>
          <div className="banner"
          style={{backgroundImage: `url(${item.backdrop_path || item.poster_path ? apiConfig.originalImage(item.backdrop_path || item.poster_path) : 'https://envato-shoebox-0.imgix.net/e2a2/cca9-0097-4f88-b0f5-59d83b2a201b/042118+%2815%29.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=c5f11b3861446b9ef7e27ba495ba1740'})`}}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div className="movie-content__poster-img" style={{backgroundImage: `url(${item.poster_path || item.backdrop_path ? apiConfig.originalImage(item.poster_path || item.backdrop_path) : 'https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/471/36/471-36-101P/Null-typealive-Poster.jpg'})`}}>
                
              </div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">
                {item.title || item.name}
              </h1>
              <div className="genres">
                {
                  item.genres && item.genres.slice(0,5).map((genre, i)=>(
                    <span key={i} className='genres__item'>{genre.name}</span>
                  ))
                }
              </div>
              <p className="overview">
                {item.overview}
              </p>
              <div className="cast">
                <section className="section__header">
                  <h2>Main Caster</h2>
                </section>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
        <div className="container">
          <section className="section mb-3">
            <VideoList id={item.id} />
          </section>
          <section className="section mb-3">
            <div className="section__header mb-2">
              <h2>Similar</h2>
            </div>
            <MovieList category={category} type='similar' id={item.id} />
          </section>
        </div>
        </>
      )
    }
    </>
  )
};

export default Detal;
