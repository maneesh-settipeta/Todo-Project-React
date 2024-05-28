import { useState } from "react";
import Todo from "./Todo";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodo] = useState([]);
  console.log(todos);

  const addTodo = () => {
    if (inputValue !== "") {
      setTodo([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodo(updatedTodos);
  };

  return (
    <>
      <div>
        <img
          style={{
            height: "55px",
            width: "70px",
            display: "flex",
            textAlign: "left",
          }}
          src="Images\TodoWork.webp"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "300px",
            height: "40px",
            fontSize: "16px",
          }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button
          style={{
            height: "40px",
            width: "auto",
            borderRadius: "5px",
            backgroundColor: "lightgreen",
            borderColor: "white",
            borderWidth: "1px",
            marginLeft: "5px",
          }}
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <Todo todos={todos} deleteTodos={deleteTodo} />
    </>
  );
}

export default Header;
