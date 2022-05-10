import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import { OutlineButton } from '../components/button';
import HeroSlide from '../components/hero-slide';

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
                </section>
            </div>
        </div>
    );
}

export default Home;
