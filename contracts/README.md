# Ethereum Contracts (Hardhat)

This package provides ERC-20 and ERC-721 contracts and deploy scripts for launching tokens on Ethereum (e.g., Sepolia testnet).

## Setup
1. Copy `.env.example` to `.env` and set:
   - `ETH_RPC_URL` (e.g., Alchemy/Infura Sepolia URL)
   - `PRIVATE_KEY` (deployer account private key)
   - Optional: `TOKEN_NAME`, `TOKEN_SYMBOL`, `INITIAL_SUPPLY`, `BASE_TOKEN_URI`
2. Install dependencies:
   ```bash
   cd contracts
   npm install
   ```

## Compile
```bash
npm run compile
```

## Deploy
ERC-20:
```bash
npm run deploy:erc20
```

ERC-721:
```bash
npm run deploy:erc721
```

Notes:
- Ensure your deployer has test ETH on Sepolia.
- Adjust network or script env vars as needed.