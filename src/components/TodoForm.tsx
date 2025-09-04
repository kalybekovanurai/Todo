import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "../styles/TodoForm.module.css";


type Props = {
  onAddTodo: (value:string) => void;
}

const TodoForm = ({ onAddTodo }: Props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const value = title.trim();
    
    if (!value) return;

onAddTodo(value);

    setTitle("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="navod" className={styles.label}>
        New task{" "}
      </label>

      <input
        type="text"
        id="navod"
        value={title}
        onChange={changeHandler}
        className={styles.input}
      />

      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
