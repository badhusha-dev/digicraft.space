# DigiCraft.space Deployment Guide

This guide provides step-by-step instructions for deploying your DigiCraft.space application to a production server and configuring it with your domain.

## 🚀 Prerequisites

### Server Requirements
- **Operating System**: Ubuntu 20.04+ or CentOS 8+ (recommended)
- **RAM**: Minimum 2GB, recommended 4GB+
- **Storage**: Minimum 20GB SSD
- **CPU**: 2+ cores recommended
- **Domain**: digicraft.space (already configured)

### Software Requirements
- Node.js 18+ 
- Nginx (for reverse proxy)
- PM2 (for process management)
- Certbot (for SSL certificates)
- Git

## 📋 Pre-Deployment Checklist

- [ ] Domain DNS configured to point to your server
- [ ] Server access (SSH keys or password)
- [ ] Database credentials (if using PostgreSQL)
- [ ] Environment variables prepared
- [ ] SSL certificate ready (Let's Encrypt)

## 🛠 Server Setup

### 1. Initial Server Configuration

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install essential packages
sudo apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PM2 globally
sudo npm install -g pm2

# Install Certbot for SSL
sudo apt install -y certbot python3-certbot-nginx
```

### 2. Firewall Configuration

```bash
# Configure UFW firewall
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw allow 22
sudo ufw enable
```

### 3. Create Application User

```bash
# Create dedicated user for the application
sudo adduser digicraft
sudo usermod -aG sudo digicraft

# Switch to digicraft user
su - digicraft
```

## 📦 Application Deployment

### 1. Clone and Setup Application

```bash
# Clone your repository
git clone https://github.com/your-username/digicraft-space.git
cd digicraft-space

# Install dependencies
npm install

# Create production environment file
cp .env.example .env
```

### 2. Environment Configuration

Create `.env` file in the root directory:

```bash
# Production Environment
NODE_ENV=production
PORT=3000

# Database Configuration (if using PostgreSQL)
DATABASE_URL="postgresql://username:password@localhost:5432/digicraft"

# Session Secret
SESSION_SECRET="your-super-secret-session-key-here"

# Domain Configuration
DOMAIN="digicraft.space"
FRONTEND_URL="https://digicraft.space"
```

### 3. Build Application

```bash
# Build the application
npm run build

# Verify build output
ls -la dist/
ls -la client/dist/
```

### 4. PM2 Configuration

Create `ecosystem.config.js` in the root directory:

```javascript
module.exports = {
  apps: [{
    name: 'digicraft-space',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    max_memory_restart: '1G',
    restart_delay: 4000,
    max_restarts: 10
  }]
};
```

### 5. Start Application with PM2

```bash
# Create logs directory
mkdir logs

# Start application
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## 🌐 Nginx Configuration

### 1. Create Nginx Site Configuration

Create `/etc/nginx/sites-available/digicraft.space`:

```nginx
server {
    listen 80;
    server_name digicraft.space www.digicraft.space;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name digicraft.space www.digicraft.space;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/digicraft.space/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/digicraft.space/privkey.pem;
    
    # SSL Security Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;
    
    # Client Max Body Size
    client_max_body_size 10M;
    
    # Proxy to Node.js Application
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
    
    # Static Assets Caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        proxy_pass http://localhost:3000;
    }
    
    # API Routes
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 2. Enable Site and Test Configuration

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/digicraft.space /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

## 🔒 SSL Certificate Setup

### 1. Obtain SSL Certificate

```bash
# Stop Nginx temporarily
sudo systemctl stop nginx

# Obtain certificate
sudo certbot certonly --standalone -d digicraft.space -d www.digicraft.space

# Start Nginx
sudo systemctl start nginx
```

### 2. Auto-Renewal Setup

```bash
# Test auto-renewal
sudo certbot renew --dry-run

# Add to crontab for auto-renewal
sudo crontab -e

# Add this line:
0 12 * * * /usr/bin/certbot renew --quiet
```

## 🗄 Database Setup (Optional)

### PostgreSQL Installation

```bash
# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Start and enable PostgreSQL
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql

CREATE DATABASE digicraft;
CREATE USER digicraft_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE digicraft TO digicraft_user;
ALTER USER digicraft_user CREATEDB;
\q

# Update your .env file with the database credentials
```

## 📊 Monitoring and Logs

### 1. PM2 Monitoring

```bash
# View application status
pm2 status

# View logs
pm2 logs digicraft-space

# Monitor resources
pm2 monit
```

### 2. Nginx Logs

```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

### 3. Application Logs

```bash
# View application logs
tail -f logs/combined.log
tail -f logs/err.log
tail -f logs/out.log
```

## 🔄 Deployment Updates

### 1. Update Application

```bash
# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build application
npm run build

# Restart application
pm2 restart digicraft-space

# Save PM2 configuration
pm2 save
```

### 2. Rollback (if needed)

```bash
# List PM2 processes
pm2 list

# Restart to previous version
pm2 restart digicraft-space

# Or use PM2 rollback
pm2 rollback digicraft-space
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Check what's using port 3000
sudo netstat -tulpn | grep :3000

# Kill process if needed
sudo kill -9 <PID>
```

#### 2. Nginx Configuration Errors
```bash
# Test configuration
sudo nginx -t

# Check syntax
sudo nginx -T
```

#### 3. SSL Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew manually if needed
sudo certbot renew
```

#### 4. PM2 Process Issues
```bash
# Restart PM2 daemon
pm2 kill
pm2 start ecosystem.config.js
pm2 save
```

## 📈 Performance Optimization

### 1. Nginx Optimization

```nginx
# Add to nginx.conf
worker_processes auto;
worker_connections 1024;
keepalive_timeout 65;
client_body_buffer_size 128k;
client_max_body_size 10m;
```

### 2. Node.js Optimization

```bash
# Set Node.js environment variables
export NODE_OPTIONS="--max-old-space-size=2048"
export UV_THREADPOOL_SIZE=64
```

### 3. Database Optimization (if using PostgreSQL)

```sql
-- Optimize PostgreSQL
ALTER SYSTEM SET shared_buffers = '256MB';
ALTER SYSTEM SET effective_cache_size = '1GB';
ALTER SYSTEM SET maintenance_work_mem = '64MB';
ALTER SYSTEM SET checkpoint_completion_target = 0.9;
ALTER SYSTEM SET wal_buffers = '16MB';
ALTER SYSTEM SET default_statistics_target = 100;
```

## 🔍 Health Checks

### 1. Application Health

```bash
# Check if application is responding
curl -I https://digicraft.space

# Check API endpoints
curl https://digicraft.space/api/health
```

### 2. Server Health

```bash
# Check system resources
htop
df -h
free -h

# Check service status
sudo systemctl status nginx
sudo systemctl status postgresql
pm2 status
```

## 📞 Support and Maintenance

### Regular Maintenance Tasks

- [ ] **Daily**: Check application logs and server resources
- [ ] **Weekly**: Review error logs and performance metrics
- [ ] **Monthly**: Update system packages and security patches
- [ ] **Quarterly**: Review and update SSL certificates
- [ ] **Annually**: Review and update deployment procedures

### Contact Information

- **Technical Support**: hello@digicraft.space
- **Emergency**: [Your emergency contact]
- **Documentation**: [Link to your documentation]

---

## 🎯 Quick Deployment Checklist

- [ ] Server setup and configuration
- [ ] Application deployment with PM2
- [ ] Nginx configuration and SSL setup
- [ ] Domain DNS configuration
- [ ] Database setup (if applicable)
- [ ] Monitoring and logging setup
- [ ] Performance optimization
- [ ] Health checks and testing
- [ ] Documentation and team training

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Maintained by**: DigiCraft.space Team

For more information, visit [digicraft.space](https://digicraft.space) or contact us at hello@digicraft.space.
