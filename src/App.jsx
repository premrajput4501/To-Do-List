import React, { useState } from "react";
import './App.css'

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){

    const newValue = event.target.value;
    setInputText(newValue);

  }

  function addList(){
    !(inputText === "") && setItems(prevItems => {
      return [...items, inputText]
    });
    setInputText("");
  }

  function clearList(){
    location.reload();
  }
  
  function listClick(){
    document.querySelectorAll('li').forEach((li) => {
      li.addEventListener('dblclick', () => {
        li.style.textDecoration = "none";
      });
    });
    
  }

  function strikeList(){
    document.querySelectorAll('li').forEach((li) => {
      li.addEventListener('click', () => {
        li.style.textDecoration = "line-through";
      });
    });
    
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} placeholder="Add a task..."/>
        <button onClick={addList}>
          <span>Add</span>
        </button>
        <button onClick={clearList}>
          <span id="clear">Clear All</span>
        </button>
      </div>
      <div>
        <ul>
          { items.map((todoItem) => <li onClick={listClick} onDoubleClick={strikeList}>{todoItem}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
