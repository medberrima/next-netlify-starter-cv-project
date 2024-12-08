import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Mohamed Berrima</h1>
      <p>Full-Stack Developer</p>
      <p>
        En tant que passionné du développement Full Stack avec une expertise en
        conception et en développement de logiciels, j'apprécie chaque étape du
        processus de création d'un produit, de la conception à son déploiement.
        Mon portfolio, accessible à l'adresse https://medberrima.github.io/, met
        en avant certains de mes projets personnels et académiques, démontrant
        ainsi mes compétences techniques et ma créativité. Si vous souhaitez en
        savoir plus sur mes réalisations professionnelles antérieures, n'hésitez
        pas à me contacter sur LinkedIn ou à m'envoyer un email à
        medberrima0@gmail.com. Je serai ravi d'échanger avec vous en privé sur
        mon expérience en développement de logiciels et de discuter de nouvelles
        opportunités professionnelles.
      </p>
    </header>
  );
}
