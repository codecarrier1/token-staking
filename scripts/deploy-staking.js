async function main() {
  const Staking = await ethers.getContractFactory("StakingRewards");

  // Start deployment, returning a promise that resolves to a contract object
  const staking = await Staking.deploy(
    "0xcBe5acb80dda8b409E1E077f684fc9AC600043F7",
    "0xc1B96512Cd215F2D3Ca10D36b19a654A361b27c6"
  );
  console.log("Staking Contract deployed to address:", staking.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
