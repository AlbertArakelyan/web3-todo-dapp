"use client";
import { useState } from "react";

import { Input, Button } from "@/components/ui";

import { useTodoContext } from "@/context/TodoProvider";

const TodoForm = () => {
  const { addTodo, isLoading } = useTodoContext();

  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    if (!value) {
      return alert("Please enter a todo.");
    }

    addTodo(value);
    setValue("");
  };

  return (
    <form className={`flex items-center justify-center w-full mb-4 relative bg-stone-100 ${isLoading ? 'opacity-60 pointer-events-none' : ''}`} onSubmit={handleSubmit}>
      <Input className="mr-2 max-w-64 w-full" value={value} onChange={handleChange} />
      <Button disabled={isLoading}>Add</Button>
    </form>
  );
};

export default TodoForm;
