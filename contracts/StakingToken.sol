// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StakingToken is ERC20 {
    uint256 public initialStakingTokenSupply = 10000000000000000000000000000;

    constructor() public ERC20("My Staking Token", "MST") {
        _mint(msg.sender, initialStakingTokenSupply);
    }
}