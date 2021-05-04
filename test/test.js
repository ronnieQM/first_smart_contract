const OddjobPayContract = artifacts.require('jobscontract')

contract('jobscontract', accounts => {
    const client = accounts[1]
    const tasker = accounts[2]

    describe('client property', () => {
        it('is initialized after deployment', async () => {
            const deployedContract = await OddjobPayContract.deployed()
            expect(await deployedContract.client()).to.equal(client)
        })
    })

    describe('tasker property', () => {
        it('is initialized after deployment', async () => {
            const deployedContract = await OddjobPayContract.deployed()
            expect(await deployedContract.tasker()).to.equal(tasker)
        })
    })

    describe('payAmount property', () => {
        it('is initialized with 0 after deployment', async () => {
            const deployedContract = await OddjobPayContract.deployed()
            const payAmount = await deployedContract.payAmount()
            expect(payAmount.toNumber()).to.equal(0)
        })
    })
})