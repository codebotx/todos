import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/navbar"
import { Todos } from "./Components/todos"
import React, { useState } from 'react';
// import {Todo} from "./Components/todo"
import { Footer } from "./Components/footer"
import { Addtodo } from './Components/addtodo'

function App() {
  const onDelete = (todo) => {
    console.log("I am ironman of ", todo)
    SetTodos(todos.filter((e) => {
      return e !== todo
    }))

  }
  const addTodo = (title, desc) => {
    console.log("I am todo",title, desc)
    let sno=todos[todos.length-1].sno+1
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    SetTodos([...todos,myTodo]);

  }


  const [todos, SetTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the ghat",
      desc: "You need to go to the ghat to get this job done"
    },
    {
      sno: 3,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done"
    },
  ])
  return (
    <>
      <Header title="MyTodosList" searchbar={true} />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      {/* <Todoitem/> */}
      <Footer />
    </>
  );
}

export default App;
