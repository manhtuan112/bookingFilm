import React, { useState, useEffect, useRef } from 'react';

import{ Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useNavigate } from 'react-router-dom';






const HeroSlide = () => {

    

    const [movieItems, setMovieItems] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 4));
                // console.log(response);
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);

    return (
        <div className="hero-slide">
            
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{delay: 1000}}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({isActive})=> (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            
            
        </div>
    );
}


const HeroSlideItem = ({item, className}) =>{
    const nav = useNavigate()

    const backgroundUrl = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

    return(
        <div className={`hero-slide__item ${className} `}
        style={{backgroundImage: `url(${backgroundUrl})`}}>
            {item.title}
        </div>
    )
}


export default HeroSlide;