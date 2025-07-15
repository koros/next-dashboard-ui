# Lama Dev School Management Dashboard

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Lama Dev Youtube Channel](https://youtube.com/lamadev) 
- [Next.js](https://nextjs.org/learn)

## 🚀 Docker & Docker Compose Setup
This project is containerized using Docker and supports both development (with hot reloading) and production builds via Docker Compose.

## 📁 Project Structure Overview
```
.
├── Dockerfile
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── .env.dev
├── .env.prod
├── nginx/
│   └── default.conf (optional, for production reverse proxy)
├── ...

```

### 🔧 Dockerfile
We use a multi-stage Dockerfile to support development and production builds from a single definition.

Dev stage: Runs npm run dev and supports live-reloading.

Prod stage: Builds and serves the production-optimized Next.js app using npm start.

### 🧪 Development Setup (with hot reload)
#### 1. Create .env.dev
```
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

#### 2. Run the container
``` docker compose -f docker-compose.dev.yml --env-file .env.dev up --build ```
#### 3. Access the app
Visit http://localhost:3000 in your browser. Changes to files will automatically reload the app.

