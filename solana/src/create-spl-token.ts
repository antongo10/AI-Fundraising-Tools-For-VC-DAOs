import "dotenv/config";
import bs58 from "bs58";
import { Keypair, Connection, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";
import { createMint, getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";

async function main() {
  const secret = process.env.SOLANA_SECRET_KEY_BASE58;
  if (!secret) throw new Error("SOLANA_SECRET_KEY_BASE58 missing in env");

  const secretKey = bs58.decode(secret);
  const payer = Keypair.fromSecretKey(secretKey);

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  // Airdrop 1 SOL if needed
  const bal = await connection.getBalance(payer.publicKey);
  if (bal < 0.2 * LAMPORTS_PER_SOL) {
    const sig = await connection.requestAirdrop(payer.publicKey, 1 * LAMPORTS_PER_SOL);
    await connection.confirmTransaction(sig, "confirmed");
  }

  const decimals = Number(process.env.MINT_DECIMALS || 9);
  const initialSupply = BigInt(process.env.MINT_INITIAL_SUPPLY || "1000000000");

  const mint = await createMint(connection, payer, payer.publicKey, null, decimals);
  const ata = await getOrCreateAssociatedTokenAccount(connection, payer, mint, payer.publicKey);
  await mintTo(connection, payer, mint, ata.address, payer.publicKey, Number(initialSupply));

  console.log("SPL token mint:", mint.toBase58());
  console.log("Associated token account:", ata.address.toBase58());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});