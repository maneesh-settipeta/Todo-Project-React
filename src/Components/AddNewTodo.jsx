import { useState } from "react";
import "./AddNewTodo.css";

function AddNewTodo({ PassTodos, DeleteTodo, passRemovedData }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [updateTodosCon, setUpdateTodosCon] = useState("");

  function updateTodoEdit(index, value) {
    setEditingIndex(index);
    setUpdateTodosCon(value);
  }

  function updateTodoSave(index) {
    PassTodos[index] = updateTodosCon;
    setEditingIndex(null);
    setUpdateTodosCon("");
  }
  console.log(passRemovedData);

  return (
    <>
      <div className="addedTodoStyle">
        <h2 className="headingAddRemove">All Todos</h2>
        {PassTodos.map((todo, index) => (
          <div key={index}>
            <div className="createTodo">
              {editingIndex === index ? (
                <input
                  className="inputStyleTwo"
                  placeholder="update your task"
                  value={updateTodosCon}
                  onChange={(e) => setUpdateTodosCon(e.target.value)}
                />
              ) : (
                <div>
                  <p>{todo}</p>
                </div>
              )}
              <div>
                {editingIndex === index ? (
                  <button
                    className="buttonStyle"
                    onClick={() => updateTodoSave(index)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="buttonStyle"
                    onClick={() => updateTodoEdit(index, todo)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="buttonStyle"
                  onClick={() => DeleteTodo(index)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="removedTodoStyle">
        <h2 className="headingAddRemove">deleted-List</h2>
        {passRemovedData?.map((removedDataa, index) => (
          <p key={index} className="createTodo">
            {removedDataa}
          </p>
        ))}
      </div>
    </>
  );
}

export default AddNewTodo;
