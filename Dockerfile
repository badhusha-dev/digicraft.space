# DigiCraft.space Dockerfile
# Multi-stage build for production deployment

# Stage 1: Build the client application
FROM node:20-alpine AS client-builder

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install root dependencies
RUN npm install

# Copy source code
COPY . .

# Install client dependencies and build
RUN cd client && npm install
RUN npm run build

# Stage 2: Production runtime
FROM node:20-alpine AS production

# Create app user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S digicraft -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including tsx for TypeScript execution)
RUN npm install && npm cache clean --force

# Copy built client from previous stage
COPY --from=client-builder --chown=digicraft:nodejs /app/client/dist ./client/dist

# Copy server source code
COPY --chown=digicraft:nodejs server ./server

# Create necessary directories
RUN mkdir -p logs && chown -R digicraft:nodejs logs

# Switch to non-root user
USER digicraft

# Expose port
EXPOSE 5000

# Start the application with tsx
CMD ["npx", "tsx", "server/index.ts"]
