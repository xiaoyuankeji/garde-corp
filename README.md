# Garde-Corps Site - STICK-IT FRANCE

Site web optimisé SEO pour la vente de garde-corps sur mesure.

## Technologies

- **Frontend**: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Deployment**: Docker, Nginx

## Fonctionnalités

- ✅ Pages SEO optimisées (garde-corps par matériau et usage)
- ✅ Formulaire de devis avec validation
- ✅ Système de recommandation AI (règles)
- ✅ Back-office administration (leads, pages, projets)
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap et robots.txt automatiques
- ✅ Design responsive et moderne
- ✅ Boutons d'appel flottants

## Installation Locale

```bash
# Cloner le projet
cd garde-corps-site

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Lancer MongoDB (Docker)
docker run -d -p 27017:27017 --name mongodb mongo:7

# Lancer le serveur de développement
npm run dev
```

## Variables d'Environnement

Créer un fichier `.env.local` :

```env
MONGODB_URI=mongodb://localhost:27017/garde-corps
JWT_SECRET=votre-secret-jwt-très-sécurisé
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_NAME=STICK-IT FRANCE
NEXT_PUBLIC_COMPANY_PHONE=03 20 34 50 30
NEXT_PUBLIC_COMPANY_EMAIL=contact@stickit-france.com
```

## Déploiement Production (Docker)

```bash
# 1. Configurer les variables d'environnement
export JWT_SECRET="votre-secret-production"
export SITE_URL="https://garde-corps.fr"

# 2. Construire et lancer les containers
docker-compose up -d --build

# 3. Configurer SSL (après DNS)
chmod +x scripts/setup-ssl.sh
./scripts/setup-ssl.sh
```

## Structure du Projet

```
garde-corps-site/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── (public)/          # Pages publiques
│   │   ├── admin/             # Back-office
│   │   └── api/               # API Routes
│   ├── components/            # Composants React
│   │   ├── ui/               # Composants UI de base
│   │   ├── layout/           # Header, Footer, etc.
│   │   ├── forms/            # Formulaires
│   │   ├── seo/              # JSON-LD, Breadcrumb
│   │   └── ai/               # Recommandation AI
│   └── lib/                   # Utilitaires
│       ├── db/               # MongoDB models
│       └── constants.ts      # Constantes
├── docker/                    # Configuration Docker
├── public/                    # Assets statiques
└── scripts/                   # Scripts de maintenance
```

## Administration

Accès : `https://votre-domaine.fr/admin`

Credentials par défaut (à changer !) :
- Email: `admin@stickit-france.com`
- Password: `admin123`

## API Endpoints

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/leads` | Soumettre un lead |
| POST | `/api/reco` | Obtenir des recommandations |
| POST | `/api/events` | Logger un événement |
| GET | `/api/health` | Vérifier l'état du serveur |

## SEO

Le site est optimisé pour les mots-clés :
- garde-corps / garde corps
- garde-corps inox / verre / aluminium
- garde-corps balcon / terrasse / escalier / piscine
- devis garde-corps / prix garde-corps

Chaque page inclut :
- Meta title/description optimisés
- Structured Data (LocalBusiness, Product, FAQ, Breadcrumb)
- Canonical URL
- Open Graph tags

## Maintenance

```bash
# Backup de la base de données
./scripts/backup-db.sh

# Voir les logs
docker-compose logs -f web

# Redémarrer les services
docker-compose restart
```

## Support

STICK-IT FRANCE - contact@stickit-france.com
