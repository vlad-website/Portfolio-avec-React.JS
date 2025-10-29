import React from "react";
import '../styles/Portfolio.css';

export default function Portfolio() {
    return(
        <>
            <section className="portfolio-hero"></section>
            <section className="limited-container text-center my-5 mx-auto">
                <h1 className="fw-bold mb-2">Portfolio</h1>
                <p className="text-muted mb-4">
                    Voici quelques-unes de mes réalisations
                </p>
                <div className="title-line-portfolio mx-auto mb-5"></div>
                {/* Grid cards */}
                <div className="row row-cols-1 rows-cols-md-2 row-cols-lg-3 g-4">
                    {/* Projet 1 */}
                    <div className="col">
                        <div className="card h-100 border-1 shadow-sm portfolio-card mx-auto">
                            <img src="/img/portfolio/fresh-food.jpg" className="card-img-top" alt="Frash Food" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Fresh Food</h5>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer text-muted small">Site réalisé avec PHP et MySQL</div>
                        </div>
                    </div>
                    {/* Projet 2 */}
                    <div className="col">
                        <div className="card h-100 border-1 shadow-sm portfolio-card mx-auto">
                            <img src="/img/portfolio/restaurant-japonais.jpg" className="card-img-top" alt="Restaurant Akira" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Restaurant Akira</h5>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer text-muted small">Site réalisé avec WordPress</div>
                        </div>
                    </div>
                    {/* Projet 3 */}
                    <div className="col">
                        <div className="card h-100 border-1 shadow-sm portfolio-card mx-auto">
                            <img src="/img/portfolio/espace-bien-etre.jpg" className="card-img-top" alt="Espace bien-être" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Espace bien-être</h5>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer text-muted small">Site réalisé avec LARAVEL</div>
                        </div>
                    </div>
                    {/* Projet 4 */}
                    <div className="col">
                        <div className="card h-100 border-1 shadow-sm portfolio-card mx-auto">
                            <img src="/img/portfolio/seo.jpg" className="card-img-top" alt="SEO" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">SEO</h5>
                                <p className="card-text">Améliration du référencement d'un site e-commerce</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer text-muted small">Utilisation des outils SEO</div>
                        </div>
                    </div>
                    {/* Projet 5 */}
                    <div className="col">
                        <div className="card h-100 border-1 shadow-sm portfolio-card mx-auto">
                            <img src="/img/portfolio/coder.jpg" className="card-img-top" alt="API" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Création d'une API</h5>
                                <p className="card-text">Création d'une API RESTFULL publique</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer text-muted small">PHP - SYMFONY</div>
                        </div>
                    </div>
                    {/* Projet 6 */}
                    <div className="col">
                        <div className="card h-100 border-1 shadow-sm portfolio-card mx-auto">
                            <img src="/img/portfolio/screens.jpg" className="card-img-top" alt="Maquette de site web" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Maquette d'un site web</h5>
                                <p className="card-text">Création du prototype d'un site</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer text-muted small">Réalisé avec FIGMA</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}