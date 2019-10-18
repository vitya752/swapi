import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/swapi/" exact="true">StarWarsApi</Link>
            </div>
            <div className="links">
                <Link to="/swapi/people">People</Link>
                <Link to="/swapi/planets">Planets</Link>
                <Link to="/swapi/starships">Starships</Link>
            </div>
        </header>
    );
}

export default Header;