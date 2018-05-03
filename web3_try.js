
// 1 new Nodejs
$ mkdir web3test && cd web3test
$ npm init

// 2 load web3.js
$ npm install web3 --save

// 3 new and connect web3
let Web3 = require("web3");
let web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
# var web3 = new Web3();
# web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));

// 4 get contract
const abi = [{...}];
const address = "....";
const ftContract = web3.eth.contract(abi).at(address);

// 5 function
let account_one = web3.eth.accounts[0];
let account_two = web3.eth.accounts[1];
let account_three = web3.eth.accounts[2];

// 5.1 add new user
ftContract.createCharacter({from: account_one});

// 5.2 add buy_friend
ftContract.buyFriend.sendTransaction(account_two,{from: account_one});

// 5.3 senttoWork
ftContract.sendToWork(account_two,{from: account_one});

// 5.4 finishWork
ftContract.finishwork(account_two,{from: account_one});

// 5.5 rewardFriend
ftContract.rewardFriend(account_two,{from: account_three});

let events = ftContract.allEvents();
// watch for changes
events.watch(function (error, result){
	if (!error) {
		for ele in result:	
			console.log(ele + ": " + result[ele]);
	}
	else {
        console.log(err);
    }
    events.stopWatching();
});
