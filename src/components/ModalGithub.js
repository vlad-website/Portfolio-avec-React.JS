import { useEffect, useState } from "react";
import '../App.css'



export default function ModalGithub({ onClose }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchGithub() {
      try {
        const res = await fetch("https://api.github.com/users/vlad-website");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Erreur :", error);
      }
    }
    fetchGithub();
  }, []);

  if (!data) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target.classList.contains("modal-overlay") && onClose()}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1050,
      }}
    >
      <div className="modal-content-dark">
        {/* HEADER */}
        <div className="modal-header-dark">
          <h5 className="fw-bold mb-0">Mon profil GitHub</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Fermer"
            onClick={onClose}
          ></button>
        </div>
        {/* BODY */}
        <div className="modal-body-dark">
          <div className="row align-items-center">
            {/* Img left */}
            <div className="col-md-5 text-center mb-3 mb-md-0">
              <img
                src={data.avatar_url}
                alt={data.login}
                className="rounded-circle img-fluid"
                style={{ width: "160px" }}
              />
            </div>
            {/* Info right */}
            <div className="col-md-7 text-start">
              <p className="mb-2">
                <i className="bi bi-person"></i>{" "}
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-info text-decoration-none"
                >
                  {data.name || data.login}
                </a>
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt"></i>{" "}
                {data.location || "-"}
              </p>
              <p className="mb-3">
                <i className="bi bi-info-circle"></i>{" "}
                {data.bio || "Aucune biographie disponible."}
              </p>
              <hr />
              <p className="mb-2">
                <i className="bi bi-box"></i> Repositories : {data.public_repos}
              </p>
              <p className="mb-2">
                <i className="bi bi-people"></i> Followers : {data.followers}
              </p>
              <p className="mb-0">
                <i className="bi bi-person-plus"></i> Following : {data.following}
              </p>
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <div className="modal-footer-dark">
          <button className="btn btn-secondary" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}