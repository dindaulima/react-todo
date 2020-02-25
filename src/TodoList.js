// import React from 'react';
// import './App.css';
import React, {useState} from 'react';
import styled from "styled-components";

/*
function TodoList() {
  return (
    <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Task" />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
  );
}
*/

const Wrapper = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  color: green;
`;

const NewsItem = styled.a`
  background-color: ${({backgroundColor}) => backgroundColor || "gray" };
  padding: 20px;
  display: block;
`;
const NewsItemTitle = styled.h4`
  margin: 0;
  padding: 0;
`;
const NewsItemDate = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

function AddTask(props) {
  return <h1>Hello, {props.name}</h1>;
}
const TodoList = ({
  label,
  name
}) => {
  const [news] = useState([
    {
      item: [],
      currentItem: {text:'', key:''}
    }
  ]);

  return (
      <Wrapper>
      <Title>List Item</Title>
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Task" />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
      {news.map((item, index) => (
        <NewsItem key={index}>
          <NewsItemTitle>{item.title}</NewsItemTitle>
          <NewsItemDate>{item.date}</NewsItemDate>
        </NewsItem>
      ))}
    </Wrapper>
  )
};
export default TodoList;
