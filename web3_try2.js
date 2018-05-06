

// event
// turn to id
// ipfs
// modify work time


// 1 new Nodejs
$ mkdir web3test && cd web3test
$ npm init

// 2.1 load web3.js
$ npm install web3 --save

// 2.2 load ipfs-mini
$ npm install --save ipfs-mini

// 3.1 new and connect web3
const Web3 = require("web3");
let web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
// var web3 = new Web3();
// web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));

// 3.2 new and connect IPFS
const IPFS = require("ipfs-mini");
let ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});


// 4 get contract
const abi = [{...}];
const address = "....";
const ftContract = web3.eth.contract(abi).at(address);

// 5 function
let account_one = web3.eth.accounts[0];
let account_two = web3.eth.accounts[1];
let account_three = web3.eth.accounts[2];

// 5.1 add new user

//Intro_json = {name: ;Introduciton: ;};  //??
function add_newUser(addr,Intro_json){
	let save_hash = saveHash(Intro_json);	
	ftContract.createCharacter(save_hash,{from: addr});
	let UserInfo_json = get_user(addr);
	return UserInfo_json;
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

// 5.6 hash
//userInfo_json = {id: ;name: ;Introduciton: ;};
function saveHash(userInfo_json){
	ipfs.addJSON(userInfo_json, (err, hash) => {
		if (err) {
			return console.log(err);
		}
		console.log(“HASH:”, hash);
		return hash;
	});
}

function getData(hash){
	ipfs.catJSON(hash, (err, data) => {
		if (err) {
			return console.log(err);
		} 
		console.log(“DATA:”, data);
		return data;
	});
}

// 5.7 getUser
function get_user(addr){
	let result_1 = ftContract.GetUser.call(addr); //??
	let hash = ftContract.GetoneHash.call(addr);
	soli_Info_json = JSON.stringify(result_1);
	ipfs_Intro_json = getData(hash);
	//var obj = Object.assign(o1, o2, o3);
	//userInfo = [soli_Info,ipfs_Intro];
	userInfo_json = $.extend({},soli_Info_json, ipfs_Intro_json);
	if (jQuery.isEmptyObject(userInfo_json)){
		return false;
	}
	else {
	return userInfo_json;//userInfo['id'],['balance'],['value'],['masterID'],['slavesID'],['available']
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
