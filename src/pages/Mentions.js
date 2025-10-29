import React, { useEffect } from "react"
import '../styles/Mentions.css'

export default function Mentions() {
    //noindex
    useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex";
        document.head.appendChild(meta);
        return () => {
            document.head.removeChild(meta);
        };
    }, []);

    return (
        <section className="my-5">
            <div className="limited-container text-center mx-auto">
                <h1 className="fw-bold mb-2">Mentions légales</h1>
                <div className="title-line-mentions mx-auto mb-5"></div>
                {/* Accordion */}
                <div className="accordion shadow-sm" id="mentionsAccordion">
                    {/* Èditeur du site */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button 
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Èditeur du site
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#mentionsAccordion"
                        >
                            <div className="accordion-body text-start">
                                <p className="fw-bold mb-1">Vladyslav Kharkovskyi</p>
                                <p className="mb-1">
                                    <i className="bi bi-geo-alt"></i> 40 rue Laure Diebold
                                </p>
                                <p className="mb-1">69009 Lyon, France</p>
                                <p className="mb-1">
                                    <i className="bi bi-telephone"></i> 07 67 57 57 57
                                </p>
                                <p className="mb-0">
                                    <i className="bi bi-envelope"></i> vlad.website33@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Hébergeur */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Hébergeur
                            </button>
                        </h2>
                        <div 
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#mentionsAccordion"
                        >
                            <div className="accordion-body text-start">
                                <p className="fw-bold mb-1">alwaysdata</p>
                                <p className="mb-1">
                                    91 Rue de Faubourg Saint-Honoré, 75008 Paris
                                </p>
                                <p className="mb-0">
                                    <i className="bi bi-globe"></i>{" "}
                                    <a href="https://vladportfolio.fr" target="_blank" rel="noreferrer">
                                    www.vladportfolio.fr
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Crédits */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Crédits
                            </button>
                        </h2>
                        <div 
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#mentionsAccordion"
                        >
                            <div className="accordion-body text-start">
                                <p>
                                    Ce site a été réalisé par Vladyslav Kharkovskyi, étudiant au{" "}
                                    <a
                                        href="https://www.centre-europeen-formation.fr/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Centre Européen de formation
                                    </a>.
                                </p>
                                <p>
                                    <em>
                                        Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{" "}
                                        <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
                                        Pixabay
                                        </a>.
                                    </em>
                                </p>
                                <p>
                                    <em>
                                        La favicon de ce site a été fournie par{" "}
                                        <a
                                            href="https://www.flaticon.com/free-icons/john-doe"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                        John Doe Icons - Flaticon
                                        </a>.
                                    </em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}