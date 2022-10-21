import React, { useRef } from "react";
import Todo from "./Todo";
import sunIcon from "./images/sunIcon.webp"
import moonIcon from "./images/moonIcon.png"
// import { clear } from "@testing-library/user-event/dist/types/utility";

import { useSelector } from "react-redux";
import { selectDarkMode,toggleTheme } from "./features/slices/themeSlice";
import {useDispatch} from "react-redux";
import{
    addTodo,
    clearCompleted,
    selectActiveTodos,
    selectCompletedTodos,
    selectShowActiveTodos,
    selectShowCompletedTodos,
    selectShowTodos,
    selectTodos
} from './features/slices/todosSlice';
import {showCompletedFunction} from './features/slices/todosSlice';
import {showAllFunction} from './features/slices/todosSlice';
import {showActiveFunction} from './features/slices/todosSlice';



function Todos() {
  const inputRef = useRef();
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const todos =useSelector(selectTodos);
  const completedTodos= useSelector(selectCompletedTodos);
  const activeTodos = useSelector(selectActiveTodos);

  const showTodos=useSelector(selectShowTodos);
  const showActiveTodos=useSelector(selectShowActiveTodos);
  const showCompletedTodos=useSelector(selectShowCompletedTodos);

  let todosToRender;
  let activeTodosNumber=0;

  const submitTodo=(e)=>{
    e.preventDefault();
    if(inputRef.current.value.trim()){
        dispatch(addTodo({
            id:Math.random()*1000,
            content: inputRef.current.value,
            completed:false
        }))
    }
    inputRef.current.value=""
  }

  const showCompletedHandler=()=>{
    dispatch(showCompletedFunction())
  }
  const showAllHandler=()=>{
    dispatch(showAllFunction())
  }
  const showActiveHandler=()=>{
    dispatch(showActiveFunction())
  }
  const clearCompletedHandler=()=>{
    dispatch(clearCompleted())
  }
  if(showActiveTodos){
    todosToRender=activeTodos;
  }else if (showCompletedTodos){
    todosToRender =completedTodos;
  }else{
    todosToRender=todos;
  }

  todos?.foreach((todo)=>{
    if(!todo.completed){
        activeTodosNumber++;
    }
  });

  return (
    <>
      <div className="header">
        <h1>To-do List</h1>
        {/* <div className="todosHeader">
        {darkMode?(
            <img src={sunIcon} onClick={()=>dispatch(toggleTheme)}/>
        ):(
            <img src={moonIcon} onClick={()=>dispatch(toggleTheme)}/>
        )}</div> */}
      </div>
      <form onSubmit={submitTodo}>
        <div className="add ">
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter a Todo..."
            className="task-input"
            
            // value={newTask}
            // onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="button-add"
            //   onClick={addTask}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      

      <div className=" todos_container">
        {todosToRender.map((todo)=>(
            <Todo 
            content ={todo.content}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            />
        ))}
        
        <div className="todos_footer">
          <p>0 items left</p>
          <div className="types">
            <div className="types">
              <p className="clear">All</p>
              <p className="clear">Active</p>
              <p className="clear">Completed</p>
            </div>
          </div>
          <p className="clear">Clear Completed</p>
        </div>
      </div>
    </>
  );
}
export default Todos;
