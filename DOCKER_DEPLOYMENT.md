# 🐳 DigiCraft.space Docker Deployment Guide

This guide provides comprehensive instructions for deploying your DigiCraft.space application using Docker and Docker Compose.

## 🚀 Quick Start

### Prerequisites
- Docker 20.10+ installed and running
- Docker Compose 2.0+ installed
- Git access to your repository
- Server with at least 2GB RAM and 20GB storage

### One-Command Deployment
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
PORT=5000
DOMAIN=digicraft.space
FRONTEND_URL=https://digicraft.space

# Security (CHANGE THESE!)
SESSION_SECRET=your-super-secret-session-key-here
POSTGRES_PASSWORD=your_secure_password
REDIS_PASSWORD=your_redis_password

# Database
DATABASE_URL=postgresql://digicraft_user:your_secure_password@postgres:5432/digicraft
```

### 3. Optional Services
Comment out services you don't need in `docker-compose.yml`:
```yaml
# Comment out if using external database
# postgres:

# Comment out if using memory store for sessions
# redis:

# Comment out if using external nginx
# nginx:
```

## 🚀 Deployment

### 1. Automated Deployment
```bash
# Make script executable
chmod +x deploy-docker.sh

# Deploy everything
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
curl http://localhost:5000/api/health

# Check all services
docker-compose ps
```

## 📊 Service Management

### **Application Commands**
```bash
# View status
./deploy-docker.sh status

# View logs
./deploy-docker.sh logs

# Restart services
./deploy-docker.sh restart

# Stop services
./deploy-docker.sh stop

# Clean up everything
./deploy-docker.sh clean
```

### **Docker Compose Commands**
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Restart specific service
docker-compose restart digicraft-app

# View logs
docker-compose logs -f digicraft-app

# Execute commands in container
docker-compose exec digicraft-app sh
```

## 🔧 Customization

### 1. Port Configuration
```yaml
# In docker-compose.yml
services:
  digicraft-app:
    ports:
      - "3000:5000"  # Change 3000 to your preferred port
```

### 2. Volume Mounts
```yaml
# Add custom volumes
volumes:
  - ./custom-config:/app/config
  - ./uploads:/app/uploads
  - ./logs:/app/logs
```

### 3. Environment Overrides
```bash
# Create environment-specific files
cp .env .env.production
cp .env .env.staging

# Use specific environment
docker-compose --env-file .env.production up -d
```

## 📈 Monitoring & Logs

### 1. Application Logs
```bash
# Follow application logs
docker-compose logs -f digicraft-app

# View recent logs
docker-compose logs --tail=100 digicraft-app

# Export logs to file
docker-compose logs digicraft-app > app.log
```

### 2. Database Logs
```bash
# PostgreSQL logs
docker-compose logs -f postgres

# Redis logs
docker-compose logs -f redis
```

### 3. System Monitoring
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
EXPOSE 5000
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Check what's using the port
sudo netstat -tulpn | grep :5000

# Kill process or change port
docker-compose down
# Edit docker-compose.yml to change port
docker-compose up -d
```

#### 2. Permission Denied
```bash
# Fix volume permissions
sudo chown -R $USER:$USER ./logs ./uploads

# Or run with sudo (not recommended for production)
sudo docker-compose up -d
```

#### 3. Database Connection Issues
```bash
# Check database health
docker-compose exec postgres pg_isready -U digicraft_user

# View database logs
docker-compose logs postgres

# Restart database
docker-compose restart postgres
```

#### 4. Build Failures
```bash
# Clean build cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache

# Check Dockerfile syntax
docker build -t test .
```

### Debug Commands
```bash
# Inspect container
docker inspect digicraft-app

# Execute shell in container
docker-compose exec digicraft-app sh

# View container processes
docker-compose exec digicraft-app ps aux

# Check container resources
docker stats digicraft-app
```

## 🔄 Updates & Maintenance

### 1. Application Updates
```bash
# Pull latest code
git pull origin main

# Rebuild and restart
./deploy-docker.sh deploy
```

### 2. Database Backups
```bash
# Backup PostgreSQL
docker-compose exec postgres pg_dump -U digicraft_user digicraft > backup.sql

# Backup Redis (if using)
docker-compose exec redis redis-cli --rdb /data/dump.rdb
```

### 3. Log Rotation
```bash
# Create logrotate configuration
sudo nano /etc/logrotate.d/digicraft

# Add configuration
/path/to/digicraft/logs/*.log {
    daily
    missingok
    rotate 7
    compress
    delaycompress
    notifempty
    create 644 digicraft digicraft
}
```

## 📚 Advanced Configuration

### 1. Production Optimizations
```yaml
# In docker-compose.yml
services:
  digicraft-app:
    deploy:
      resources:
        limits:
          memory: 1G
          cpus: '0.5'
        reservations:
          memory: 512M
          cpus: '0.25'
```

### 2. Load Balancing
```yaml
# Scale application instances
docker-compose up -d --scale digicraft-app=3

# Use external load balancer
# Configure nginx or haproxy
```

### 3. SSL/TLS Configuration
```yaml
# Add SSL certificates
volumes:
  - ./ssl:/etc/nginx/ssl:ro

# Configure nginx for HTTPS
# See nginx configuration examples
```

## 🎯 Production Checklist

- [ ] **Environment Variables**: All secrets updated and secure
- [ ] **Ports**: No conflicts with existing services
- [ ] **Volumes**: Persistent storage configured
- [ ] **Networks**: Proper isolation and security
- [ ] **Health Checks**: All services responding
- [ **Logs**: Logging and monitoring configured
- [ ] **Backups**: Database backup strategy in place
- [ ] **SSL**: HTTPS configuration (if using nginx)
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

For more information, visit [digicraft.space](https://digicraft.space) or contact us at hello@digicraft.space.
