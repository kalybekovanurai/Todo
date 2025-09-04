import { useState } from "react";
import Card from "./Card";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import FilterBar from "./FilterBar";

export interface Todo {
  id: string;
  value: string;
  done: boolean;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
 const [filter, setFilter] = useState<"all" | "completed" | "active">("all");


  const addTodo = (value: string) => {
    const newTodo: Todo = { id: crypto.randomUUID(), value, done: false };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };


    const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.done;
    if (filter === "active") return !todo.done;
    return true;
  });

  return (
    <div>
      <Card>
        <h1>Todo list 📝</h1>
        <TodoForm onAddTodo={addTodo} />
        <FilterBar filter={filter} setFilter={setFilter} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} />
      </Card>
    </div>
  );
};

export default TodoApp;
