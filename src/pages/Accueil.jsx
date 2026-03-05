import React, {useEffect} from 'react';
import Grainient from '../components/Grainient/Grainient.jsx';
import ClassicText from '../components/ClassicText/ClassicText.jsx';
import Feature from '../components/Feature/Feature.jsx';
import '../components/nav-container/nav-container.css';
import '../App.css'





export default function Accueil() {
    useEffect(() => {
        document.title = "GOTS";
    }, []);

    const tslanImages = [
        '/img/slideshow_tslan/tslan_1.png',
        '/img/slideshow_tslan/tslan_2.png',
        '/img/slideshow_tslan/tslan_3.png',
        '/img/slideshow_tslan/tslan_4.png',
        '/img/slideshow_tslan/tslan_5.png',
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


            <section className="plain-image container">
                <img src="/img/banner.png" alt="Bannière" className="plain-image__img"/>
            </section>

            <ClassicText text="GOTS est une association qui a pour but de produire et réaliser des évènements autour du gaming."></ClassicText>

            <Feature
                title="TSLAN"
                description="GOTS organise tous les ans une compétition de jeux vidéo sur scène qui oppose plusieurs joueurs. Cet évènement baptisé TSLAN est intégralement produit par notre association et permet de réunir des passionnés autour d'un spectacle tout le weekend, en ligne et sur place."
                videoUrl="https://tslan.fr"
                images={tslanImages}
                reverse={true}
            />


        </div>
    );
}