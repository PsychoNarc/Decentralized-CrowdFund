const path= require('path');
const fs= require('fs-extra');
const solc= require('solc');

const buildPath= path.resolve(__dirname, 'build');
fs.removeSync(buildPath);
console.log('Build removed.');

const campaignPath= path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source= fs.readFileSync(campaignPath, 'utf8');

const output= solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);
// console.log('Build built');
// console.log(output);
for(let contract in output){
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '')+'.json'),
        output[contract]
    );
}
console.log('Contract compiled.');