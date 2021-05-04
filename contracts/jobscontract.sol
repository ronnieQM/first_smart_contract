pragma solidity ^0.5.16;

contract jobscontract{
  address public client;
  address public tasker;

  uint256 public payAmount;

  constructor (address _client, address _tasker) public {
    client = _client;
    tasker = _tasker;

    payAmount = 0;
  }
}