pragma solidity ^0.4.22;
contract FT {
    
    //event NewCharacter(address addr,uint balance,bool available,uint masterID,uint value);
    event transferEvent(address indexedd_from,address indexedd_to,  string desc);
    
    
    //event workEvent(address indexedd_from,address indexedd_to, uint value, string desc);
    //event rewardEvent(address indexedd_from,address indexedd_to, uint value, string desc);
    
    
    struct User{
        address addr;
        uint balance;
        uint[] slavesID;
        bool available; //SendToWork
        uint masterID;
        uint Value;
        string ipfshash;
    }
    
    uint userID = 10000000;
    mapping(uint => User) public users;
    mapping(address => uint) public addrs;
    
    
    
    //1. add new users
    function createCharacter(string hash) public returns( uint ){
        address ad = msg.sender;
        addrs[ad] = userID;
        users[userID++] = User({
                               addr: ad,
                               balance: 1000,
                               slavesID: new uint[](0),
                               available: false,
                               masterID: 0, //
                               Value: 50,
                               ipfshash: hash
                               });
        return userID;
        //NewCharacter(msg.sender,1000,false,0,50);
    }
    
    //inputs only need slaves address;
    
    //2. buy friend!
    function buyFriend(address _slaveAD) public payable {
        uint _slaveID = addrs[_slaveAD];
        User storage _slave = users[_slaveID];
        uint price = _slave.Value;
        require(_slave.addr == _slaveAD);
        uint _buyerID = addrs[msg.sender];
        User storage _buyer= users[_buyerID];
        require(_buyer.addr == msg.sender);
        require(_buyer.balance>price);
        require(msg.value>price);
        if (_slave.masterID == 0){
            _slaveAD.transfer(price/4);
            _slave.balance +=price /4;
            
        }
        else{
            require(_slave.available == true);
            User storage per_master = users[_buyer.masterID];
            //transfer money
            per_master.addr.transfer(price *3/4);
            per_master.balance +=price *3/4;
            _slaveAD.transfer(price/4);
            _slave.balance +=price /4;
            //delete slavesID
            uint[] storage per_slave = per_master.slavesID;
            per_master.slavesID = remove(per_slave,_slaveID);
        }
        _buyer.balance -= price;
        //slave
        _slave.masterID = _buyerID;
        _slave.available = true;
        _slave.Value += 20;
        //master
        users[_buyerID].slavesID.push(_slaveID);
        // _buyerID.balance -= price;
        //BuyEvent(price);
        transferEvent(msg.sender,_slaveAD, "successfully buy a slave");
    }
    
    //3. send your slave to work!
    uint work_hour = 8;
    uint public finishtime;
    modifier afterworktime(){if (now >= finishtime) _; }
    function sendToWork(address _slaveAD) public{
        uint _slaveID = addrs[_slaveAD];
        User storage _slave = users[_slaveID];
        
        uint _masterID = addrs[msg.sender];
        User storage _master = users[_masterID];
        
        require(_slave.addr == _slaveAD);
        require(_master.addr == msg.sender);
        
        require(_slave.masterID == _masterID);
        
        //require(users[_masterID].addr == msg.sender);
        //require(users[_slaveID].masterID == _masterID);
        
        require(_slave.available == true);
        finishtime = now + work_hour * 1 hours;
        _slave.available = false;
    }
    function finishwork(address _slaveAD) public afterworktime payable{
        //uint work_reward = 20;
        uint _slaveID = addrs[_slaveAD];
        User storage _slave = users[_slaveID];
        
        uint _masterID = addrs[msg.sender];
        User storage _master = users[_masterID];
        
        require(_slave.addr == _slaveAD);
        require(_master.addr == msg.sender);
        require(_slave.masterID == _masterID);
        require(_slave.available == false);
        
        _slave.available = true;
        msg.sender.transfer(15);
        _slaveAD.transfer(5);
        _slave.balance +=5;
        _master.balance +=15;
        
        transferEvent(msg.sender,_slaveAD,  "successfully sent your slave to work and finish ");
    }
    
    // 4. reward slaves
    function rewardFriend(address _slaveAD) public payable{
        uint _slaveID = addrs[_slaveAD];
        User storage _slave = users[_slaveID];
        
        uint _userID = addrs[msg.sender];
        User storage _user = users[_userID];
        
        require(_slave.addr == _slaveAD);
        require(_user.addr == msg.sender);
        
        uint reward = msg.value;
        require(_user.balance>=reward);
        //address user_addr = users[_userID].addr;
        //require(user_addr == msg.sender);
        //uint _masterID = _slave.masterID;
        //User storage _master = users[_masterID];
        _slaveAD.transfer(reward);
        _slave.balance +=reward;
        transferEvent(msg.sender,_slaveAD,  "successfully reward a slave");
        
        
    }
    
    
    //5. get information of users(id , balance, matserID, []slavesID, available)
    function GetUser(address ad)  view public returns(uint id, uint balance, uint value,uint masterID,
                                                      uint[] slavesID, bool available){
        //address ad =msg.sender;
        id = addrs[ad];
        require(users[id].addr == ad);
        balance = users[id].balance;
        value = users[id].Value;
        masterID = users[id].masterID;
        slavesID = users[id].slavesID;
        available = users[id].available;
    }
    
    // get your balance
    function getBalance(address ad)  view public returns(uint balance){
        //address ad =msg.sender;
        uint id = addrs[ad];
        require(users[id].addr == ad);
        balance = users[id].balance;
        return balance;
    }
    
    function getValue(address ad)  view public returns(uint ){
        //address ad =msg.sender;
        uint id = addrs[ad];
        require(users[id].addr == ad);
        uint value = users[id].Value;
        return value;
    }
    
    // get IPFS hash value of introduction and name
    function getoneHash(address ad) view public returns(string hash) {
        uint id = addrs[ad];
        require(users[id].addr == ad);
        hash = users[id].ipfshash;
    }
    
    
    //delete Slave from slave’ former maser’ slavesID
    function remove(uint[] storage array,uint _slaveID) internal returns(uint[]) {
        uint index;
        for (uint i =0; i < array.length; i++){
            if(array[i]==_slaveID){
                index = i;
            }
        }
        
        if (index >= array.length || index ==0) return;
        
        for (uint j = index; j<array.length-1; j++){
            array[j] = array[j+1];
        }
        delete array[array.length-1];
        array.length --;
        return array;
    }
}
