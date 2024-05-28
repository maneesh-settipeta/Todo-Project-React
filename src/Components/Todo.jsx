function Todo({ todos, deleteTodos }) {
  return (
    <>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {todos?.map((todo, index) => (
          <button
            key={index}
            style={{
              backgroundColor: "White",
              marginBottom: "5px",
              width: "auto-fit",
            }}
          >
            {todo}
            <button
              style={{
                height: "auto",
                width: "auto",
                borderRadius: "1px",
                marginLeft: "5px",
                borderWidth: "1px",
                backgroundColor: "yellow",
              }}
              onClick={() => deleteTodos(index)}
            >
              X
            </button>
          </button>
        ))}
      </ul>
    </>
  );
}

export default Todo;
