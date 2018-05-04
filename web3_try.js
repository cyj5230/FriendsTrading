

// event
// turn to id
// ipfs
// modify work time


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
function add_newUser(addr){
	ftContract.createCharacter({from: addr});
	let newUserInfo = get_user(addr);
	return newUserInfo;
}

// 5.2 add buy_friend
function buy_friend(addr,slave_addr){
	ftContract.buyFriend(slave_addr,{from: addr});
}

// 5.3 Work
function slave_work(addr,slave_addr){
	ftContract.sendToWork(slave_addr,{from: addr});
	ftContract.finishwork(slave_addr,{from: addr});
}
// 5.5 rewardFriend
function reward(addr,user){
	ftContract.rewardFriend(user,{from: addr});
}

// 5.6 getUser
function get_user(addr){
	let result = ftContract.GetUser.call(addr); //??
	userInfo = JSON.stringify(result);
	if (jQuery.isEmptyObject(userInfo)){
		return false;
	}
	else {
	return userInfo;//userInfo['id'],['balance'],['value'],['masterID'],['slavesID'],['available']
	}
}

// get all user info list
function get_allUsers(){
	let userInfo_dict = new Array();
	let account_list = web3.eth.accounts;
	for (account in account_list){
		userInfo_dict[account] = get_user(account);
	}
	return userInfo_dict;
}


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
