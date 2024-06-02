import { ITodoItemProps } from "./types";

const TodoItem = ({ todo }: ITodoItemProps) => {
  return (
    <div className="flex items-center justify-start border border-stone-700 rounded-md w-full px-4 py-3 hover:cursor-pointer hover:bg-stone-700 hover:text-white transition-colors">
      <div>
        <p className="font-semibold">{todo.title}</p>
      </div>
    </div>
  );
};

export default TodoItem;
