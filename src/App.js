import React from 'react';
import { useState } from "react";
import {Form, Container, Button} from "react-bootstrap";
// import todo from './todoItem';

import './App.css';

export default function App() {

  // Holding todo's
  const [todos, setTodos] = useState([]);

  // holding text of input field
  const [inputText, setInputText] = useState('');
  
  function handleChange(event) {
    //console.log(event.target.value);
    setInputText(event.target.value);
    //console.log({inputText})
  }
  

  return (
    <div className="Todo-App">
      <header className="App-header">
        <h1>The Amazing Todo'er</h1>
      </header>

      <div className="todo-input">
       <Container>
          <Form>
            <Form.Control 
                type="text" 
                placeholder="Create Todo" 
                value={inputText}
                onChange={handleChange}
                >
              </Form.Control>
              <Button onClick={addTodo}>Add</Button>
          </Form>

          <div>
            {todos.map((name, index) => (  
            <ul>  
              {name}   
              <Button onClick={() => deleteTodo(index)}>Delete</Button>
            </ul>  
            ))}
          </div>

       </Container>
      </div>
    </div>
  );

  function addTodo() {
    console.log("inputeText is")  
    console.log({inputText})   
    setTodos([...todos, inputText]) 
    setInputText("")
    }
  

  function deleteTodo(index) {
    console.log("delete todo")
    console.log(index)
    setTodos(todos.filter((item, i) => i != index)); 
  }
}