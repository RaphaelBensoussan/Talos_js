# Talos Landing Page

Une landing page moderne et accessible pour l'application Talos, qui révolutionne l'accessibilité textuelle avec la méthode FALC.

## 🚀 Fonctionnalités

- **Design responsive** : Optimisé pour mobile, tablette et desktop
- **Animations fluides** : Animations CSS et JavaScript pour une expérience utilisateur engageante
- **Accessibilité** : Conçu selon les standards d'accessibilité web
- **Modal vidéo** : Player vidéo intégré avec gestion des interactions
- **Carrousel de témoignages** : Système de témoignages avec navigation automatique
- **Navigation smooth** : Défilement fluide entre les sections
- **Optimisé pour les performances** : Code optimisé avec lazy loading et throttling

## 📁 Structure du projet

```
talos-landing/
├── index.html          # Structure HTML principale
├── styles.css          # Styles CSS personnalisés
├── script.js           # Fonctionnalités JavaScript
└── README.md          # Documentation
```

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Animations et styles personnalisés
- **Tailwind CSS** : Framework CSS utilitaire (via CDN)
- **JavaScript (Vanilla)** : Interactions et fonctionnalités
- **Font Awesome** : Icônes (via CDN)

## 🎨 Design

Le design suit une palette de couleurs cohérente :
- **Bleu principal** : `#1e40af` (blue-900)
- **Vert accent** : `#059669` (green-600)
- **Jaune CTA** : `#fbbf24` (yellow-400)
- **Textes** : Nuances de gris pour une bonne lisibilité

## 🚀 Installation et utilisation

1. **Cloner ou télécharger** les fichiers dans un dossier
2. **Ouvrir** `index.html` dans un navigateur web moderne
3. **Personnaliser** le contenu selon vos besoins

### Développement local

Pour un environnement de développement :

```bash
# Avec Python (simple serveur HTTP)
python -m http.server 8000

# Avec Node.js (live-server)
npx live-server

# Avec PHP
php -S localhost:8000
```

## 📱 Responsive Design

La page est optimisée pour :
- **Mobile** : 320px - 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : 1024px et plus

## ⚡ Fonctionnalités JavaScript

### Animations au scroll
- Détection automatique des éléments lors du scroll
- Animations d'apparition progressive
- Support du mode réduit de mouvement

### Modal vidéo
- Ouverture/fermeture avec animations
- Gestion du clavier (Escape)
- Loading state avec spinner

### Carrousel de témoignages
- Navigation automatique (5 secondes)
- Contrôles manuels (précédent/suivant)
- Pause au survol

### Navigation
- Scroll fluide vers les sections
- Menu mobile responsive
- Navbar qui s'adapte au scroll

## 🎯 Optimisations

### Performance
- Images optimisées avec lazy loading
- Throttling des événements scroll
- Debouncing pour les interactions fréquentes

### Accessibilité
- Labels ARIA appropriés
- Navigation au clavier
- Contrastes de couleurs conformes WCAG
- Support des préférences système (mode réduit de mouvement)

### SEO
- Structure HTML sémantique
- Meta tags appropriés
- Balises alt pour les images

## 🛠️ Personnalisation

### Modifier les couleurs
Éditez les classes Tailwind ou ajoutez des CSS personnalisés dans `styles.css`

### Ajouter du contenu
Modifiez le fichier `index.html` en respectant la structure existante

### Nouvelles fonctionnalités JavaScript
Ajoutez vos fonctions dans `script.js` en suivant les patterns existants

## 📊 Analytics

Le code inclut un système de tracking des événements. Pour l'activer :

1. Décommentez les lignes dans `script.js`
2. Intégrez votre solution d'analytics (Google Analytics, Matomo, etc.)

## 🔧 Support navigateurs

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📄 Licence

Ce projet est fourni à des fins éducatives et peut être librement modifié et distribué.

## 🤝 Contribution

Les améliorations sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Optimiser les performances
- Améliorer l'accessibilité

---

**Développé avec ❤️ pour l'accessibilité numérique**
