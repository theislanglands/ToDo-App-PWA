import React from 'react';
import { useState } from "react";
import {Form, Container, Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

export default function App() {

  // Holding todo & input Text
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  
  return (
    <Container>
    <div className="Todo-App">
      
        <header className="App-header">
          <h1>The Amazing Todo'er</h1>
        </header>
      
      <div className="todo-input">
          <Form>
            <Row>
              <Col></Col>
              <Col xs={8}>
                <Form.Control 
                  type="text" 
                  placeholder="Create Todo" 
                  value={inputText}
                  onChange={handleChange}
                  >
                </Form.Control>
              </Col>
              <Col>
                <Button onClick={addTodo}>Add</Button>
              </Col>
            </Row>
          </Form>
          
          <div className='todoCards'>
            {todos.map((name, index) => (  
              <ul>
                <div className='cards' align='left'>
                      {name} 
                </div>
                <div align='right'></div>
                <Button className='cardButton' onClick={() => deleteTodo(index)}>Delete</Button>
            </ul> 
            ))}
          </div>

      </div>
      
    </div>
    </Container>
    
  );

  function addTodo() { 
    setTodos([...todos, inputText]) 
    setInputText("")
    }
  

  function deleteTodo(index) {
    setTodos(todos.filter((item, i) => i != index)); 
  }
    
  function handleChange(event) {
    setInputText(event.target.value);
  }
}
