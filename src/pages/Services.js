import React from "react";
import '../styles/Services.css';

export default function Services() {
    return(
        <>
            <section className="services-hero"></section>
            <section className="limited-container text-center my-5 mx-auto">
                <h1 className="fw-bold mb-2">Mon offre de services</h1>
                <p className="text-muted mb-4">
                    Voici les prestations sur lesquelles je peux intervenir
                </p>
                <div className="title-line-services mx-auto mb-5"></div>
                {/* Bootstrap-grid - 3 cards */}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Card 1 */}
                    <div className="col">
                        <div className="card h-100 text-center border service-card">
                            <div className="card-body">
                                <i className="bi bi-pen display-4 text-ptimary mb-3"></i>
                                <h5 className="card-title fw-bold">UX Design</h5>
                                <p className="card-text">
                                    L'UX design est une discipline qui consiste à concevoir des produits (sites web, applications, logiciels, objects connectés, etc.) en plaçant l'utilisateur au centre des préoccupations.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col">
                        <div className="card h-100 text-center border service-card">
                            <div className="card-body">
                                <i className="bi bi-code-slash display-4 text-ptimary mb-3"></i>
                                <h5 className="card-title fw-bold">Développement web</h5>
                                <p className="card-text">
                                    Le développement de sites web consiste à créer des sites internet modernes en utilisant des langages et frameworks perfomants (HTML, CSS, JS, React, Bootstrap...).
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col">
                        <div className="card h-100 text-center border service-card">
                            <div className="card-body">
                                <i className="bi bi-search display-4 text-ptimary mb-3"></i>
                                <h5 className="card-title fw-bold">UX Design</h5>
                                <p className="card-text">
                                    Le référencement naturel (SEO) vise à améliorer la visibilité des sites web sur les moteurs de recherche et à attirer des visiteurs qualifiés.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}