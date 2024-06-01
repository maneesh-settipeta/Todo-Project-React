import { useState } from "react";

function Todo({ todos, deleteTodos }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [updatedValue, setUpdatedValue] = useState("");

  function handleEdit(index, value) {
    setEditingIndex(index);
    setUpdatedValue(value);
  }

  function handleChange(e) {
    setUpdatedValue(e.target.value);
  }

  function handleSave(index) {
    // const newTodos = [...todos];
    // console.log(index);
    todos[index] = updatedValue;
    console.log(updatedValue);
    setEditingIndex(null);
  }

  const todoItems = todos.map((todo, index) => (
    <div key={index} className="div-ul-bottom">
      {editingIndex === index ? (
        <input
          className="input-element"
          type="text"
          value={updatedValue}
          onChange={handleChange}
        />
      ) : (
        todo
      )}
      <button className="button-Bottom-ul" onClick={() => deleteTodos(index)}>
        X
      </button>
      {editingIndex === index ? (
        <button onClick={() => handleSave(index)}>Save</button>
      ) : (
        <button onClick={() => handleEdit(index, todo)}>Edit</button>
      )}
    </div>
  ));

  return (
    <>
      <span className="ul-element">{todoItems}</span>
    </>
  );
}

export default Todo;
