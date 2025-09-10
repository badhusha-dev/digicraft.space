# Multi-stage build for React app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (include devDependencies for build tools like Vite)
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage with simple HTTP server
FROM node:18-alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Set working directory
WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app/client/dist ./dist

# Install serve globally for serving static files
RUN npm install -g serve

# Create health check file
RUN echo '{"status":"healthy","timestamp":"'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"}' > ./dist/health

# Expose port 6060
EXPOSE 6060

# Start the HTTP server
CMD ["serve", "-s", "dist", "-l", "6060"]
