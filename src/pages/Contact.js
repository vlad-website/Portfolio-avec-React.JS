import React from "react";
import '../styles/Contact.css';

export default function Contact() {
    return (
        <section className="my-5">
            <div className="limited-container mx-auto">
                <div className="text-center mb-5">
                    <h1 className="fw-bold mb-2">Contact</h1>
                    <p className="text-muted">
                        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
                    </p>
                    <div className="title-line-contact mx-auto"></div>
                </div>

                <div className="card shadow p-4 border-0">
                    <div className="row">
                        {/* Left: Form */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h4 className="fw-bold line-form">
                                Formulaire de contact
                            </h4>
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Votre nom"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Votre adresse email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Votre numéro de téléphone"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Sujet"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Votre message"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Envoyer
                                </button>
                            </form>
                        </div>
                        {/* Right: Coordonnées*/}
                        <div className="col-md-6">
                            <h4 className="fw-bold line-form">
                                Mes Coordonnées
                            </h4>
                            <p className="mb-1 fw-bold">Vladyslav Kharkovskyi</p>
                            <p className="mb-1">
                                <i className="bi bi-geo-alt"></i> 40 rue Laure Diebold
                            </p>
                            <p className="mb-1">69009 Lyon, France</p>
                            <p className="mb-1">
                                <i className="bi bi-telephone"></i> 07 67 57 57 57
                            </p>
                            <p className="mb-4">
                                <i className="bi bi-envelope"></i> vlad.website33@gmail.com
                            </p>
                            {/* Google Map */}
                            <div className="ratio ratio-16x9">
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1110.7869940242565!2d-0.5752405216750851!3d44.85065274450164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552877b7124fef%3A0x63ddcf14c453b2d4!2s37%20Cr%20de%20Verdun%2C%2033000%20Bordeaux!5e0!3m2!1sru!2sfr!4v1761662684893!5m2!1sru!2sfr"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}