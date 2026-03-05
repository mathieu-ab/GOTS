import React, {useEffect} from 'react';
import Grainient from "../components/Grainient/Grainient.jsx";
import '../css/Evenements.css'

export default function Evenements() {

    useEffect(() => {
        document.title = "Évènements - GOTS";
    }, []);

    const eventsList = [
        {
            id: 1,
            title: "TSLAN 2k25",
            date: "2025",
            description: "La 3ème édition de la TSLAN a eu lieu dans la salle de l'Art Scène. Pour cette édition, nous avons mis les grands moyens afin de proposer une compétition diffusée en direct sur 2 jours.",
            image: "/img/tslan_2025_cover.png",
            link: "https://tslan.fr/archives",
            badge: "Édition Spéciale",
            isLarge: true
        }
    ];

    return (
            <div style={{width: '100vw', height: '100vh', margin: 0, padding: 0}}>
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
                <main className="container events-page">
                    <header className="page-header">
                        <h1>Nos Événements</h1>
                        <p>Retrouvez l'historique des compétitions et événements organisés par GOTS.</p>
                    </header>

                    <section className="events-grid">
                        {eventsList.map((event) => (
                            <a
                                key={event.id}
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`event-card ${event.isLarge ? 'large' : ''}`}
                            >
                                <div className="event-image">
                                    <img src={event.image} alt={event.title} />
                                    {event.badge && <span className="status-badge">{event.badge}</span>}
                                </div>

                                <div className="event-info">
                                    <span className="event-date">{event.date}</span>
                                    <h2>{event.title}</h2>
                                    <p>{event.description}</p>
                                    <span className="btn-fake">Voir les détails →</span>
                                </div>
                            </a>
                        ))}
                    </section>
                </main>
            </div>
    );
}