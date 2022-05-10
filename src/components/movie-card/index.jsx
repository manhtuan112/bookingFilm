import React from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';
import Button from '../button';

import './movie-card.scss'
const MovieCard = (props) => {

    const {item} = props

    const link = '/' + category[props.category] + '/' + item.id
    const backgroundUrl = apiConfig.w500Image(item.poster_path || item.backdrop_path)
    return (
        <Link to={link}>
            <div className='movie-card' style={{backgroundImage: `url(${backgroundUrl})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3 className='movie-card__name'>{item.title || item.name}</h3>

        </Link>
    );
}

export default MovieCard;
