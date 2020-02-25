import React, {useState} from 'react';
import styled from "styled-components";
import {
  FaCheck, 
  FaTrash, 
  FaTimes
} from "react-icons/fa";
import { 
  Container,
  Row,
  Col
 } from 'react-bootstrap';


const Title = styled.h1`
  color: white;
`;

// const TodoAll = styled.div`
//   background-color: #5a76a1;
// `;

const TodoItems = styled.div`
  padding:  5px;
  display: block;
  width : 50%;
  margin: auto;
`;

const TodoItem = styled.li`
  background: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  padding: 10px 10px;
  margin-bottom: 6px;
  border-radius: 5px;
  display: flex;
`;

const Button = styled.button`
  background: primary;
  ${({complete}) => {
    if (complete) 
      return "color: yellow";
    else
      return "color: green";
  }}
  color : ${props => props.remove ? "red" : "green"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5a76a1;
  float: right;
`;


function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <TodoItems>
      <Container>
        <Row>
          <Col>
            <TodoItem style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            {todo.text}
            </TodoItem>
          </Col>
          <Col md="auto">
            <Button remove onClick={() => removeTodo(index)}><FaTrash/></Button>
            <Button completed={todo.isCompleted} onClick={() => completeTodo(index)}>{todo.isCompleted?<FaTimes/>:<FaCheck/>}</Button>
          </Col>
        </Row>
      </Container>
        
       
    </TodoItems>
  );
}
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        id="todoinput"
        placeholder="Enter new task"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function List(){
  const [todos, setTodos] = useState([
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  
  const completeTodo = index => {
    const newTodos = [...todos];
    console.log(newTodos);
    console.log(index);
    if(newTodos[index].isCompleted)
      newTodos[index].isCompleted = false;
    else
      newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <Title>Todo List</Title>
      <TodoForm addTodo={addTodo} />

      {/* <TodoAll> */}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      {/* </TodoAll> */}
    </div>
  )
};


export default List;
