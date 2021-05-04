const OddjobPayContract = artifacts.require('jobscontract')

module.exports = (deployer, _, accounts) => {
	deployer.deploy(OddjobPayContract, accounts[1], accounts[2], {
		from: accounts[0]
	})
}