import { useState } from "react";
import Todos from "./components/Todos/Todos.jsx";
import Header from "./components/Header/Header.jsx";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <main className="min-h-screen py-12 flex items-center justify-center bg-[#333333] px-4">
      <div className="container bg-white rounded text-black w-[40rem] ">
        <Header todosCount={todos.length} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </main>
  );
}

export default App;
