#!/bin/bash

# SSL Setup Script for Garde-Corps Site
# Run this after DNS is configured and pointing to your server

DOMAIN="garde-corps.fr"
EMAIL="contact@stickit-france.com"

echo "Setting up SSL for $DOMAIN..."

# Create directories
mkdir -p ./docker/certbot/conf
mkdir -p ./docker/certbot/www

# Create temporary nginx config for certbot challenge
cat > ./docker/nginx/conf.d/garde-corps.conf << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name garde-corps.fr www.garde-corps.fr;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
EOF

# Start nginx only
docker-compose up -d nginx

# Get SSL certificate
docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN \
    -d www.$DOMAIN

# Update nginx config with SSL
# (The full config is already in garde-corps.conf)

echo "SSL setup complete!"
echo "Now run: docker-compose up -d"
