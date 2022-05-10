import { useNavigate } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import Button, { OutlineButton } from "../button";
import apiConfig from "./../../api/apiConfig";
import './hero-slide.scss';
import { category } from './../../api/tmdbApi';
const HeroSlideItem = ({ item, className }) => {
  const nav = useNavigate();
  
  const backgroundUrl = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );


  const setModalActive = async() => {
    const modal = document.querySelector(`#modal_${item.id}`)

    
    const videos = await tmdbApi.getVideos(category.movie, item.id)

    if(videos.results.length > 0) {
      const videoSrc = `https://www.youtube.com/embed/${videos.results[0].key}`
      modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc)
    }
    else{
      modal.querySelector('.modal__content').innerHTML = 'No trailer'
    }
    modal.classList.toggle('active')
  }


  return (
    <div
      className={`hero-slide__item ${className} `}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="hero-slide-item__content container">
        <div className="hero-slide-item-content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={()=> nav('/movie/' + item.id)} >
              Watch now
            </Button>

            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
            
          </div>
        </div>
        <div className="hero-slide-item-content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;
