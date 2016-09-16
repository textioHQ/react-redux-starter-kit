import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

const Header = () => (
    <div>
        <h1>Helens Text Editor</h1>
        <IndexLink to='/' activeClassName='route--active'>
            Editor
        </IndexLink>
    </div>
);

export default Header;
