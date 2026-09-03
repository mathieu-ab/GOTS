import { useEffect, useState } from 'react';
import '../css/News.css';

export default function News() {
    useEffect(() => {
        document.title = "News | GOTS";
    }, []);

    const [activeVideo, setActiveVideo] = useState("https://www.youtube.com/embed/LrWvUYRvPP8");

    const videos = [
        { id: 1, label: "Best-Of", detail: "Jour 1", url: "https://www.youtube.com/embed/LrWvUYRvPP8" },
        { id: 2, label: "Best-Of", detail: "Jour 2", url: "https://www.youtube.com/embed/UsVRzdwrqQU" },
        { id: 3, label: "Court Métrage", detail: "", url: "https://www.youtube.com/embed/6ZBwJIiCgh8" },
    ];

    return (
        <div className="page-content news-page">
            <section className="section-card news-section">
                <span className="news-badge">Annonce</span>
                    <h1 className="page-section-title">TSLAN 2k26 le 24 et 25 octobre 2026</h1>
                <div className="ticket-info">
                    <h2>Billetterie ouverte au public</h2>
                    <p><strong>Horaires :</strong> événement les 24 et 25 octobre 2026, de 10h à 23h. Espaces accessibles de 9h45 à 23h15. Buvette et restauration de 10h à 23h.</p>
                    <p><strong>Tarifs :</strong> 6 € la journée ou 10 € le pass weekend.</p>
                    <p><strong>Lieu :</strong> Art-en-Seine, 19 Bis Av. du Professeur Paul Portier, 10110 Bar-sur-Seine.</p>
                    <a className="ticket-button" href="https://www.helloasso.com/associations/games-on-the-stage/evenements/billetterie-public-tslan2k26" target="_blank" rel="noreferrer">Acheter ma place</a>
                    <a className="official-link" href="https://tslan.fr" target="_blank" rel="noreferrer">Plus d'infos sur le site officiel de la TSLAN</a>
                </div>
                <div className="news-content">
                    <p className="page-subtitle">Reveal des jeux : </p>
                </div>
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/LrjsuChlsTM"
                        title="TSLAN 2k26 reveal des jeux"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="news-content">
                    <p className="page-subtitle">Teaser : </p>
                </div>
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/tsaaeHsKGC8"
                        title="TSLAN 2k26 Teaser"
                        allowFullScreen>
                    </iframe>
                </div>

            </section>

            <section className="section-card news-section">
                <div className="news-content">
                    <span className="news-badge red">Flashback</span>
                    <h2 className="page-section-title">TSLAN 2025 : retour en images</h2>
                    <p className="page-subtitle">Après un weekend de folie, voici la compilation des meilleurs moments de la TSLAN !</p>
                </div>

                <div className="video-widget">
                    <div className="video-container">
                        <iframe 
                            src={activeVideo} 
                            title="Lecteur YouTube TSLAN 2025" 
                            allowFullScreen>
                        </iframe>
                    </div>

                    <div className="video-selector">
                        {videos.map((video) => (
                            <button
                                key={video.id}
                                className={`selector-btn ${activeVideo === video.url ? 'active' : ''}`}
                                onClick={() => setActiveVideo(video.url)}
                            >
                                <strong>{video.label}</strong> {video.detail}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}