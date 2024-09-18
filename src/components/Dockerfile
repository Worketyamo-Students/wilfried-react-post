# Utiliser le runtime officiel Node.js comme image de base
 FROM node:18 as build 

# Définir le répertoire de travail dans le conteneur
 WORKDIR /app 

# Copier package.json et package-lock.json dans le répertoire de travail
 COPY . . 

# Installer les dépendances
 RUN yarn && yarn run build 

# Utiliser Nginx comme serveur de production
 FROM nginx:alpine as production 

# Copier l'application React créée dans le répertoire du serveur Web de Nginx
 COPY --from=build /app/build /usr/share/nginx/html 

# Exposer le port 80 pour le serveur Nginx
 EXPOSE 80 

# Démarrer Nginx lorsque le conteneur s'exécute
 CMD [ "nginx" , "-g" , "daemon off;" ]