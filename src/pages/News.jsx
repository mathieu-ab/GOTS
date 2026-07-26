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