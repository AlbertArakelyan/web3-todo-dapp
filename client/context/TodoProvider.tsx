"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractAddress, contractABI } from "@/utils/constants";

import { ITodoContext } from "./types";
import { ITodo } from "@/types";

const TodoContext = createContext<ITodoContext>({
  todos: [],
  isLoading: false,
  addTodo: () => { },
  deleteTodo: () => { },
  toggleTodo: () => { },
});

export const useTodoContext = (): ITodoContext => useContext(TodoContext);

const getTodoEthereumContract = async () => {
  const ethereum = (window as any).ethereum;
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = await provider.getSigner();
  const todoContract = new ethers.Contract(contractAddress, contractABI, signer);

  return todoContract;
};

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllTodos = async () => {
    const todoContract = await getTodoEthereumContract();

    const allTodos = await todoContract.getAllTodos();
    console.log(allTodos);
    
    setTodos(allTodos);
  };

  const getMyTodos = async () => {
    const todoContract = await getTodoEthereumContract();
    const myTodos = await todoContract.getMyTodos(currentAccount);
    console.log(myTodos);
    
    setTodos(myTodos);
  };

  const addTodo = async (value: string) => {
    const todoContract = await getTodoEthereumContract();

    const transactionHash = await todoContract.addTodo(value);

    setIsLoading(true);

    console.log(`Loading - ${transactionHash.hash}`);

    await transactionHash.wait();

    setIsLoading(false);

    console.log(`Success - ${transactionHash.hash}`);

    const allTodos = await todoContract.getAllTodos();

    setTodos(allTodos);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  const checkIfWalltedConnected = async () => {
    const ethereum = (window as any).ethereum;

    try {
      if (!ethereum) {
        return alert('Please install MetaMask');
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        
      } else {
        console.log('No Accounts Found');
        alert('No Accounts Found');
      }
    } catch (error) {
      console.log('checkIfWalltedConnected: ', error);
    }
  };

  const connectWallet = async () => {
    try {
      const ethereum = (window as any).ethereum;

      if (!ethereum) {
        return alert('Please install MetaMask');
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log('connectWallet: ', error);
    }
  };

  useEffect(() => {
    // TODO refactor
    checkIfWalltedConnected().then(() => {
      connectWallet().then(() => {
        getAllTodos();
      });
    });
  }, []);

  return (
    <TodoContext.Provider value={{
      todos,
      isLoading,
      addTodo,
      deleteTodo,
      toggleTodo,
    }}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
