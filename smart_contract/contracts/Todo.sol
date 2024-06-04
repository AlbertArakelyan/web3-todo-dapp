// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ToDoList {
    uint public taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;
    mapping(uint => bool) public taskExists;

    event TaskCreated(uint id, string content, bool completed);
    event TaskCompleted(uint id, bool completed);
    event TaskDeleted(uint id);

    function createTask(string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false);
        taskExists[taskCount] = true;
        emit TaskCreated(taskCount, _content, false);
    }

    function toggleTaskCompleted(uint _id) public {
        require(taskExists[_id], "Task does not exist.");
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
        emit TaskCompleted(_id, _task.completed);
    }

    function getTask(uint _id) public view returns (uint, string memory, bool) {
        require(taskExists[_id], "Task does not exist.");
        Task memory _task = tasks[_id];
        return (_task.id, _task.content, _task.completed);
    }

    function deleteTask(uint _id) public {
        require(taskExists[_id], "Task does not exist.");
        delete tasks[_id];
        taskExists[_id] = false;
        emit TaskDeleted(_id);
    }
}