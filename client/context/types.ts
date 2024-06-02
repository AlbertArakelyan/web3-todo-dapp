import { ITodo } from "@/types";

export interface ITodoContext {
  todos: ITodo[];
  isLoading: boolean;
  addTodo: (value: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}