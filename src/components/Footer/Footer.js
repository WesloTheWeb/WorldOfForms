import React from 'react';

const Footer = (props) => {
    return (
        <footer class="footer">
            Copyright &copy;  2021 - {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;