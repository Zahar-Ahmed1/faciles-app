FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Build avec base href pour le sous-domaine
RUN npm run build -- --base-href=/facilyx/

FROM nginx:alpine
# Copier les fichiers buildés
COPY --from=build /app/dist/facilyx-angular/browser /usr/share/nginx/html
# Copier la configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
