import React, { useState, useEffect } from 'react';
import './Feature.css';

const Feature = ({
                     title,
                     description,
                     images = [],
                     videoUrl = "#",
                     reverse = false,
                     interval = 5000
                 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const domRef = React.useRef();

    // 1. Gestion du Slideshow (Timer)
    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images, interval]);

    // 2. Gestion de l'Animation au Scroll (Intersection Observer)
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        }, { threshold: 0.1 });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);

    return (
        <section
            ref={domRef}
            className={`feature container ${reverse ? 'feature--right' : 'feature--left'} ${isVisible ? 'visible' : ''}`}
        >
            {/* Côté Texte */}
            <div className="feature__text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            {/* Côté Image / Slideshow */}
            <div className="feature__image slideshow">
                {images.map((img, index) => (
                    <a
                        key={index}
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={index === currentIndex ? 'active' : ''}
                    >
                        <img src={img} alt={`${title} slide ${index}`} />
                    </a>
                ))}

                {/* Points de navigation */}
                {images.length > 1 && (
                    <div className="slideshow__dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                )}
            </div>


        </section>
    );
};

export default Feature;