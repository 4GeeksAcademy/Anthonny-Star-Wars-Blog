import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from '../../img/Star_Wars_Logo.png';

export const Navbar = () => {
    return (
        <nav className="custom-navbar">
            <Link to="/">
                <img src={starWarsLogo} alt="Star Wars Logo" className="navbar-logo" />
            </Link>
            
            <div className="dropdown ml-auto">
                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Favoritos <span className="favorite-count">(0)</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    <li><span className="dropdown-item">No hay favoritos</span></li>
                </ul>
            </div>
        </nav>
    );
};
