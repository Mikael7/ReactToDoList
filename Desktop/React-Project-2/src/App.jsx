import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

export default function App() {
  const [toDoList, setToDoList] = useState(["Wash The Dishes"]);
  const toDoRef = useRef();

  return (
    <div className="App">
      <input type="text" ref={toDoRef} />
      <button onClick={function () {
        setToDoList([...toDoList, toDoRef.current.value]);
        toDoRef.current.value = ""
      }}
      >
        Add ToDo
      </button>
      <ul>
        {toDoList.map(function (value, index) {
          return <li>{value}</li>;
        })}
      </ul>
    </div >
  ); 
}
