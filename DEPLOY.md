# Guide de Déploiement - Garde-Corps Site

## Prérequis Serveur (Aliyun ECS)

- Ubuntu 22.04 LTS ou Debian 12
- Docker & Docker Compose installés
- Domaine configuré (ex: garde-corps.fr)
- Ports 80 et 443 ouverts

## 1. Préparation du Serveur

```bash
# Mettre à jour le système
sudo apt update && sudo apt upgrade -y

# Installer Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Installer Docker Compose
sudo apt install docker-compose-plugin -y

# Redémarrer pour appliquer les permissions
sudo reboot
```

## 2. Cloner le Projet

```bash
# Créer le répertoire
mkdir -p /var/www
cd /var/www

# Cloner (ou copier via SCP)
git clone <votre-repo> garde-corps
cd garde-corps
```

## 3. Configuration

```bash
# Créer le fichier .env
cat > .env << 'EOF'
JWT_SECRET=VOTRE_SECRET_TRES_LONG_ET_COMPLEXE
SITE_URL=https://garde-corps.fr
EOF

# Générer un secret sécurisé
openssl rand -base64 32
```

## 4. Premier Déploiement (sans SSL)

```bash
# Créer les répertoires SSL temporaires
mkdir -p docker/certbot/conf docker/certbot/www

# Modifier nginx config pour HTTP only d'abord
# (le script setup-ssl.sh le fait automatiquement)

# Lancer les conteneurs
docker compose up -d --build

# Vérifier que tout fonctionne
docker compose ps
docker compose logs -f web
```

## 5. Configuration SSL (Let's Encrypt)

```bash
# Rendre le script exécutable
chmod +x scripts/setup-ssl.sh

# Lancer la configuration SSL
./scripts/setup-ssl.sh

# Relancer avec la config SSL complète
docker compose down
docker compose up -d
```

## 6. Vérification

```bash
# Vérifier les services
docker compose ps

# Vérifier les logs
docker compose logs -f

# Tester le site
curl -I https://garde-corps.fr
```

## 7. Configuration Backup (Cron)

```bash
# Rendre le script exécutable
chmod +x scripts/backup-db.sh

# Créer le répertoire de backup
sudo mkdir -p /backup/mongodb

# Ajouter au cron (backup quotidien à 2h du matin)
crontab -e
# Ajouter: 0 2 * * * /var/www/garde-corps/scripts/backup-db.sh
```

## 8. Administration

Accès : https://garde-corps.fr/admin

Credentials par défaut :
- Email: `admin@stickit-france.com`
- Password: `admin123`

**⚠️ IMPORTANT : Changer le mot de passe immédiatement !**

## Commandes Utiles

```bash
# Redémarrer les services
docker compose restart

# Voir les logs en temps réel
docker compose logs -f web

# Accéder au shell du conteneur web
docker compose exec web sh

# Accéder à MongoDB
docker compose exec mongo mongosh garde-corps

# Mettre à jour l'application
git pull
docker compose up -d --build

# Restaurer un backup
docker compose exec mongo mongorestore --gzip --archive=/path/to/backup.gz
```

## Structure des Conteneurs

| Conteneur | Port | Description |
|-----------|------|-------------|
| garde-corps-web | 3000 (interne) | Application Next.js |
| garde-corps-mongo | 27017 (interne) | Base de données |
| garde-corps-nginx | 80, 443 | Reverse proxy |

## Dépannage

### Le site ne se charge pas

```bash
# Vérifier les conteneurs
docker compose ps

# Vérifier les logs nginx
docker compose logs nginx

# Vérifier les logs web
docker compose logs web
```

### Erreur de base de données

```bash
# Vérifier MongoDB
docker compose exec mongo mongosh --eval "db.adminCommand('ping')"

# Vérifier la connexion depuis web
docker compose exec web sh -c "wget -q -O- http://mongo:27017"
```

### Renouvellement SSL échoue

```bash
# Forcer le renouvellement
docker compose exec certbot certbot renew --force-renewal

# Recharger nginx
docker compose exec nginx nginx -s reload
```

## Sécurité

- [ ] Changer le mot de passe admin par défaut
- [ ] Configurer un firewall (UFW)
- [ ] Activer les mises à jour automatiques
- [ ] Configurer fail2ban
- [ ] Sauvegardes régulières testées

```bash
# Configuration firewall basique
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## Support

Pour toute question : contact@stickit-france.com
