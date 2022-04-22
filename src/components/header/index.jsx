import React, { useRef } from 'react';
import {useLocation, Link} from 'react-router-dom'
import './header.scss'
import Logo from '../../assets/tmovie.png'
import { routeList } from './../../config/routeList';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
];

const Header = () => {
    const {pathname} = useLocation()
    // console.log(pathname)
    const headerRef = useRef(null)

    const active = headerNav.findIndex(e => e.path === pathname)
    

    return (
        <div ref={headerRef} className='header'>
            <div className="header_wrap container">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <Link to={routeList.HOME}>tMovie</Link>    

                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((element, index) => (
                            <li key={index} className={index === active ? 'active' : ''}>
                                <Link to={element.path}>
                                    {element.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>        
        </div>
    );
}

export default Header;
