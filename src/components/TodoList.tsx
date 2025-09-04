import type { Todo } from "./TodoApp";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  onToggle: (id: string) => void;
};

const TodoList = ({ todos, onToggle }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
