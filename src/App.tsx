import React, { useState } from "react";
import "./styles/App.scss";
import InputPage from "./pages/InputPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <InputPage />
    </div>
  );
};

export default App;
