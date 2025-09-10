@echo off
setlocal enabledelayedexpansion

REM DigiCraft Frontend Docker Deployment Script for Windows

echo 🚀 Starting DigiCraft Frontend Docker Deployment...
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker is not installed. Please install Docker Desktop first.
    pause
    exit /b 1
)

REM Check if Docker Compose is installed
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker Compose is not installed. Please install Docker Compose first.
    pause
    exit /b 1
)

echo [INFO] Docker and Docker Compose are available

REM Stop and remove existing containers
echo [INFO] Stopping existing containers...
docker-compose down --remove-orphans 2>nul

REM Remove existing images to ensure fresh build
echo [INFO] Removing existing images...
docker rmi digicraft-digicraft-app 2>nul

REM Build the Docker image
echo [INFO] Building Docker image...
docker-compose build --no-cache

REM Start the services
echo [INFO] Starting services...
docker-compose up -d

REM Wait for the container to be ready
echo [INFO] Waiting for container to be ready...
timeout /t 10 /nobreak >nul

REM Check if the container is running
docker ps | findstr "digicraft-frontend" >nul
if errorlevel 1 (
    echo [ERROR] Container failed to start
    docker-compose logs
    pause
    exit /b 1
) else (
    echo [SUCCESS] Container is running successfully!
)

REM Health check
echo [INFO] Performing health check...
curl -f http://localhost:6060/health >nul 2>&1
if errorlevel 1 (
    echo [WARNING] Health check failed, but container is running
) else (
    echo [SUCCESS] Health check passed!
)

echo.
echo [SUCCESS] 🎉 DigiCraft Frontend is now running!
echo.
echo 📱 Access your application at:
echo    http://localhost:6060
echo.
echo 🔧 Useful commands:
echo    View logs:     docker-compose logs -f
echo    Stop app:      docker-compose down
echo    Restart app:   docker-compose restart
echo    Update app:    deploy-docker.bat
echo.
echo [INFO] Deployment completed successfully!
pause
