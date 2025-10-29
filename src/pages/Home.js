import { useState } from "react";
import ModalGithub from "../components/ModalGithub";
import '../styles/Home.css';

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        {/* Hero section */}
        <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-light">
            <div className="overlay"></div>
            <div className="content">
                <h1 className="fw-bold">Bonjour, je suis Vladyslav Kharkovskyi</h1>
                <h2 className="mb-4">Développeur web full-stack</h2>
                <button
                    className="btn btn-danger btn-lg"
                    onClick={() => setShowModal(true)}
                >
                    En savoir plus
                </button>
            </div>
        </section>
        {/* SECTION "À propos" + "Mes compétences" */}
        <section className="container my-5">
            <div className="mx-auto shadow p-4 bg-white rounded row"
                style={{ maxWidth: "1000px" }}>
                {/* "À propos" */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <h3 className="mb-3">À propos</h3>
                    <img
                        src="/img/john-doe-about.jpg"
                        alt="John Doe"
                        className="img-fluid rounded mb-3"
                    />
                    <p>
                        Passionné par la création numérique et les technologies du web, je conçois et développe des sites internet modernes, performants et accessibles.
                    </p>
                    <p>
                        Mon travail repose sur une approche centrée sur l’utilisateur : chaque projet commence par la compréhension des besoins et se termine par une interface claire et intuitive. J’accorde une grande importance à la qualité du code, à la performance et à la compatibilité entre navigateurs.
                    </p>
                    <p>
                        En parallèle du développement front-end, je m’intéresse également au back-end et à l’intégration d’API pour créer des applications web complètes.
                    </p>
                </div>
                {/* "Mes compétences" */}
                <div className="col-md-6">
                    <h3 className="mb-3">Mes compétences</h3>
                    <div className="mb-3">
                        <label>HTML5 90%</label>
                        <div className="progress">
                            <div
                                className="progress-bar bg-danger"
                                style={{ width: "90%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>CSS3 80%</label>
                        <div className="progress">
                            <div
                                className="progress-bar bg-info"
                                style={{ width: "80%"}}
                            ></div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>JavaScript 70%</label>
                        <div className="progress">
                            <div
                                className="progress-bar bg-warning"
                                style={{ width: "70%"}}
                            ></div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>PHP 60%</label>
                        <div className="progress">
                            <div
                                className="progress-bar bg-success"
                                style={{ width: "60%"}}
                            ></div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>React 50%</label>
                        <div className="progress">
                            <div
                                className="progress-bar bg-primary"
                                style={{ width: "50%"}}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* MODALE GITHUB */}
        {showModal && <ModalGithub onClose={() => setShowModal(false)} />}
        </>
    );
}