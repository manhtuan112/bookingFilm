import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import HeroSlide from '../components/hero-slide';

const Home = () => {
    return (
        <div>
            <HeroSlide />
            <Swiper>
                <SwiperSlide>
                    
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Home;
