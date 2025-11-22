# Guide de Déploiement - Facilyx Angular

## Déploiement sous sous-domaine `/facilyx/`

Ce projet est configuré pour être hébergé sous le chemin `/facilyx/` sur le domaine `annrstore.com`.

### Configuration

1. **Base Href** : `/facilyx/` (configuré dans `src/index.html` et `package.json`)
2. **Nginx** : Configuration pour servir l'application depuis `/facilyx/`
3. **Docker** : Image optimisée avec nginx

### Build et Déploiement

#### Option 1 : Build local puis déploiement

```bash
# Build de l'application
npm run build

# Les fichiers sont dans dist/facilyx-angular/browser
# Vous pouvez les copier vers votre serveur web
```

#### Option 2 : Build avec Docker

```bash
# Construire l'image Docker
docker build -t facilyx-angular .

# Lancer le conteneur
docker run -d -p 80:80 --name facilyx facilyx-angular
```

### Configuration Nginx sur le serveur

Si vous utilisez nginx directement sur le serveur (sans Docker), ajoutez cette configuration :

```nginx
server {
    listen 80;
    server_name annrstore.com;
    
    location /facilyx/ {
        alias /chemin/vers/dist/facilyx-angular/browser/;
        try_files $uri $uri/ /facilyx/index.html;
        
        # Headers de sécurité
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
    }
    
    # Cache pour les assets statiques
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### URLs de l'application

- Accueil : `https://annrstore.com/facilyx/`
- Services : `https://annrstore.com/facilyx/services`
- À propos : `https://annrstore.com/facilyx/about`
- Témoignages : `https://annrstore.com/facilyx/testimonials`
- Contact : `https://annrstore.com/facilyx/contact`

### Notes importantes

1. **Base Href** : Assurez-vous que le `base href` dans `index.html` correspond au chemin de déploiement
2. **Routes Angular** : Toutes les routes sont relatives au base href
3. **Assets** : Les assets (images, CSS, JS) sont automatiquement préfixés avec `/facilyx/`
4. **Refresh de page** : Nginx est configuré pour rediriger toutes les routes vers `index.html` pour le routing Angular

### Vérification

Après le déploiement, vérifiez que :
- L'application se charge correctement sur `https://annrstore.com/facilyx/`
- Les routes fonctionnent (essayez de naviguer entre les pages)
- Les assets (images, CSS, JS) se chargent correctement
- Le refresh de page fonctionne sur toutes les routes
