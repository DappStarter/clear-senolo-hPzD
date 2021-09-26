require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strong razor rifle unique hundred light army gate'; 
let testAccounts = [
"0x200572b9b81d0ae482c3b0397a55eead6172e40ee47d01edafb4a17bb860fe1f",
"0xc5b326dad2635e026dd9e61453f7777de1fd9187ffd256cad3489f4de7555672",
"0x884420a7989ddadfc23a4cfa70888b032a2be10fa37a3a7ba7c1679b58015549",
"0x27e2593f444c90c9d3d2eb7bb86a152a74468efd16dfb2db4162db14959bbe33",
"0x68fb6f8d7fa51aa2bc4f6c4c7e30fc3ba6ddbcd94df36778fd98e1dcaec698a3",
"0x7e96002130f7677f1b8c442f9e983c14fe104f9222e294e4a0073587e6ee469d",
"0x9df1613e8db4296f4cbf817fc019da2d0623029aa83cb28047acc2fbc27434e4",
"0x54728382362e8cf1bb49d633608597978e48cbaee79510ea9a0866e4aa9b77f3",
"0xc5f29661d59086c542638d1e7deb3336b452ae648164f755f21b6d2eb9d3d052",
"0xb9ba4a41dff62cf23500518d1afb9f10f1de0e4b46eb07a0cd23ac4f8dd542c4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

