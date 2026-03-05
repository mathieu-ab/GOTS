import React from 'react';
import { Link } from 'react-router-dom';
import './Bnav.css';

const Button = ({text="placeholder", route="/"}) => {
    return (
        <Link to={route} className="button-link">
            <button className="button">
                {text}
            </button>
        </Link>
    );
}


export default Button;

