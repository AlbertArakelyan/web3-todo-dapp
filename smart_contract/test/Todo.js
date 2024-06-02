const { expect } = require("chai");

describe("Todo", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function return5() {
    const Todo = await ethers.getContractFactory("Todo");
    const todo = await Todo.deploy();
    await todo.deployed();
    const value5 = await todo.return5();

    console.log(value5);

    expect(value5).to.equal(5);
  }

  it("Should return 5", async function () {
    await return5();
  });

});
