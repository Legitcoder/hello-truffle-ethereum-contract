pragma solidity >=0.4.21 <0.6.0;

contract Hello {

    string greeting;
    mapping (address => uint) public balance;

    constructor() public {
        greeting = "Hello Truffle";
        balance[msg.sender] = 10000;
    }

    function getGreeting() public view returns (string) {
        return greeting;
    }

    function setGreeting(string _greeting) public {
        greeting = _greeting;
    }

}


