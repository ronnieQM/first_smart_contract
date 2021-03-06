pragma solidity ^0.5.16;

contract jobscontract {
    address public deployer;
    address public client;
    address payable public tasker;

    uint256 public payAmount;

    constructor(address _client, address payable _tasker) public {
        deployer = msg.sender;
        client = _client;
        tasker = _tasker;

        payAmount = 0;
    }

    // function() public payable {
    function() external payable {
        require(client == msg.sender);
        payAmount += msg.value;
    }

    function sendPayAmountToTasker() public {
        require(deployer == msg.sender);

        // transfer pay amount to tasker
        tasker.transfer(payAmount);

        // nullify pay amount manually
        payAmount = 0;
    }
}
