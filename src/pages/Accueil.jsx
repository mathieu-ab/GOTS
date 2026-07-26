import { useEffect } from 'react';
import ClassicText from '../components/ClassicText/ClassicText.jsx';
import Feature from '../components/Feature/Feature.jsx';
import '../App.css';

import bannerImg from '../assets/images/banner.webp';

import tslan1 from '../assets/images/slideshow_tslan/tslan_1.webp';
import tslan2 from '../assets/images/slideshow_tslan/tslan_2.webp';
import tslan3 from '../assets/images/slideshow_tslan/tslan_3.webp';
import tslan4 from '../assets/images/slideshow_tslan/tslan_4.webp';
import tslan5 from '../assets/images/slideshow_tslan/tslan_5.webp';

const tslanImages = [tslan1, tslan2, tslan3, tslan4, tslan5];

export default function Accueil() {
    useEffect(() => {
        document.title = "Accueil | GOTS";
    }, []);

    return (
        <div>
            <section className="container">
                <img src={bannerImg} alt="Bannière GOTS" className="plain-image__img" />
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