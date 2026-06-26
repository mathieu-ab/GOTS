import React, {useEffect} from 'react';
import ClassicText from '../components/ClassicText/ClassicText.jsx';
import Feature from '../components/Feature/Feature.jsx';
import '../App.css';





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
        
            <div >
		<br/ >
		<br/ >
		<br/ >
                <section className="container">
                    <img src="/img/banner.png" alt="Bannière" className="plain-image__img" />
                </section>

                    <ClassicText text="GOTS est une association qui a pour but de produire et réaliser des évènements autour du gaming." />

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