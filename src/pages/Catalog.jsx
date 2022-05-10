import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/page-header';
import {category as cate} from '../api/tmdbApi'
import MovieGrid from '../components/movie-grid';
const Catalog = () => {
    const {category} = useParams();
    // console.log(category)
    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movie' : 'TV Series'}
            </PageHeader>
            <div className="container">
                <section className="section mb-3">
                    <MovieGrid category={category} />
                </section>
            </div>
        </>
    );
}

export default Catalog;
