import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss'
import { routeList } from './../../config/routeList';
import Background from '../../assets/footer-bg.jpg'
const NotFound = () => {
    return (
        <div className="notfound-body">
            <div className='notfound-container'>
                <h2>Oops! Page not found</h2>
                <h1 style={{backgroundImage: `url(${Background})`}}>404</h1>
                <p>We can't find the page you're looking for</p>
                <Link to={routeList.HOME}><div className='go-back'>Go back home</div></Link>
            </div>

        </div>
    );
}

export default NotFound;
