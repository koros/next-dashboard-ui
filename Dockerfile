# Dockerfile

# --- Base image for dependencies
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# --- Development image
FROM base AS dev
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

# --- Production image
FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS prod
WORKDIR /app
COPY --from=build /app/.next .next
COPY --from=build /app/public public
COPY --from=build /app/package*.json ./
RUN npm install --omit=dev
EXPOSE 3000
CMD ["npm", "start"]
