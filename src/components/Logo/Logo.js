import React from 'react';
import { Link } from 'react-router-dom';
import { globe } from '../../assets/assets';

const Logo = (props) => {
    return (
        <Link to="/">
            <figure>
                <img src={globe} alt="outline of a globe" />
            </figure>
        </Link>
    );
};

export default Logo;