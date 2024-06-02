require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

/*
Videos for deploying hardhat localhost
https://www.youtube.com/watch?v=dgdTyTl2Z18
https://www.youtube.com/watch?v=v4KIZsr7cBc
https://www.youtube.com/watch?v=yD3BsYlRLA4&t=45s
*/

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337,
      // accounts provided by hardhat
    },
  }
};
