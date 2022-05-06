import React, { useState, useEffect, useRef } from 'react';

import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css'

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';





const HeroSlide = () => {

    SwiperCore.use([Autoplay, Navigation]);

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
            
            {/* <Swiper
                modules={[Autoplay, Navigation]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{delay: 3000}}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            <img src={apiConfig.originalImage(item.backdrop_path)} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper> */}
            
            
        </div>
    );
}



export default HeroSlide;