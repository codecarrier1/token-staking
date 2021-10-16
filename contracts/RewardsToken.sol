// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardsToken is ERC20 {
    uint256 public initialSupply = 10000000000000000000000000000;

    constructor() public ERC20("My Reward Token", "MRT") {
        _mint(msg.sender, initialSupply);
    }
}