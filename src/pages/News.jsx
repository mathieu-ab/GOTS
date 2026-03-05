import React, {useEffect, useState} from 'react';
import Grainient from "../components/Grainient/Grainient.jsx";
import '../css/News.css'

export default function News() {

    useEffect(() => {
        document.title = "News - GOTS";
    }, []);

    const [activeVideo, setActiveVideo] = useState("https://www.youtube.com/embed/LrWvUYRvPP8");
    const videos = [
        { id: 1, label: "Best-Of", detail: "Jour 1", url: "https://www.youtube.com/embed/LrWvUYRvPP8" },
        { id: 2, label: "Best-Of", detail: "Jour 2", url: "https://www.youtube.com/embed/UsVRzdwrqQU" },
        { id: 3, label: "Court Métrage", detail: "", url: "https://www.youtube.com/embed/6ZBwJIiCgh8" },
    ];

    return (
        <div style={{width: '100vw', height: '100vh', margin: 0, padding: 0}}>
            <div>
                <Grainient
                    color1="#e78f49"
                    color2="#b03bc2"
                    color3="#311bcd"
                    timeSpeed={0.55}
                    colorBalance={-0.13}
                    warpStrength={0.85}
                    warpFrequency={5.3}
                    warpSpeed={2.3}
                    warpAmplitude={50}
                    blendAngle={26}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.06}
                    grainScale={1.6}
                    grainAnimated={false}
                    contrast={1}
                    gamma={1.2}
                    saturation={1.1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>
            <main className="container news-page">
                {/* SECTION 1 : TWITCH CLIPS */}
                <section className="news-section">
                    <div className="news-content">
                        <span className="news-badge">Annonce</span>
                        <h1>La TSLAN reviendra en 2026</h1>
                        <p>Teoad a annoncé officiellement le retour de la compétition pour la fin d'année 2026. Préparez vos setups !</p>
                    </div>

                    <div className="video-container">
                        <iframe
                            src="https://clips.twitch.tv/embed?clip=RoughAuspiciousZebraKreygasm-31z3ENc1x-BLUi7Z&parent=gamesonthestage.fr&parent=gamesonthestage.fr"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>

                <hr className="separator" />

                {/* SECTION 2 : YOUTUBE WIDGET */}
                <section className="news-section">
                    <div className="news-content">
                        <span className="news-badge red">Flashback</span>
                        <h2>TSLAN 2025 : retour en images</h2>
                        <p>Après un weekend de folie, voici la compilation des meilleurs moments de la TSLAN !</p>
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
            </main>
        </div>
    );
}