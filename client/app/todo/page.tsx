import TodoForm from "@/components/pages/Todo/TodoForm";
import TodoList from "@/components/pages/Todo/TodoList";

import TodoProvider from "@/context/TodoProvider";

const Todo = () => {
  return (
    <TodoProvider>
      <div>
        <div className="conatiner mx-auto">
          <div className="flex flex-col items-center justify-start">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default Todo;