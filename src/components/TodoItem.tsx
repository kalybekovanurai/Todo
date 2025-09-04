import type { Todo } from "./TodoApp";
import styles from "../styles/TodoItem.module.css";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
}
const TodoItem = ({ todo, onToggle }: Props) => (
  <div className={styles.item}>
    <li key={todo.id} className={todo.done === true ? styles.done : ""}>
      {todo.value}
    </li>
    <button onClick={() => onToggle(todo.id)}>{todo.done ? "Return" : "Ready"}</button>
  </div>
);

export default TodoItem;
