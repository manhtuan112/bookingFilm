import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/tmovie.png";
import { routeList } from "./../../config/routeList";
import "./header.scss";
//All + Shilf + o => bỏ imp các component ko dùng
const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  // console.log(pathname)
  const headerRef = useRef(null);


  //hieu ung co phan header khi scroll
  useEffect(() => {
    const shrinkHeader = () =>{
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        headerRef.current.classList.add('shrink')
      }
      else{
        headerRef.current.classList.remove('shrink')
      }
    }

    window.addEventListener('scroll', shrinkHeader)
    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    };
  }, []);


  const active = headerNav.findIndex((e) => e.path === pathname);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={Logo} alt="" />
          <Link to={routeList.HOME}> tMovie </Link>
        </div>
        <ul className="header__nav">
          
          {headerNav.map((element, index) => (
            <li key={index} className={index === active ? "active" : ""}>
              <Link to={element.path}> {element.display} </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
