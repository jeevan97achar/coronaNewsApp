import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <div className="navbar">
            <nav className="nav nav-wrapper blue-grey darken-4">
                <div className="container">
                    <Link className="brand-logo left">NEWS</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Latest News</Link>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">WHO Guidelines</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent;