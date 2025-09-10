# Docker Deployment Guide for DigiCraft Frontend

This guide explains how to deploy the DigiCraft React application using Docker.

## 🐳 Overview

The application uses a multi-stage Docker build process:
1. **Builder Stage**: Node.js environment to build the React app
2. **Production Stage**: Simple HTTP server to serve the static files

## 📋 Prerequisites

- Docker Desktop installed and running
- Docker Compose installed
- At least 2GB of available disk space

## 🚀 Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Clone and deploy
git clone https://github.com/your-username/digicraft-space.git
cd digicraft-space
chmod +x deploy-docker.sh
./deploy-docker.sh
```

## 📁 Docker Files Overview

### **Dockerfile**
- **Multi-stage build** for optimized production images
- **Simple HTTP server** using Node.js serve package
- **Security-focused** with non-root user
- **Health checks** for monitoring
- **Optimized layers** for faster builds

### **docker-compose.yml**
- **Full-stack deployment** with all services
- **Persistent volumes** for data storage
- **Network isolation** for security
- **Health monitoring** for all services

### **deploy-docker.sh**
- **Automated deployment** script
- **Environment validation** and setup
- **Health checks** and status monitoring
- **Easy management** commands

## 🛠 Installation & Setup

### 1. Install Docker
```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# CentOS/RHEL
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io
sudo systemctl start docker
sudo systemctl enable docker
```

### 2. Install Docker Compose
```bash
# Install Docker Compose v2
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker-compose --version
```

### 3. Clone Repository
```bash
git clone https://github.com/your-username/digicraft-space.git
cd digicraft-space
```

## ⚙️ Configuration

### 1. Environment Setup
```bash
# Copy environment template
cp env.docker.example .env

# Edit environment variables
nano .env
```

### 2. Required Environment Variables
```bash
# Application
NODE_ENV=production
PORT=6060
DOMAIN=digicraft.space
FRONTEND_URL=https://digi-craft.digicraft.space

# Security (CHANGE THESE!)
SESSION_SECRET=your-super-secret-session-key-here
POSTGRES_PASSWORD=your_secure_password
REDIS_PASSWORD=your_redis_password

# Database
DATABASE_URL=postgresql://digicraft_user:your_secure_password@postgres:5432/digicraft
```

### Option 2: Using Deployment Scripts

#### For Linux/Mac:
```bash
# Make script executable
chmod +x deploy-docker.sh

# Run deployment
./deploy-docker.sh
```

### 2. Manual Deployment
```bash
# Build and start services
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

### 3. Deployment Verification
```bash
# Check service health
./deploy-docker.sh status

# Test application
curl http://localhost:6060/api/health

# Check all services
docker-compose ps
```

## 📊 Service Management

### **Application Commands**
```bash
# Build the image
docker build -t digicraft-frontend .

# Run the container
docker run -d -p 6060:6060 --name digicraft-app digicraft-frontend

# Access the application
# Open http://localhost:6060 in your browser
```

## 🔧 Configuration

### 1. Port Configuration
```yaml
# In docker-compose.yml
services:
  digicraft-app:
    ports:
      - "6060:6060"  # Change 6060 to your preferred port
```

### Environment Variables

The following environment variables can be configured:

| Variable | Default | Description |
|----------|---------|-------------|
| `NODE_ENV` | `production` | Node.js environment |

### HTTP Server Configuration

The application uses a simple HTTP server (serve package) that includes:

- **SPA routing support** for React Router
- **Static file serving** for built assets
- **Health check endpoint** at `/health`
- **Production-ready** configuration for digicraft.space

Note: Since you're deploying to a GitLab server with existing nginx, the external nginx will handle:
- **Gzip compression** for better performance
- **Security headers** for enhanced security
- **Static asset caching** for better performance

## 📊 Monitoring and Logs

### View Application Logs

```bash
# Docker Compose
docker-compose logs -f

# Manual Docker
docker logs -f digicraft-app
```

