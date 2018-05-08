let FT = artifacts.require("FT");
const hash = "QmW1ZbVSoq8SBdfcCeGaMSnZPNiG3Aa5N5gw4CxkdyJQ9X";
contract('FT', function(accounts){
    it("account 1 has been created successfully",async function () {
        let instance = await FT.deployed();
        await instance.createCharacter.sendTransaction(hash,{from: accounts[0]});
        let balance = await instance.getBalance.call(accounts[0]);
        let account_balance = balance.toNumber();
        assert.equal(account_balance,1000 ,"1000 wasn't in the first account");
    });
    
    it("account 1 has bought account 2 without master successfully", async function () {
       let instance = await FT.deployed();
       let amount = 20;
       await instance.createCharacter.sendTransaction(hash,{from: accounts[0]});
       await instance.createCharacter.sendTransaction(hash,{from: accounts[1]});
       let value = await instance.getValue.call(accounts[1]);
       let one_start_value = value.toNumber();
       await instance.buyFriend.sendTransaction(accounts[1],{value: web3.toWei(0.002,'ether'),from: accounts[0]});
       value = await instance.getValue.call(accounts[1]);
       let one_end_value = value.toNumber();
       assert.equal(one_end_value, one_start_value + amount, "Amount wasn't correctly taken from the sender");
       });
         
    it("account 1 has bought account 2 with a master successfully", async function () {
       let instance = await FT.deployed();
       let amount = 20;
       await instance.createCharacter.sendTransaction(hash,{from: accounts[0]});
       await instance.createCharacter.sendTransaction(hash,{from: accounts[1]});
       await instance.createCharacter.sendTransaction(hash,{from: accounts[4]});
       let value = await instance.getValue.call(accounts[1]);
       let one_start_value = value.toNumber();
       await instance.buyFriend.sendTransaction(accounts[1],{value: web3.toWei(0.002,'ether'),from: accounts[0]});
       value = await instance.getValue.call(accounts[1]);
       let one_mid_value = value.toNumber();
       await instance.buyFriend.sendTransaction(accounts[1],{value: web3.toWei(0.002,'ether'),from: accounts[4]});
       value = await instance.getValue.call(accounts[1]);
       let one_end_value = value.toNumber();
       assert.equal(one_mid_value, one_start_value + amount, "Amount wasn't correctly taken from the sender");
       assert.equal(one_end_value, one_mid_value + amount, "Amount wasn't correctly taken from the sender");
       });
       
    
    it("account 1 has reward account 2 successfully", async function ()  {
        let instance = await FT.deployed();
        let reward = 200;
        await instance.createCharacter.sendTransaction(hash,{from: accounts[2]});
        await instance.createCharacter.sendTransaction(hash,{from: accounts[3]});
        let balance = await instance.getBalance.call(accounts[3]);
        let one_start_balance = balance.toNumber();
        await instance.rewardFriend.sendTransaction(accounts[3],reward,{value: web3.toWei(0.002,'ether'),from: accounts[2]});
        balance = await instance.getBalance.call(accounts[3]);
        let one_end_balance = balance.toNumber();
        assert.equal(one_end_balance, one_start_balance + reward, "Amount wasn't correctly taken from the sender");
    });
         
});
        
