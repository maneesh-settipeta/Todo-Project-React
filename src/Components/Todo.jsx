/* eslint-disable react/prop-types */
function Todo({ todos, deleteTodos, updateTodos }) {
  return (
    <>
      <ul className="ul-element">
        {todos?.map((todo, index) => (
          <div key={index} className="div-ul-bottom">
            {todo}

            <button
              className="button-Bottom-ul"
              onClick={() => deleteTodos(index)}
            >
              X
            </button>
            <button onClick={() => updateTodos(index)}> : </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Todo;
