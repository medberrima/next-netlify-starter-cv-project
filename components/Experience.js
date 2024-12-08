import React from 'react';

const experienceData = [
  {
    title: 'Développeur Full-Stack React JS / React Native',
    company: 'Frenchinnov',
    date: 'Fév. 2024 - Présent',
    location: 'Sur site',
    description: [
      'Développement et extension de deux applications majeures :',
      '• Application de gestion des chaînes et des points de vente - un outil pour les managers de restauration afin d\'optimiser les opérations.',
      '• Application de commande en ligne - une solution innovante pour faciliter la commande de nourriture.',
      'Responsabilités principales :',
      '• Refactorisation du code : Migration vers TypeScript, mise en place des bonnes pratiques, modularisation du code et amélioration de la maintenabilité.',
      '• Optimisation des API : Amélioration des appels API pour une meilleure performance et gestion des erreurs.',
      '• Développement mobile : Mise en place d\'une sécurité avancée avec gestion des droits d\'accès et authentification.',
      '• Création de nouveaux modules fonctionnels, notamment la gestion des utilisateurs et la clôture des transactions.',
      '• Amélioration de l\'expérience utilisateur avec la vérification de la connexion Internet et le rafraîchissement de l\'écran.',
      '• Intégration de Firebase Analytics pour le suivi des performances.',
      '• Maintenance et support : Identification et correction rapide des bugs pour garantir la stabilité et la fiabilité des applications.'
    ]
  },
  {
    title: 'Développeur Nest JS',
    company: 'Freelance',
    date: 'Déc. 2023 - Janv. 2024',
    location: 'À distance',
    description: [
      'Développement d\'un système complet de gestion d\'événements, de billets, de matchs, de financement participatif, de récompenses et de points de retrait avec NestJS, MongoDB et TypeScript.',
      'Optimisation des appels API d\'authentification pour une meilleure performance.'
    ]
  },
  {
    title: 'Développeur Full-Stack Nest JS / React Native',
    company: 'Naxxum',
    date: 'Août 2022 - Déc. 2023',
    location: 'Tunis, Tunisie (Hybride)',
    description: [
      'Optimisation et stabilisation des performances de l\'application, notamment en termes de temps de chargement, d\'utilisation des ressources, de gestion des erreurs et de fiabilité.',
      'Conception et développement d\'API backend robustes et évolutives avec NestJS.',
      'Récupération, stockage et manipulation des données dans des bases de données NoSQL (MongoDB) de manière optimale.',
      'Développement d\'applications mobiles multiplateformes avec React Native pour iOS et Android.',
      'Implémentation d\'un flux de données unidirectionnel avec Redux pour une gestion optimale de l\'état global des applications React Native.',
      'Contribution à la conception et au développement de nouvelles fonctionnalités pour améliorer les performances, l\'expérience utilisateur et la convivialité de l\'application.',
      'Identification rapide des problèmes techniques, des bugs et des problèmes de performance, et résolution efficace.',
      'Configuration et gestion de pipelines avec Azure DevOps et Git pour la gestion des versions et l\'intégration continue.',
      'Génération et déploiement d\'applications hybrides avec Capacitor.',
      'Collaboration étroite avec les chefs de projet, les développeurs et les responsables produits pour une coordination efficace.'
    ]
  }
];

export default function Experience() {
  return (
    <section>
      <h2>Expérience Professionnelle</h2>
      {experienceData.map((item, index) => (
        <div key={index}>
          <h3>{item.title} - {item.company}</h3>
          <p>{item.date}</p>
          <p>{item.location}</p>
          <ul>
            {item.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
