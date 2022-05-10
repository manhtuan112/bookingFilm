import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import { OutlineButton } from '../components/button';
import HeroSlide from '../components/hero-slide';
import MovieList from '../components/movie-list';
import { category, movieType, tvType } from './../api/tmdbApi';

const Home = () => {
    return (
        <div>
            <HeroSlide />
            <div className="container">
                <section className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='smail'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </section>

                <section className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rates Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='smail'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </section>

                <section className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to='/tv'>
                            <OutlineButton className='smail'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </section>

                <section className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rates TV</h2>
                        <Link to='/tv'>
                            <OutlineButton className='smail'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </section>
            </div>
        </div>
    );
}

export default Home;
