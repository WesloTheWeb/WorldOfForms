import React from 'react';
import Logo from '../Logo/Logo';

const Header = (props) => {
    return (
        <section className='header-container'>
            <div>
                <Logo />
            </div>
            <div>
                <h1>Welcome to <br /> World of Forms</h1>
                <h2>Select a form from the dashboard below</h2>
            </div>
        </section>
    );
};

export default Header;