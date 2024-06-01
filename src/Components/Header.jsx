import { useState, useEffect } from "react";
import Todo from "./Todo";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodo] = useState([]);
  // console.log(todos);

  useEffect(() => {
    // console.log("getting saved");
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodo(JSON.parse(storedTodos));
    }
    console.log(storedTodos, todos);
    console.log(JSON.parse(storedTodos));
  }, []);

  const addTodo = () => {
    if (inputValue !== "") {
      const newTodos = [...todos, inputValue];
      setTodo(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <>
      <div>
        <img src="Images\TodoWork.webp" className="image-logo" />
      </div>
      <div className="headerComponent-div">
        <input
          className="input-element"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button className="button-style" onClick={addTodo}>
          {" "}
          Add Todo
        </button>
      </div>
      <Todo todos={todos} deleteTodos={deleteTodo} />
    </>
  );
}

export default Header;
