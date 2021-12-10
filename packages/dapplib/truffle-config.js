require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'idea kitten fresh skull drift rebel stereo provide install only flat genuine'; 
let testAccounts = [
"0x45d3ec07ccc366b5a805e137a507bc9ab3e157ac87f918a297972120422dcd7e",
"0x58420dfb13e3ac22065ba5e426894ac97ea4fd25aebc298c7f993af2af1157fa",
"0x9acdd010b643f3031962dd9aeff5e4829b7a9382c15bfec31dafac9ea60c99b2",
"0xa84e3b32058914d3dad259872cf874b1e8a1e7cfd3042dcba9ff4bcaf6ecb5a0",
"0x92728c218bffd76c10a5560910320d2281a8e6411909d5f765cebd3e25241598",
"0xdc8d1908f4ccfe549b216db664f2a46e966bc3c844ce339da5baf9538c9366cd",
"0xb47a83d876ecd793e2b73c2bd77bc04323a98caab95fef44605199c3bd9f0284",
"0x6d2a74361c30724da3229145a4548af61198f04774db7569fc50a6dfe88c1390",
"0xfec7819e92a823c5a9f9280411694ba755133184ae656521aa1c250ca7036d5b",
"0x4fd30e509e7964c7c2a28919cc4cab8bb7064cc0a31f6695af4c9bcc7ec52071"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


