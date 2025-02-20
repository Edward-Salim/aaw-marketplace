FROM node:18.18.2 AS builder

WORKDIR /tenant-service

COPY package.json ./

# Install pnpm
RUN npm install -g pnpm typescript

# Install dependencies
RUN pnpm install

# Copy source
COPY . .

# Build
RUN pnpm run build

# Production image
FROM node:18.18.2-slim

ENV NODE_ENV=production
ENV PORT=5004

WORKDIR /tenant-service

COPY --from=builder /tenant-service/dist ./dist
COPY --from=builder /tenant-service/package.json ./package.json

RUN npm install --only=production

EXPOSE 5004

CMD ["node", "dist/server.js"]