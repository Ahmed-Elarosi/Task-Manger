import React from "react";
import "../styles/Input.scss";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="form">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo}
        placeholder="Add a Task"
        className="form__input"
      />
      <button className="btn__submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default Input;
