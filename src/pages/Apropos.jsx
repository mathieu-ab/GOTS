import { useEffect } from 'react';
import '../css/Apropos.css';

import artEnSceneImg from '../assets/images/partners/art-en-scene.webp';
import leviacomImg from '../assets/images/partners/leviacom.webp';
import offpointImg from '../assets/images/partners/offpoint.webp';

import teoadImg from '../assets/images/team/teoad.webp';
import azeohdImg from '../assets/images/team/azeohd.webp';
import azaaranImg from '../assets/images/team/azaaran.webp';

export default function Apropos() {
    useEffect(() => {
        document.title = "À propos | GOTS";
    }, []);

    const partners = [
        { name: "L'Art en Seine", img: artEnSceneImg, link: "https://www.facebook.com/lartenseine", desc: "Espace culturel à Bar sur Seine." },
        { name: "LeviaCom", img: leviacomImg, link: "https://leviacom.fr/", desc: "Expert en communication visuelle." },
        { name: "Offpoint Media", img: offpointImg, link: "https://offpoint.media/", desc: "Production audiovisuelle technique." }
    ];

    const team = [
        { name: "Teoad", role: "Président", real: "Téo AGRAFEL-DELHAISE", img: teoadImg },
        { name: "Azeohd", role: "Secrétaire", real: "Matt THEULIER", img: azeohdImg },
        { name: "Azaaran", role: "Trésorier", real: "Lucas GRANGAUD", img: azaaranImg }
    ];

    return (
        <div className="page-content about-page">
            <section className="section-card">
                <h1 className="page-section-title">À Propos de GOTS</h1>
                <p className="page-subtitle">Fondée en septembre 2025 par Teoad, Azeohd et Azaaran.</p>
                <div className="about-grid">
                    <div className="about-card">
                        <h3>Qui sommes-nous ?</h3>
                        <p>L'association a pour objectif de promouvoir, accompagner et produire des projets liés à l'univers du gaming sous toutes ses formes.</p>
                    </div>
                    <div className="about-card">
                        <h3>Que faisons-nous ?</h3>
                        <p>Nous concevons et organisons des évènements autour du gaming en ajoutant une touche scénographique pour embellir le moment.</p>
                    </div>
                </div>
            </section>

            <section className="section-card about-vision">
                <div className="vision-text">
                    <h2 className="page-section-title">Nos Motivations</h2>
                    <p>Teoad Show, c’est avant tout une communauté de passionnés. Nous croyons que le jeu vidéo est un formidable moyen de rassembler et valoriser les talents locaux.</p>
                    <p className="highlight">Nous sommes ouverts à tout partenariat pour collaborer !</p>
                </div>
                <div className="location-box">
                    <h3>Où nous trouver ?</h3>
                    <ul>
                        <li><strong>Aube (10) :</strong> Secteur de Troyes</li>
                        <li><strong>Gironde (33) :</strong> Région bordelaise</li>
                        <li><strong>Online :</strong> Événements numériques</li>
                    </ul>
                </div>
            </section>

            <section className="section-card partners-section">
                <h2 className="page-section-title">Ils nous soutiennent</h2>
                <div className="partners-grid">
                    {partners.map((p, i) => (
                        <a key={i} href={p.link} target="_blank" rel="noreferrer" className="partner-card">
                            <img src={p.img} alt={p.name} />
                            <h4>{p.name}</h4>
                            <p>{p.desc}</p>
                        </a>
                    ))}
                </div>
            </section>

            <section className="section-card contact-section">
                <h1 className="page-section-title">L'Équipe</h1>
                <p className="page-subtitle">Une question ? Un projet ? L'équipe est à votre écoute.</p>
                <div className="team-grid">
                    {team.map((m, i) => (
                        <div key={i} className="member-card">
                            <div className="member-avatar">
                                <img src={m.img} alt={m.name} />
                            </div>
                            <h3>{m.name}</h3>
                            <p className="role">{m.role}</p>
                            <p className="real-name">{m.real}</p>
                        </div>
                    ))}
                </div>
                <div className="email-box">
                    <p>Pour toute demande officielle :</p>
                    <a href="mailto:gamesonthestage@gmail.com" className="email-link">gamesonthestage@gmail.com</a>
                </div>
            </section>
        </div>
    );
}