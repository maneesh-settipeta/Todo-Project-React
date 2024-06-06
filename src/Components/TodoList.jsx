import { useState } from "react";
import "./TodoList.css";
import AddNewTodo from "./AddNewTodo";
import DeleteTodo from "./RemovedTodo";
import RemovedTodo from "./RemovedTodo";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [allTodos, setTodo] = useState([]);
  const [removedItem, setRemovedItem] = useState([]);

  function addTodo() {
    if (inputValue !== "") {
      const newTodo = [...allTodos, inputValue];
      setTodo(newTodo);
    }
    setInputValue("");
  }

  const deleteTodo = (index) => {
    let updatedTodos = [...allTodos];
    console.log(updatedTodos);
    const removedTodo = updatedTodos.splice(index, 1);
    setRemovedItem((prevRemovedItems) => [...prevRemovedItems, ...removedTodo]);

    console.log("Delete", removedItem);
    setTodo(updatedTodos);
  };

  return (
    <>
      <div className="main-background">
        <div className="whiteContainer">
          <h1 className="todoHeading"> To-Do List </h1>
          <div className="containerStyle">
            <div className="inputButtonContainer">
              <input
                className="inputElement"
                placeholder="add your task"
                onChange={(inputContent) =>
                  setInputValue(inputContent.target.value)
                }
                value={inputValue}
              ></input>
              <button className="AddButton" onClick={addTodo}>
                {" "}
                ADD{" "}
              </button>
            </div>
            <AddNewTodo
              PassTodos={allTodos}
              DeleteTodo={deleteTodo}
              passRemovedData={removedItem}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
