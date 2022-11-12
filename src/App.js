import React from 'react';
import {Form, Container, Button} from "react-bootstrap";

import './App.css';

export default function App() {
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
                >
              </Form.Control>
              <Button onClick={addTodo}>Add</Button>
          </Form>


       </Container>
      </div>
    </div>
  );
}

function addTodo() {
  console.log("add todo")
}

function deleteTodo() {
  console.log("delete todo")
}



