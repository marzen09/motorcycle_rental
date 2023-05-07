// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Motor {
 mapping(address => uint) public balances;
    uint public price = 1 ether;
    uint public price2 = 3 ether;
    uint public price3 = 6 ether;
    uint public price4 = 9 ether;
    uint public price5 = 12 ether;
    uint public price6 = 20 ether;

    function rent() payable public {
        require(msg.value == price, "Incorrect payment amount.");
        balances[msg.sender] += 1;
    }
    function rent2() payable public {
        require(msg.value == price2, "Incorrect payment amount.");
        balances[msg.sender] += 3;
    }
    function rent3() payable public {
        require(msg.value == price3, "Incorrect payment amount.");
        balances[msg.sender] += 6;
    }
    function rent4() payable public {
        require(msg.value == price4, "Incorrect payment amount.");
        balances[msg.sender] += 9;
    }
    function rent5() payable public {
        require(msg.value == price5, "Incorrect payment amount.");
        balances[msg.sender] += 12;
    }
    function rent6() payable public {
        require(msg.value == price6, "Incorrect payment amount.");
        balances[msg.sender] += 20;
    }
    
}
