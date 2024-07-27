# Base image Node.js
FROM node:18-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste de l'application
COPY . .

# Construction de l'application
RUN npm run build

# Exposition du port 
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
