import React, { useState } from "react";
import Input from "./components/Input";
import "./styles/App.scss";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <Input todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
