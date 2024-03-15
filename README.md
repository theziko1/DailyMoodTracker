<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">DailyMoodTracker</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/theziko1/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/theziko1/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="left"> Déploiement d'une Application React avec Tests sur Docker
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Authors](#authors)


## 🧐 About <a name = "about"></a>

 L'objectif de cette application est de permettre aux utilisateurs de rapidement enregistrer leur humeur du jour à travers une interface web simple et intuitive. 

## 🏁 Getting Started <a name = "getting_started"></a>

DailyMoodTracker sera une application widget pouvant être intégrée à n'importe quelle page web, offrant aux utilisateurs un moyen rapide et facile de suivre leur état émotionnel sur une base quotidienne. Utilisant React pour le développement frontend, Docker pour la conteneurisation, et Jest pour les tests unitaires, vous développerez une application centrée sur la facilité d'utilisation, l'accessibilité, et la simplicité de déploiement.

### prérequis

Ce dont vous avez besoin pour installer le logiciel et comment les installer.

```
npm install
```

### Installing

Une série d’exemples étape par étape qui vous expliquent comment faire fonctionner un environnement de développement.

Dites quelle sera l’étape

```
npm i dependencies 
```


## 🎈 Usage <a name="usage"></a>

Pour démarer l'application :

```
npm run dev
```


## Containerizing a React Application with Docker
Ce guide vous explique les étapes à suivre pour mettre en conteneur une application React à l’aide de Docker.

# prérequis
Docker installé sur votre système. Vous pouvez télécharger et installer Docker depuis https://www.docker.com/products/docker-desktop.

# - Étapes
Créez votre application React pour la production :
Avant de conteneuriser votre application React, assurez-vous qu’elle est conçue pour la production. Vous pouvez le faire en exécutant :

```
npm run build
```
Écrivez un Dockerfile :
Créez un fichier nommé Dockerfile dans le répertoire racine de votre projet et ajoutez le contenu suivant :

```
# Use Node.js v14 as base image
FROM node:14 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy all files from current directory to the container
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as base image for serving the static files
FROM nginx:alpine

# Copy built files from the build stage to nginx web server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

```

Créer l’image Docker :
Exécutez la commande suivante pour créer votre image Docker :

```
docker build -t my-react-app .

```
Exécuter un conteneur Docker à partir de l’image :
Enfin, vous pouvez exécuter un conteneur Docker à partir de l’image que vous venez de créer :

```
docker run -d -p 8080:80 my-react-app

```


## ⛏️ Built Using <a name = "built_using"></a>

- [Docker](https://www.docker.com/) - Docker
- [ReactJs](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@theziko1](https://github.com/theziko1) - Idea & Initial work


