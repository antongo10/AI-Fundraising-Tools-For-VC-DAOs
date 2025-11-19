# AI Fundraising Tools for VC & DAOs

A full-stack toolkit to streamline fundraising operations for venture capital firms and DAOs. This monorepo includes a web frontend, backend API, smart contracts, and Solana tooling to support workflows such as deal intake, investor relations, on-chain fundraising, and analytics.

## Overview

This repository provides:
- A modern web frontend to manage fundraising pipelines and investor communication
- A backend API with database (Prisma) for workflows and data persistence
- Smart contracts (Hardhat) for on-chain fundraising and tokenized agreements
- Solana tooling for program interactions and off-chain services
- Docker Compose for easy local orchestration

## Monorepo Structure

```
AI_Fundraising_Tools_For_VC_DAOs/
├── backend/       # Node + Prisma API (TypeScript)
├── frontend/      # Next.js web app (TypeScript)
├── contracts/     # Hardhat smart contracts (TypeScript)
├── solana/        # Solana scripts/tools (TypeScript)
├── docker-compose.yml
└── instructions.md
```

## Quick Start (All-in-One with Docker)

Prerequisites:
- Docker Desktop (or Docker Engine)

Steps:
1. From the repo root:
   - Copy any required environment files: `cp backend/.env.example backend/.env` (and similarly for `contracts/.env.example`, `solana/.env.example` if needed)
2. Start services:
   - `docker compose up --build`
3. Open the frontend:
   - Visit `http://localhost:3000` (or the port defined in docker-compose)

## Per-Package Development

### Backend (API)
Location: `backend/`

Prerequisites:
- Node.js 18+
- PostgreSQL (or the configured database)

Setup:
- `cp .env.example .env`
- `npm install`
- Initialize DB (if applicable):
  - `npx prisma migrate dev`

Run:
- `npm run dev` (typical dev server)

Scripts (common examples, check `package.json`):
- `npm run build`
- `npm run start`
- `npm run prisma:studio` (if present)

### Frontend (Web)
Location: `frontend/`

Prerequisites:
- Node.js 18+

Setup:
- `npm install`

Run:
- `npm run dev`
- Visit `http://localhost:3000`

Build:
- `npm run build`
- `npm run start`

### Smart Contracts (Hardhat)
Location: `contracts/`

Prerequisites:
- Node.js 18+
- A configured Ethereum network (local or testnet)

Setup & Test:
- `npm install`
- `npx hardhat test`

Deploy (example):
- `npx hardhat run scripts/deploy.ts --network <network>`

### Solana Tooling
Location: `solana/`

Prerequisites:
- Node.js 18+
- Solana CLI (optional depending on workflow)

Setup & Run:
- `cp .env.example .env`
- `npm install`
- `npm run dev` (or the relevant script)

## Configuration

Environment variables are required by multiple packages. Use the provided `.env.example` files as a starting point:
- `backend/.env.example`
- `contracts/.env.example`
- `solana/.env.example`

Copy to `.env` and fill in secrets and connection strings.

## Testing

- Backend: `npm run test` (if configured)
- Contracts: `npx hardhat test`
- Frontend: `npm run test` (if configured)

## Deployment

Production deployment will depend on your infra (Kubernetes/Docker/Serverless). As a baseline:
- Build frontend: `npm run build` then serve via a node process or a static host
- Build backend: `npm run build` then `npm run start`
- Deploy contracts via Hardhat and record addresses

## Troubleshooting

- If Prisma can't connect, validate `DATABASE_URL` in `backend/.env`
- If contracts fail to deploy, check network config in `contracts/hardhat.config.ts`
- For Solana scripts, ensure your keypair and RPC URLs are configured

## Contributing

Pull requests are welcome. Please:
- Follow the existing TypeScript and ESLint conventions
- Add tests where practical
- Update related docs when changing interfaces

## License

This repository may contain proprietary components. If a license file is present, refer to it; otherwise consult the maintainers before redistribution.

Smart-contract tooling and DApps to launch tokens and NFT-based fundraising campaigns for VC funds and DAOs on Solana & Ethereum. Includes launch configuration, whitelist management, vesting, and investor analytics.
