const Hello = artifacts.require("./Hello");

contract('Hello', (accounts) => {

  it('should put 10000 coins in the first account', async () => {
    const helloInstance = await Hello.deployed();
    const balance = await helloInstance.balance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });


  it('should set greeting', async () => {
    const helloInstance = await Hello.deployed();
    await helloInstance.setGreeting("Yo", {from: accounts[0] });
    const greeting = await helloInstance.getGreeting.call(); 

    assert.equal(greeting, "Yo", "Greeting has been successfully set");
  });

});