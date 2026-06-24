import React, {useEffect, useState} from 'react';
import '../css/News.css';

export default function News() {

    useEffect(() => {
        document.title = "GOTS";
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
                    <div className="news-content">
                        <span className="news-badge">Annonce</span>
                        <h1 className="page-section-title">TSLAN 2k26 : Premier teaser</h1>
                        <p className="page-subtitle">La TSLAN 2k26 se déroulera les 24 et 25 octobre 2026. Le reveal des jeux sera dévoilé le 17 juillet.</p>
                    </div>
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/tsaaeHsKGC8"
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
                            <iframe src={activeVideo} allowFullScreen title="YouTube player"></iframe>
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