#!/bin/bash

# DigiCraft Frontend Docker Deployment Script

set -e

echo "🚀 Starting DigiCraft Frontend Docker Deployment..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed and running
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

# Find a free port starting from BASE_PORT (default 6060)
find_free_port() {
    local base_port=${1:-6060}
    local port=$base_port
    
    # Try different methods to check if port is in use
    while true; do
        # Method 1: Try with netstat
        if command -v netstat >/dev/null 2>&1; then
            if ! netstat -ln | grep -q ":${port} "; then
                break
            fi
        # Method 2: Try with ss
        elif command -v ss >/dev/null 2>&1; then
            if ! ss -ln | grep -q ":${port} "; then
                break
            fi
        # Method 3: Try to bind to the port
        else
            if ! nc -z localhost $port 2>/dev/null; then
                break
            fi
        fi
        port=$((port + 1))
        
        # Prevent infinite loop
        if [ $port -gt $((base_port + 100)) ]; then
            echo "Could not find free port after checking 100 ports" >&2
            exit 1
        fi
    done
    
    echo $port
}

# Build and deploy
deploy() {
    echo "Starting deployment..."

    # Determine APP_PORT if not set
    if [ -z "${APP_PORT}" ]; then
        print_status "Detecting free port starting at 6060..."
        export APP_PORT=$(find_free_port 6060)
        print_status "Using APP_PORT=${APP_PORT}"
    else
        print_status "Using provided APP_PORT=${APP_PORT}"
    fi
    
    # Stop existing containers
    print_status "Stopping existing containers..."
    docker-compose down --remove-orphans 2>/dev/null || true
    
    # Force remove any container with the same name
    print_status "Removing any existing container with same name..."
    docker rm -f digicraft-frontend 2>/dev/null || true
    
    # Remove old images
    print_status "Cleaning up old images..."
    docker system prune -f
    
    # Build and start services
    print_status "Building and starting services..."
    APP_PORT=${APP_PORT} docker-compose up -d --build
    
    # Wait for services to be ready
    print_status "Waiting for services to be ready..."
    sleep 30
    
    # Check service health
    print_status "Checking service health..."
    docker-compose ps
    
    # Show logs
    print_status "Recent application logs:"
    docker-compose logs --tail=20 digicraft-app || true
}

# Show deployment status
show_status() {
    echo ""
    echo -e "${BLUE}📊 Deployment Status${NC}"
    echo "====================="
    
    docker-compose ps
    
    echo ""
    echo -e "${BLUE} Service Health${NC}"
    echo "=================="
    
    local port=${APP_PORT:-6060}
    # Check app health
    if curl -s http://localhost:${port}/health > /dev/null 2>&1; then
        print_success "Application is responding on port ${port}"
    else
        print_warning "Application health check failed on port ${port}"
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
    echo -e "  ${BLUE}Local:${NC} http://localhost:${APP_PORT}"
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
        docker-compose down
        print_status "Services stopped"
        ;;
    "restart")
        docker-compose restart
        print_status "Services restarted"
        ;;
    "logs")
        docker-compose logs -f
        ;;
    "clean")
        docker-compose down -v --remove-orphans
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
