import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import styles from "./Todo.module.css"

const Todo = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li className="flex items-center p-6 px-8 border-b-2" key={todo.id}>
            <input
              type="checkbox"
              name=""
              id=""
              className={`${styles.myCheckbox} mr-4 w-6 h-6 rounded`}
            />
            <p className="text-lg w-[78%] break-words">{todo.task}</p>
            <div className="ml-auto" onClick={() => onDelete(todo.id)}>
              <FaTrashCan />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
