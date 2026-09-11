FROM oven/bun:1.4.2-alpine

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install
COPY . .

ENV DATABASE_URL="postgresql://postgres:password@host.docker.internal:5432/postgres"
ENV PORT=3000

RUN bun run contract:emit

EXPOSE 3000

CMD ["sh", "-c", "bun run db:init && bun run dev"]