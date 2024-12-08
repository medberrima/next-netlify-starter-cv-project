Bien sûr ! Voici la version mise à jour de votre README avec l'ajout que le projet est un site de votre CV dans la description :

---

# Mon Projet Dockerisé

## Description

Ce projet utilise **Docker** et **Docker Compose** pour configurer un environnement de développement et de production pour une application Node.js. Il contient des configurations pour servir une application web en développement avec un serveur Nginx en production.

Il s'agit d'un site web présentant mon CV, permettant une gestion dynamique et fluide des informations. Le projet est divisé en plusieurs parties :
- **Développement** : Utilisation de Node.js pour démarrer un serveur local.
- **Production** : Construction et exportation de fichiers statiques pour être servis via Nginx.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Docker** : https://www.docker.com/get-started
- **Docker Compose** : https://docs.docker.com/compose/

## Installation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://votre-depot.git
   cd nom-du-dossier
   ```

2. Installez les dépendances et configurez les conteneurs Docker en exécutant la commande suivante :
   ```bash
   docker-compose up --build
   ```

   Cela va créer et démarrer les services Docker définis dans le fichier `docker-compose.yml`.

## Structure du Projet

### `docker-compose.yml`

Le fichier de configuration Docker Compose définit deux services :
- **web** : Un service pour démarrer l'application en mode développement avec Node.js.
  - Utilise `Dockerfile.dev` pour la construction de l'image Docker.
  - Expose le port 3000.
  - Monte le répertoire local dans le conteneur pour permettre l'édition en temps réel.
  
### `Dockerfile.dev`

Ce fichier est utilisé pour la construction de l'image Docker en mode développement. Il installe les dépendances nécessaires, copie les fichiers du projet, et démarre le serveur Node.js en mode développement.

### `Dockerfile`

Ce fichier est utilisé pour la construction de l'image Docker en mode production. Il passe par deux étapes :
1. **Build** : L'application est construite et exportée en fichiers statiques.
2. **Production** : Nginx est utilisé pour servir les fichiers statiques dans un environnement de production.

### `nginx.conf` (optionnel)

Si vous avez besoin de configurer Nginx davantage, vous pouvez ajouter un fichier de configuration `nginx.conf` pour personnaliser les paramètres du serveur web.

## Lancer en mode développement

1. Démarrez les services en mode développement en exécutant :
   ```bash
   docker-compose up --build
   ```

2. Accédez à votre application dans le navigateur à l'adresse suivante :
   ```
   http://localhost:3000
   ```

## Lancer en mode production

1. Pour démarrer l'application en mode production (serveur Nginx), vous pouvez exécuter :
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

   Cela va servir votre application via Nginx sur le port 80.

## Commandes Docker Compose

Voici quelques commandes utiles pour gérer vos services Docker :

- **Démarrer les services en arrière-plan** :
  ```bash
  docker-compose up -d
  ```

- **Arrêter les services** :
  ```bash
  docker-compose down
  ```

- **Rebuild de l'image Docker** :
  ```bash
  docker-compose up --build
  ```

## Contributions

Les contributions sont les bienvenues. Pour toute suggestion ou amélioration, merci d'ouvrir une **issue** ou une **pull request**.

## Auteurs

- [Mohamed Berrima](https://medberrima-cv.netlify.app/)
- [Portfolio](https://medberrima.github.io/)

--- 

N'hésitez pas à modifier ou à ajouter des détails spécifiques à votre projet si nécessaire !