import React from 'react';
import './footer.scss'
import FooterBG from '../../assets/footer-bg.jpg'
import logo from '../../assets/tmovie.png'
import { Link } from 'react-router-dom';
import { routeList } from './../../config/routeList';

const Footer = () => {
    
    return (
        <div className='footer' style={{backgroundImage: `url(${FooterBG})`}}>
            <div className="footer__content container">
                <div className="footer__content-logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to='/'>Tmovie</Link>
                    </div>
                </div>
                <div className="footer__content-menus">
                    <div className="footer__content-menu">
                        <Link to={routeList.HOME}>Home</Link>
                        <Link to={routeList.HOME}>Contact us</Link>
                        <Link to={routeList.HOME}>Term of services</Link>
                        <Link to={routeList.HOME}>About us</Link>
                    </div>
                    <div className="footer__content-menu">
                        <Link to='/'>Live</Link>
                        <Link to='/'>Contact us</Link>
                        <Link to='/'>Term of services</Link>
                        <Link to='/'>About us</Link>
                    </div>
                    <div className="footer__content-menu">
                        <Link to='/'>Home</Link>
                        <Link to='/'>Contact us</Link>
                        <Link to='/'>Term of services</Link>
                        <Link to='/'>About us</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
