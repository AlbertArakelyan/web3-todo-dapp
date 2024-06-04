import { FaTrashAlt, FaPencilAlt, FaEthereum } from "react-icons/fa";

import { Button } from "@/components/ui";

import { useTodoContext } from "@/context/TodoProvider";

import { ITodoItemProps } from "./types";

const TodoItem = ({ todo }: ITodoItemProps) => {
  const { deleteTodo, toggleTodo } = useTodoContext();

  return (
    <div className="flex items-center justify-between border border-stone-700 rounded-md w-full px-4 py-3 hover:cursor-pointer hover:bg-stone-700 hover:text-white transition-colors group" onClick={() => toggleTodo(todo.id)}>
      <div className="flex-1">
        <p className="font-semibold">{todo.title}</p>
        <p className="text-xs">{todo.owner.slice(0, 6)}...{todo.owner.slice(-4)}</p>
        {todo.isCompleted && <p className="text-xs">Completed</p>}
      </div>
      <div className="flex items-center justify-end gap-2">
      <Button
          className="p-2 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 hover:bg-green-500"
          variant="ghost"
          onClick={() => {
            console.log("delete todo");
          }}
        >
          <FaEthereum color="white" width={24} height={24} />
        </Button>
        <Button
          className="p-2 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-500"
          variant="ghost"
          onClick={() => deleteTodo(todo.id)}
        >
          <FaTrashAlt color="white" width={24} height={24} />
        </Button>
        <Button
          className="p-2 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 hover:bg-blue-500"
          variant="ghost"
          onClick={() => {
            console.log("edit todo");
          }}
        >
          <FaPencilAlt color="white" width={24} height={24} />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
