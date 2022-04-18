import React, { useState } from "react";
import Count from "./components/Count";
import Input from "./components/Input";
import "./styles/App.scss";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  

  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <Input todo={todo} setTodo={setTodo} />
      <Count />
      
    </div>
  );
};

export default App;
