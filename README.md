Here's the revised README in French with the section about the important files (including Docker files) presented first, followed by the Docker commands at the end:

---

# Projet Next.js Dockerisé

Ce projet est une application Next.js dockerisée qui prend en charge les environnements de développement et de production à l'aide de Docker et Docker Compose. Ce README explique comment configurer et exécuter l'application en utilisant Docker.

Il s'agit d'un site web présentant mon CV

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Docker** : https://www.docker.com/get-started
- **Docker Compose** : https://docs.docker.com/compose/

## Structure du projet

Voici la structure de répertoires de base du projet :

```
next-netlify-starter-cv-project/
│
├── Dockerfile          # Dockerfile pour la production
├── Dockerfile.dev      # Dockerfile pour le développement
├── docker-compose.yml  # Configuration Docker Compose
├── .dockerignore       # Fichiers à ignorer pendant la construction Docker
├── package.json        # Configuration du projet Node.js (généré automatiquement par Next.js)
├── package-lock.json   # Blocage des versions des dépendances Node.js
├── pages/              # Pages de l'application Next.js
│   └── index.js
├── public/             # Assets statiques pour Next.js
├── styles/             # Styles globaux
│   └── globals.css
├── components/         # Composants React utilisés dans l'application
└── .gitignore          # Fichier Git ignore (généré automatiquement par Next.js)
```

## Fichiers importants

### 1. **`Dockerfile` (Production)**

Le fichier **`Dockerfile`** pour la production est utilisé pour créer une image optimisée de l'application en mode production. Il effectue plusieurs étapes, notamment :

- Utilisation de l'image de base `node:18` pour installer les dépendances et construire l'application.
- Copie de l'application dans le conteneur.
- Exécution de la commande `npm run build` pour préparer l'application pour la production.
- Préparation d'une image plus légère pour l'exécution en production (`node:18-slim`), qui contient uniquement les fichiers nécessaires pour faire fonctionner l'application.
- Exposition du port 3000 et lancement de l'application avec la commande `npm start`.

```Dockerfile
# Étape 1: Utilisation d'une image officielle Node.js comme image de base
FROM node:18 AS builder

# Étape 2: Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3: Copier package.json et package-lock.json
COPY package.json package-lock.json ./

# Étape 4: Installer les dépendances
RUN npm install --production

# Étape 5: Copier le reste du code de l'application
COPY . .

# Étape 6: Construire l'application Next.js
RUN npm run build

# Étape 7: Préparer l'image de production
FROM node:18-slim

# Étape 8: Définir le répertoire de travail
WORKDIR /app

# Étape 9: Copier les fichiers de l'image de construction
COPY --from=builder /app ./

# Étape 10: Installer uniquement les dépendances de production
RUN npm install --production

# Étape 11: Exposer le port
EXPOSE 3000

# Étape 12: Démarrer l'application Next.js en mode production
CMD ["npm", "start"]
```

### 2. **`Dockerfile.dev` (Développement)**

Le fichier **`Dockerfile.dev`** permet de configurer l'environnement de développement dans Docker. Il diffère du Dockerfile de production car il installe toutes les dépendances (y compris celles de développement) et monte le répertoire de travail local dans le conteneur pour permettre le rechargement à chaud (hot-reloading) pendant le développement.

- L'image de base `node:18` est utilisée pour installer les dépendances de développement.
- Le code est copié dans le conteneur et le répertoire local est monté comme volume pour permettre la mise à jour dynamique des fichiers sans reconstruire l'image.
- L'application est exécutée avec la commande `npm run dev`.

```Dockerfile
# Étape 1: Utilisation d'une image officielle Node.js comme image de base
FROM node:18

# Étape 2: Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3: Copier package.json et package-lock.json
COPY package.json package-lock.json ./

# Étape 4: Installer toutes les dépendances (y compris celles de développement)
RUN npm install

# Étape 5: Copier le reste du code de l'application
COPY . .

# Étape 6: Exposer le port de développement de Next.js
EXPOSE 3000

# Étape 7: Exécuter l'application Next.js en mode développement
CMD ["npm", "run", "dev"]
```

### 3. **`docker-compose.yml`**

Le fichier **`docker-compose.yml`** permet de définir et de gérer plusieurs services Docker, ici pour l'environnement de développement et de production. Il crée deux services : un pour le développement et un autre pour la production.

- Le service de développement utilise le Dockerfile pour démarrer l'application avec `docker-compose up dev`.
- Le service de production utilise l'image construite par le Dockerfile pour démarrer l'application avec `docker-compose up prod`.

```yaml
version: '3.8'

services:
  # Service pour le développement
  dev:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
    command: npm run dev

  # Service pour la production
  prod:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    command: npm start
```

### 4. **`.dockerignore`**

Le fichier **`.dockerignore`** est utilisé pour ignorer certains fichiers et répertoires lors de la construction des images Docker, afin d'éviter de les copier inutilement dans le conteneur (par exemple, les modules Node.js et les fichiers de logs).

```text
node_modules
npm-debug.log
Dockerfile*
.dockerignore
.git
.gitignore
README.md
```

---

## Commandes Docker personnalisées

Voici les commandes Docker disponibles dans les scripts `npm` :

- **Construire l'image Docker pour le développement :**

  ```bash
  npm run docker:build:dev
  ```

- **Construire l'image Docker pour la production :**

  ```bash
  npm run docker:build:prod
  ```

- **Exécuter l'application en mode développement avec Docker (utilisation de l'image `dev`) :**

  ```bash
  npm run docker:run:dev
  ```

- **Exécuter l'application en mode production avec Docker (utilisation de l'image `prod`) :**

  ```bash
  npm run docker:run:prod
  ```

- **Utiliser Docker Compose pour exécuter l'application en mode développement :**

  ```bash
  npm run docker:compose:dev
  ```

- **Utiliser Docker Compose pour exécuter l'application en mode production :**

  ```bash
  npm run docker:compose:prod
  ```

- **Arrêter et supprimer les conteneurs :**

  ```bash
  npm run docker:down
  ```

---

## Conclusion

Ce projet Next.js dockerisé permet de travailler facilement en développement et de déployer en production avec Docker. Utilisez les scripts définis dans le `package.json` pour automatiser la gestion de vos environnements de développement et de production.

## Auteurs

- [Mohamed Berrima](https://medberrima-cv.netlify.app/)
- [Portfolio](https://medberrima.github.io/)

--- 