"use client";

import TodoItem from "@/components/pages/Todo/TodoItem";

import { useTodoContext } from "@/context/TodoProvider";

const TodoList = () => {
  const { todos } = useTodoContext();

  const todosContent = (
    todos.map((todo) => {
      return (
        <TodoItem key={todo.id} todo={todo} />
      );
    }).reverse()
  );

  return (
    <div className="flex flex-col items-start justify-start max-w-96 w-full gap-y-2">
      {todosContent}
    </div>
  );
};

export default TodoList;
