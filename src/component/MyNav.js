import React from 'react';
import "../component/MyNav.css";

function MyNav() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand" href="#">JonY</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="links" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="links" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="links" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="links" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default MyNav;