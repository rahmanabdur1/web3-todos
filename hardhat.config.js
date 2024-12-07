require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY_URL, // Use Rinkeby URL from .env
      accounts: [process.env.ACCOUNT_PRIVATE_KEY], // Private key from .env
    },
    mainnet: {
      url: process.env.ALCHEMY_MAINNET_URL, // Use Mainnet URL from .env
      accounts: [process.env.ACCOUNT_PRIVATE_KEY], // Private key from .env
    },
  },
};
