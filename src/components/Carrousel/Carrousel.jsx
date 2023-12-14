import React, { useState, useEffect } from "react";
// import "./slider.scss";
import s from './style.module.scss'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images pour le slider
  const images = [
    { url: "./img/carrousel1.jpg", title: "Protéger", description:"Nous protégeons et sécurisons vos manifestations événementielles" },
    { url: "./img/carrousel2.png", title: "Secourir", description:"Nous sommes au service de la population en cas de sinistre" },
    { url: "./img/carrousel3.png", title: "Former", description:"Nous vous formons pour sauver des vies" },
  ];
  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Changez ici le délai entre chaque défilement en millisecondes (par exemple, 5000 pour 5 secondes)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.slider}>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentSlide ? [s.active] : s.slide}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <h2 className={s.title}>{image.title}</h2>
          <h3 className={s.description}>{image.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default Slider;
