#!/bin/bash

# MongoDB Backup Script
# Run this daily via cron: 0 2 * * * /path/to/backup-db.sh

BACKUP_DIR="/backup/mongodb"
DATE=$(date +%Y%m%d_%H%M%S)
CONTAINER_NAME="garde-corps-mongo"

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Run mongodump inside container
docker exec $CONTAINER_NAME mongodump \
    --db garde-corps \
    --archive=/tmp/backup_$DATE.gz \
    --gzip

# Copy backup from container
docker cp $CONTAINER_NAME:/tmp/backup_$DATE.gz $BACKUP_DIR/

# Clean up container backup
docker exec $CONTAINER_NAME rm /tmp/backup_$DATE.gz

# Remove backups older than 30 days
find $BACKUP_DIR -name "backup_*.gz" -mtime +30 -delete

echo "Backup completed: $BACKUP_DIR/backup_$DATE.gz"
