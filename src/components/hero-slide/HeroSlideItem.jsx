import { useNavigate } from "react-router-dom";
import Button, { OutlineButton } from "../button";
import apiConfig from "./../../api/apiConfig";
import './hero-slide.scss';
const HeroSlideItem = ({ item, className }) => {
  const nav = useNavigate();
  
  const backgroundUrl = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

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

            <OutlineButton onClick={()=>console.log('trailer')}>
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
