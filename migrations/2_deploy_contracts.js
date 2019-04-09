const TodoList = artifacts.require("./ToDoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};