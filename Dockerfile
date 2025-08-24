# DigiCraft.space Dockerfile
# Multi-stage build for production deployment

# Stage 1: Build the client application
FROM node:18-alpine AS client-builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY client/package*.json ./client/

# Install dependencies
RUN npm ci --only=production --ignore-scripts
RUN cd client && npm ci --only=production --ignore-scripts

# Copy source code
COPY . .

# Build client application
RUN npm run build

# Stage 2: Build the server application
FROM node:18-alpine AS server-builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build server application
RUN npm run build

# Stage 3: Production runtime
FROM node:18-alpine AS production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create app user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S digicraft -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production --ignore-scripts && npm cache clean --force

# Copy built applications from previous stages
COPY --from=client-builder --chown=digicraft:nodejs /app/dist/public ./dist/public
COPY --from=server-builder --chown=digicraft:nodejs /app/dist/index.js ./dist/index.js

# Copy shared schemas
COPY --from=server-builder --chown=digicraft:nodejs /app/shared ./shared

# Create necessary directories
RUN mkdir -p logs && chown -R digicraft:nodejs logs

# Switch to non-root user
USER digicraft

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })" || exit 1

# Start the application
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/index.js"]
