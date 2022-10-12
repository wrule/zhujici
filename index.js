const ethers = require('ethers');
let wallet = new ethers.Wallet.createRandom();
console.log(wallet.privateKey);
console.log(wallet.mnemonic);
