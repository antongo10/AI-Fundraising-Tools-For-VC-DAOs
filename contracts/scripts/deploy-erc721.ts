import { ethers } from "hardhat";

async function main() {
  const name = process.env.TOKEN_NAME || "FundraisingNFT";
  const symbol = process.env.TOKEN_SYMBOL || "FNFT";
  const base = process.env.BASE_TOKEN_URI || "https://example.com/metadata/";

  const [deployer] = await ethers.getSigners();
  console.log("Deploying ERC721 with account:", deployer.address);

  const ERC721Factory = await ethers.getContractFactory("ERC721Token");
  const nft = await ERC721Factory.deploy(name, symbol, base);
  await nft.waitForDeployment();

  const address = await nft.getAddress();
  console.log("ERC721 deployed at:", address);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});