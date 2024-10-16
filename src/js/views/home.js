import React from "react";
import starWarsLogo from '../../img/Star_Wars_Logo_2.png';
import characters from '../../img/1.png';
import planets from '../../img/2.png';
import vehicles from '../../img/3.png';
import "../../styles/home.css";

export const Home = () => (
    <div className="home-container">
        <img src={starWarsLogo} alt="Star Wars Logo" className="star-wars-logo" />
        
        <div className="sections">
            <div className="section">
                <img src={characters} alt="Characters" className="section-title" />
                <div className="card-container">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Character" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: 'bold', textAlign: 'left' }}>Character Name</h5>
                            <p className="card-text" style={{ textAlign: 'left' }}>Gender: Male</p>
                            <p className="card-text" style={{ textAlign: 'left' }}>Hair Color: Brown</p>
                            <p className="card-text" style={{ textAlign: 'left' }}>Eye Color: Blue</p>
                            <div className="d-flex justify-content-between">
                                <a href="/character-details" className="btn btn-primary">Learn More</a>
                                <button className="btn btn-warning">
                                    <i className="fa fa-heart-o"></i> {/* Corazón vacío */}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Agrega más cards según sea necesario */}
                </div>
            </div>

            <div className="section">
                <img src={planets} alt="Planets" className="section-title" />
                <div className="card-container">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Planet" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: 'bold', textAlign: 'left' }}>Planet Name</h5>
                            <p className="card-text" style={{ textAlign: 'left' }}>Climate: Temperate</p>
                            <p className="card-text" style={{ textAlign: 'left' }}>Terrain: Grasslands</p>
                            <div className="d-flex justify-content-between">
                                <a href="/planet-details" className="btn btn-primary">Learn More</a>
                                <button className="btn btn-warning">
                                    <i className="fa fa-heart-o"></i> {/* Corazón vacío */}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Agrega más cards según sea necesario */}
                </div>
            </div>

            <div className="section">
                <img src={vehicles} alt="Vehicles" className="section-title" />
                <div className="card-container">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Vehicle" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: 'bold', textAlign: 'left' }}>Vehicle Name</h5>
                            <p className="card-text" style={{ textAlign: 'left' }}>Model: X-wing</p>
                            <p className="card-text" style={{ textAlign: 'left' }}>Manufacturer: Incom</p>
                            <div className="d-flex justify-content-between">
                                <a href="/vehicle-details" className="btn btn-primary">Learn More</a>
                                <button className="btn btn-warning">
                                    <i className="fa fa-heart-o"></i> {/* Corazón vacío */}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Agrega más cards según sea necesario */}
                </div>
            </div>
        </div>
    </div>
);
