import { useState } from "react";
import Todo from "./Todo/Todo.jsx";

const Todos = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");
  const inputChange = (e) => {
    setValue(e.target.value);
  };

  const addInput = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      setTodos([...todos, { id: todos.length + 1, task: value }]);
      setValue("");
    }
  };

  const Delete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="py-4">
      <form action="" className="px-8 flex" onSubmit={addInput}>
        <input
          type="text"
          placeholder="Input Task"
          className="border-2 rounded p-2 w-[85%] outline-[#f37474]"
          onChange={inputChange}
          value={value}
        />
        <button
          type="submit"
          className="bg-[#f37474] text-white py-2 px-6 rounded  ml-auto">
          Add
        </button>
      </form>
      <Todo todos={todos} onDelete={Delete} />
    </div>
  );
};

export default Todos;
