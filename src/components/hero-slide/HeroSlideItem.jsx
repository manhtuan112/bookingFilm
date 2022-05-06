import { useNavigate } from 'react-router-dom';
import apiConfig from './../../api/apiConfig';

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

export default HeroSlideItem
