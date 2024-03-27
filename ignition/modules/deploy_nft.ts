import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NFTModule = buildModule("NFTModule", (m) => {
  // Assuming the NFT contract doesn't require constructor arguments.
  // If it does, you can get them similar to how `unlockTime` and `lockedAmount` are retrieved in the LockModule.
  const nft = m.contract("NFT", []);

  return { nft };
});

export default NFTModule;
