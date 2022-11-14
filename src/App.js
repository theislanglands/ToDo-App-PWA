import React from 'react';
import { useState } from "react";
import {Form, Container, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


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
            <Col xs={7}>
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
      </div>
      
      <div className='centerText'>
        <p>My ToDo list</p>
      </div>

      <div className='todoCards'>
          {todos.map((name, index) => (  
            <Container>
              <Row>
                <Col></Col>
                <Col xs={7}>
                <ListGroup variant='primary'>
                  <ListGroup.Item>
                    <div className='cards'>
                          {name} 
                    </div>
                  </ListGroup.Item> 
                </ListGroup>
                </Col>
                <Col>
                  <div className='cardButton'>
                    <Button onClick={() => deleteTodo(index)}>Delete</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          ))}
        
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
