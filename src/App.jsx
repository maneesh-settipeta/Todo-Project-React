import { useState, useRef } from "react";
import "./App.css";

import Login from "./Components/Login";
import TodoList from "./Components/TodoList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (Username, userPassword) => {
    if ((Username === "user") & (userPassword === "12345")) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter valid credentials");
    }
  };

  return <>{isLoggedIn ? <TodoList /> : <Login isLogin={handleLogin} />}</>;
}

export default App;
