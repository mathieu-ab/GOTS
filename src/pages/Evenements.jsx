import React, {useEffect} from 'react';
import '../css/Evenements.css';

export default function Evenements() {

    useEffect(() => {
        document.title = "GOTS";
    }, []);

    const eventsList = [
        {
            id: 1,
            title: "TSLAN 2k25",
            date: "2025",
            description: "La 3ème édition de la TSLAN a eu lieu dans la salle de l'Art Scène. Pour cette édition, nous avons mis les grands moyens afin de proposer une compétition diffusée en direct sur 2 jours.",
            image: "/img/tslan_2025_cover.png",
            link: "https://tslan.fr/archives",
            badge: "",
            isLarge: true
        }
    ];

    return (
            <div className="page-content events-page">
                <section className="section-card">
                        <h1 className="page-section-title">Nos Événements</h1>
                        <p className="page-subtitle">Retrouvez l'historique des compétitions et événements organisés par GOTS.</p>
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
                </section>
            </div>
    );
}