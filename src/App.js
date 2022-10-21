import React from 'react';
import Todos from './Todos';
import './App.scss';
import {useSelector} from "react-redux"
import {selectDarkMode} from "./features/slices/themeSlice"

function App() {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div className={`app ${!darkMode ? "whiteBg" :""}`}>
   <div className='containers App'>
    <div className='app-wrapper'>
    
      <Todos/>
    </div>

   </div>
   </div>
  );
}

export default App;
