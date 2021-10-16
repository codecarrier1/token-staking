async function main() {
  const StakingTokenContract = await ethers.getContractFactory("StakingToken");
  const stakingToken = await StakingTokenContract.deploy();
  console.log(
    "Staking Token Contract deployed to address:",
    stakingToken.address
  );

  const RewardsTokenContract = await ethers.getContractFactory("RewardsToken");
  const rewardsToken = await RewardsTokenContract.deploy();
  console.log(
    "Rewards Token Contract deployed to address:",
    rewardsToken.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
