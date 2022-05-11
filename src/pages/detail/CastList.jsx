import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi, { category } from './../../api/tmdbApi';
import apiConfig from './../../api/apiConfig';




const CastList = ({id}) => {
    const {category} = useParams();


    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async() => {
            const response = await tmdbApi.credits(category, id);
            setCasts(response.cast.slice(0,5))
        }
        getCredits()
    }, [category, id]);

    return (
        <div className='casts'>
            {
                casts.map((cast, i)=> (
                    <div key={i} className="casts__item">
                        <div className="casts__item-img"
                        style={{backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`}}></div>
                        <p className="casts__item-name">{cast.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;
