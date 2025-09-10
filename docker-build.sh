#!/bin/bash

# Stop and remove existing containers
docker stop digicraft-frontend 2>/dev/null || true
docker rm digicraft-frontend 2>/dev/null || true

# Clean up old images
docker image prune -f

# Remove the specific image if it exists
docker rmi digicraft-frontend 2>/dev/null || true

# Build and start the services
docker compose up -d --build

echo "Containers deployed successfully"