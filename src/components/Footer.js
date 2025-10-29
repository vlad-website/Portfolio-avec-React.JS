import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 mb-3">
                        <h5>Vladyslav Kharkovskyi</h5>
                        <p>100 av de Tivoli, 33110 Le Bouscat</p>
                        <p>Téléphone : 07 67 57 57 77</p>
                        <p>Email : vlad.website33@gmail.com</p>
                        <div className="d-flex gap-3 mt-2">
                            <a href="https://github.com" target="_blanc" rel="noreferrer" className="text-light">
                                <i className="bi bi-github fs-4"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blanc" rel="noreferrer" className="text-light">
                                <i className="bi bi-linkedin fs-4"></i>
                            </a>
                            <a href="https://twitter.com" target="_blanc" rel="noreferrer" className="text-light">
                                <i className="bi bi-twitter fs-4"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <h5>Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" className="text-light text-decoration-none">Accueil</NavLink></li>
                            <li><NavLink to="/services" className="text-light text-decoration-none">Services</NavLink></li>
                            <li><NavLink to="/portfolio" className="text-light text-decoration-none">Portfolio</NavLink></li>
                            <li><NavLink to="/contact" className="text-light text-decoration-none">Me contacter</NavLink></li>
                            <li><NavLink to="/mentions" className="text-light text-decoration-none">Mentions légales</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Mes dernières réalisations</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to="/portfolio" className="text-light text-decoration-none">Projet 1</NavLink></li>
                            <li><NavLink to="/portfolio" className="text-light text-decoration-none">Projet 2</NavLink></li>
                            <li><NavLink to="/portfolio" className="text-light text-decoration-none">Projet 3</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}