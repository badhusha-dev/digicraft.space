#!/bin/bash

# DigiCraft.space Docker Deployment Script
# This script automates the deployment process for production

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="digicraft-space"
DOCKER_COMPOSE_FILE="docker-compose.yml"

echo -e "${BLUE}🚀 DigiCraft.space Docker Deployment${NC}"
echo "=================================="

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if Docker is running
check_docker() {
    echo "Checking Docker installation..."
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! docker info &> /dev/null; then
        print_error "Docker is not running. Please start Docker first."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    print_status "Docker and Docker Compose are ready"
}

# Build and deploy
deploy() {
    echo "Starting deployment..."
    
    # Stop existing containers
    print_status "Stopping existing containers..."
    docker-compose -f "$DOCKER_COMPOSE_FILE" down --remove-orphans
    
    # Remove old images
    print_status "Cleaning up old images..."
    docker system prune -f
    
    # Build and start services
    print_status "Building and starting services..."
    docker-compose -f "$DOCKER_COMPOSE_FILE" up -d --build
    
    # Wait for services to be ready
    print_status "Waiting for services to be ready..."
    sleep 30
    
    # Check service health
    print_status "Checking service health..."
    docker-compose -f "$DOCKER_COMPOSE_FILE" ps
    
    # Show logs
    print_status "Recent application logs:"
    docker-compose -f "$DOCKER_COMPOSE_FILE" logs --tail=20 digicraft-app
}

# Show deployment status
show_status() {
    echo ""
    echo -e "${BLUE}📊 Deployment Status${NC}"
    echo "====================="
    
    docker-compose -f "$DOCKER_COMPOSE_FILE" ps
    
    echo ""
    echo -e "${BLUE}🔍 Service Health${NC}"
    echo "=================="
    
    # Check app health
    if curl -s http://localhost:5000 > /dev/null 2>&1; then
        print_status "Application is responding"
    else
        print_warning "Application health check failed"
    fi
    
    # Check database
    if docker-compose -f "$DOCKER_COMPOSE_FILE" exec -T postgres pg_isready -U digicraft_user > /dev/null 2>&1; then
        print_status "Database is healthy"
    else
        print_warning "Database health check failed"
    fi
}

# Main deployment flow
main() {
    check_docker
    deploy
    show_status
    
    echo ""
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
    echo ""
    echo "Your application is now running at:"
    echo -e "  ${BLUE}Local:${NC} http://localhost:5000"
    echo ""
    echo "Useful commands:"
    echo -e "  ${BLUE}View logs:${NC} docker-compose logs -f"
    echo -e "  ${BLUE}Stop services:${NC} docker-compose down"
    echo -e "  ${BLUE}Restart:${NC} docker-compose restart"
    echo -e "  ${BLUE}Update:${NC} ./deploy-docker.sh"
}

# Handle command line arguments
case "${1:-deploy}" in
    "deploy")
        main
        ;;
    "status")
        show_status
        ;;
    "stop")
        docker-compose -f "$DOCKER_COMPOSE_FILE" down
        print_status "Services stopped"
        ;;
    "restart")
        docker-compose -f "$DOCKER_COMPOSE_FILE" restart
        print_status "Services restarted"
        ;;
    "logs")
        docker-compose -f "$DOCKER_COMPOSE_FILE" logs -f
        ;;
    "clean")
        docker-compose -f "$DOCKER_COMPOSE_FILE" down -v --remove-orphans
        docker system prune -af
        print_status "All containers and images cleaned up"
        ;;
    *)
        echo "Usage: $0 {deploy|status|stop|restart|logs|clean}"
        echo "  deploy  - Deploy the application (default)"
        echo "  status  - Show deployment status"
        echo "  stop    - Stop all services"
        echo "  restart - Restart all services"
        echo "  logs    - Show application logs"
        echo "  clean   - Clean up all containers and images"
        exit 1
        ;;
esac
