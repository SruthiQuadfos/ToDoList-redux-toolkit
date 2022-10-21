import React from "react";
import correct from "./images/correct.png";
import cross from "./images/cross.png";
import { completeTodo } from "./features/slices/todosSlice";
import { removeTodo } from "./features/slices/todosSlice";
import { useDispatch } from "react-redux";
function Todo({ content, completed, id }) {
  const dispatch = useDispatch();
  const completeTodoHandler = () => {
    dispatch(completeTodo(id));
  };
  const removeTodoHandler = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todo_container " onClick={completeTodoHandler}>
        <div className="markdone">
      <div className={`circles ${completed ? "active" : ""}`}>
        <img src={correct} width="26px" className="correct" />
      </div>
      <li className={`todo ${completed ? "active" : ""}`}>{content}</li>
      </div>
      <img
        src={cross}
        className="delete-icon"
        width="26px"
        onClick={removeTodoHandler}
      />
    </div>
  );
}
export default Todo;