### Health Check

The application includes a health check endpoint:

```bash
# Check if the application is healthy
curl http://localhost:6060/health
```

Expected response: `healthy`

### Container Status

```bash
# Check container status
docker ps

# Check container details
docker inspect digicraft-app
```

## 🔄 Updating the Application

### Option 1: Using Deployment Scripts

```bash
# Container resource usage
docker stats

# Disk usage
docker system df

# Network inspection
docker network inspect digicraft-network
```

## 🔒 Security Considerations

### 1. Environment Variables
- **Never commit** `.env` files to version control
- **Use strong passwords** for all services
- **Rotate secrets** regularly
- **Limit access** to production environment files

### 2. Network Security
```yaml
# Restrict external access
services:
  postgres:
    ports:
      - "127.0.0.1:5432:5432"  # Only localhost access
```

### 3. User Permissions
```dockerfile
# Non-root user in Dockerfile
USER digicraft
EXPOSE 6060
```

## 🛠️ Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Check what's using the port
sudo netstat -tulpn | grep :6060

# Kill the process or change the port
```

#### 2. Build Failures
```bash
# Clean build
docker-compose build --no-cache

# Check build logs
docker-compose build --progress=plain
```

#### 3. Container Won't Start
```bash
# Check container logs
docker-compose logs

# Check container status
docker ps -a
```

#### 4. Permission Issues
```bash
# Fix file permissions
chmod +x deploy-docker.sh

# Run with sudo if needed
sudo docker-compose up -d
```

### Debugging Commands

```bash
# Enter the container
docker exec -it digicraft-app sh

# Check application logs
docker exec -it digicraft-frontend tail -f /app/logs/app.log

# Check container processes
docker exec -it digicraft-frontend ps aux
```

## 🚀 Production Deployment

### Environment-Specific Configurations

#### Development
```yaml
# docker-compose.dev.yml
version: '3.8'
services:
  digicraft-app:
    build: .
    ports:
      - "6060:6060"
    environment:
      - NODE_ENV=development
    volumes:
      - ./client/src:/app/client/src:ro
```

#### Production
```yaml
# docker-compose.prod.yml
version: '3.8'
services:
  digicraft-app:
    build: .
    ports:
      - "6060:6060"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:6060/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Docker Swarm (Optional)

For production deployments with multiple instances:

```bash
# Initialize swarm
docker swarm init

# Deploy stack
docker stack deploy -c docker-compose.yml digicraft
```

## 📁 File Structure

```
├── Dockerfile              # Multi-stage Docker build with HTTP server
├── docker-compose.yml       # Docker Compose configuration
├── .dockerignore           # Files to exclude from build
├── deploy-docker.sh        # Linux/Mac deployment script
├── deploy-docker.bat       # Windows deployment script
└── DOCKER_DEPLOYMENT.md    # This documentation
```

## 🎯 Production Checklist

- [ ] **Environment Variables**: All secrets updated and secure
- [ ] **Ports**: No conflicts with existing services
- [ ] **Volumes**: Persistent storage configured
- [ ] **Networks**: Proper isolation and security
- [ ] **Health Checks**: All services responding
- [ **Logs**: Logging and monitoring configured
- [ ] **Backups**: Database backup strategy in place
- [ ] **SSL**: HTTPS configuration (handled by external nginx)
- [ ] **Monitoring**: Resource usage and health monitoring
- [ ] **Documentation**: Team trained on deployment process

## 📞 Support

### Getting Help
- **Docker Issues**: Check Docker documentation and logs
- **Application Issues**: Review application logs and health checks
- **Configuration**: Verify environment variables and docker-compose.yml
- **Performance**: Monitor resource usage and optimize accordingly

### Useful Resources
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- [DigiCraft.space Documentation](./README.md)
- [Technical Guide](./TECH_README.md)

---

**Happy Deploying! 🚀**

For more information, visit [digicraft.space](https://digi-craft.digicraft.space) or contact us at hello@digicraft.space.
