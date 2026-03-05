import React, {useEffect} from 'react';
import Grainient from "../components/Grainient/Grainient.jsx";
import Bnav from "../components/Bnav/Bnav.jsx";
import '../css/Apropos.css'

export default function Apropos() {

    useEffect(() => {
        document.title = "À propos - GOTS";
    }, []);

    const partners = [
        { name: "L'Art en Seine", img: "art-en-scene.png", link: "https://www.facebook.com/lartenseine", desc: "Espace culturel à Bar sur Seine." },
        { name: "LeviaCom", img: "leviacom.png", link: "https://leviacom.fr/", desc: "Expert en communication visuelle." },
        { name: "Offpoint Media", img: "offpoint.png", link: "https://offpoint.media/", desc: "Production audiovisuelle technique." }
    ];

    const team = [
        { name: "Teoad", role: "Président", real: "Téo AGRAFEL-DELHAISE", img: "teoad.png" },
        { name: "Azeohd", role: "Secrétaire", real: "Matt THEULIER", img: "azeohd.png" },
        { name: "Azaaran", role: "Trésorier", real: "Lucas GRANGAUD", img: "azaaran.png" }
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
                <main className="container about-page">
                    {/* HERO SECTION */}
                    <section className="about-hero">
                        <h1>À Propos de GOTS</h1>
                        <p className="subtitle">Fondée en septembre 2025 par Teoad, Azeohd et Azaaran.</p>
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

                    {/* VISION & LOCATION */}
                    <section className="about-vision">
                        <div className="vision-text">
                            <h2>Nos Motivations</h2>
                            <p>Teoad Show, c’est avant tout une communauté de passionnés. Nous croyons que le jeu vidéo est un formidable moyen de rassembler et valoriser les talents locaux.</p>
                            <p className="highlight">Nous sommes ouverts à tout partenariat pour collaborer !</p>
                        </div>
                        <div className="location-box">
                            <h3> Où nous trouver ?</h3>
                            <ul>
                                <li><strong>Aube (10) :</strong> Secteur de Troyes</li>
                                <li><strong>Gironde (33) :</strong> Région bordelaise</li>
                                <li><strong>Online :</strong> Événements numériques</li>
                            </ul>
                        </div>
                    </section>

                    {/* PARTNERS */}
                    <section className="partners-section">
                        <h2>Nos Partenaires</h2>
                        <div className="partners-grid">
                            {partners.map((p, i) => (
                                <a key={i} href={p.link} target="_blank" rel="noreferrer" className="partner-card">
                                    <img src={`/img/partners/${p.img}`} alt={p.name} />
                                    <h4>{p.name}</h4>
                                    <p>{p.desc}</p>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* TEAM & CONTACT */}
                    <section className="contact-section">
                        <div className="page-header">
                            <h1>L'Équipe</h1>
                            <p>Une question ? Un projet ? L'équipe est à votre écoute.</p>
                        </div>
                        <div className="team-grid">
                            {team.map((m, i) => (
                                <div key={i} className="member-card">
                                    <div className="member-avatar">
                                        <img src={`/img/team/${m.img}`} alt={m.name} />
                                    </div>
                                    <h3>{m.name}</h3>
                                    <p className="role">{m.role}</p>
                                    <p className="real-name">{m.real}</p>
                                </div>
                            ))}
                        </div>
                        <div className="email-box">
                            <p>Pour toute demande officielle :</p>
                            <a href="mailto:teoadshow@gmail.com" className="email-link">teoadshow@gmail.com</a>
                        </div>
                    </section>
                </main>
            </div>
    );
}