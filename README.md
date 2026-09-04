# docker compose practice

## Manual Installation
```bash
git clone https://github.com/sujalc879/docker-compose-practice.git
cd docker-compose-practice
bun install
docker run -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres
bun run dev
```

## Docker

## Docker Compose

## Run locally

```bash
bun run dev:composer
```

This builds the app and starts it with Composer. PostgreSQL projects get a local Prisma Postgres database and apply the contract automatically.

## Deploy

```bash
bun run deploy
```

The deploy script builds the framework output, provisions Prisma Postgres when selected, applies migrations, and deploys the app to Prisma Compute.

The starter users are inserted idempotently from `src/prisma/seed.ts` on the first database query through the Composer service binding.


## Prisma

- Contract: `src/prisma/contract.prisma`
- Prisma and Composer config: `prisma.config.ts`
- Composer app: `module.ts` and `service.ts`

After changing the contract, run:

```bash
bun run contract:emit
```

To use the framework's development server directly, run `bun run dev`. This direct mode requires `DATABASE_URL`.
# docker-compose-practice
