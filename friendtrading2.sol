pragma solidity ^0.4.20;
contract FriendTrading {
    
    event NewCharacter(uint userID,string name,string introduction,uint balance,uint[] slavesID,bool available,uint masterID,uint value);
    
    struct User{
        address addr;
        //string id;                               
        //string introduction;
        uint balance;
        uint[] slavesID;
        //for character
        //string id;
		//string name;        
        bool available; //SendToWork
        uint masterID;
        uint value; 
    }
    
	uint userID = 10000000;
	mapping(uint => User[]) public users;

    uint work_hour = 8;
	uint public finishtime;

    //1. add new user
    function createCharacter(string _name, string _introduction){
        users[userID++].push(User({
            address: msg.sender,
            introduction: _introduction,
            balance: 1000,
            slavesID: new uint[](0),
            name: _name,
            available: False,
            masterID: new uint, //
            value: 50
        }));          
        NewCharacter(userID,_name,_introduction,balance,slavesID,available,masterID,value);
    }

	//2. buy friend!
	function buyFriend(uint _buyerID, unit _slaveID) payable {
		//gas!
		unit price = users[_slaveId].value;
		require(users[_buyerID].addr == msg.sender);
		require(users[_buyerID].balance>price);
		require(msg.value>price);
		if (users[_slaveID.] masterID == 0){
			users[_buyerID].balance - = price;
			
		}
		else{
			required(available == True);
			per_master = users[_buyerID].masterID;
			//transfer money
			users[per_master].addr.transfer(price *3/4);
			users[_slaveID].addr.transfer(price/4);
			//delete slavesID
			uint[]  per_slave = users[per_master].slavesID;
			users[per_master].slavesID = remove(per_slave,_slaveID);
		}
		//slave
		users[_slaveID].masterID = _buyerID;
		users[_slaveID].available = true;
		users[_slaveID].value += 20;
		//master
		users[_buyerID].slavesID.push(_slaveID);
		// _buyerID.balance -= price;	
	}
	
    //3. send slave to work
    modifier afterworktime(){if (now >= finishtime) _; }
   
    function sendToWork(uint _masterID, uint _slaveID){
        require(users[_masterID].addr == msg.sender);
        require(_slaveID.masterID == _masterID);
        require(_slaveID.available == true);
        finishtime = now + work_hour * 1 hour;
        _slaveID.available = false;
    }
    
    function finishwork(uint _masterID, uint _slaveID) public afterworktime playable{
        //uint work_reward = 20;
        require(users[_masterID].addr == msg.sender);
        require(_slaveID.masterID == _masterID);
        require(_slaveID.available == false);
        _slaveID.available = true;
        users[_masterID].addr.transfer(15);
        users[_slaveID].addr.transfer(5);
    }


	# reward slave
	function rewardFriend(uint _slaveID, uint _userID) payable{
		require(users[_userID].balance>=reward);
		user_addr= users[_userID].addr;
		uint reward = msg.value;
		require(user_addr ==msg.sender);
		slave_M = users[_slaveID].masterID;
		
		if (user_addr ==slave_M){
			users[_slaveID].addr.transfer(reward)
		}
		else{
			users[_slaveID.]addr.transfer(reward*8/10)
			users[slave_M].addr.transfer(reward*2/10)
		}
	}

     //delete Slave from slave’ former maser’ slavesID
    function remove(uint[] array,uint _slaveID)  returns(uint[]) {
        uint index;
        for (uint i =0, i<array.length,i++){
            if(array[i]==_slaveID){
                index = i;
            }
        }
        
        if (index >= array.length || index ==0) return;

        for (uint j = index; j<array.length-1; j++){
            array[j] = array[j+1];
        }
        delete array[array.length-1];
        array.length--;
        return array;
    }


}

