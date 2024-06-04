// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract Todo {
  uint public target;
  address payable public owner;

  struct TodoItem {
    uint256 id;
    string title;
    bool isCompleted;
    address owner;
  }

  TodoItem[] public todos;

  // constructor(uint _target) payable {
  //   target = _target;
  //   owner = payable(msg.sender);
  // }

  function getMyTodos(
    address _owner
  ) public view returns (TodoItem[] memory) {
    // uint count;
    // for (uint i = 0; i < todos.length; i++) {
    //   if (todos[i].owner == _owner) {
    //     count++;
    //   }
    // }

    // TodoItem[] memory result = new TodoItem[](count);
    // uint index;
    // for (uint i = 0; i < todos.length; i++) {
    //   if (todos[i].owner == _owner) {
    //     result[index] = todos[i];
    //     index++;
    //   }
    // }

    // return result;

    TodoItem[] memory result = new TodoItem[](0);

    for (uint i = 0; i < todos.length; i++) {
      if (todos[i].owner == _owner) {
        TodoItem[] memory temp = new TodoItem[](result.length+1);
        for (uint j = 0; j < result.length; j++) {
            temp[j] = result[j];
        }
        temp[result.length] = todos[i];
        result = temp;
      }
    }

    return result;

  }

  function addTodo(string memory _title) public returns (TodoItem memory) {
    TodoItem memory newTodo = TodoItem(
      block.timestamp,
      _title,
      false,
      msg.sender
    );
    todos.push(newTodo);
    return newTodo;
  }

  function toggleTodo(uint _id) public returns (uint256) {
    TodoItem storage todo = todos[_id];
    require(todo.owner == msg.sender, "Only the owner can toggle this todo.");
    todo.isCompleted = !todo.isCompleted;
    return _id;
  }

  function deleteTodo(uint256 _id) public {
    require(_id < todos.length, "Invalid Todo ID.");
    TodoItem storage todo = todos[_id];
    require(todo.owner == msg.sender, "Only the owner can delete this todo.");

    // Swap the item to delete with the last item
    todos[_id] = todos[todos.length - 1];
    todos.pop();
  }

  function getAllTodosCount() public view returns (uint) {
    return todos.length;
  }

  function getAllTodos() public view returns (TodoItem[] memory) {
    return todos;
  }
}
