// import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/navbar"
import {Todos} from "./Components/todos"
import {Todo} from "./Components/todo"
import Footer from "./Components/footer"

function App() {
  let todos=[
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
  ]
  return (
    <>
      <Header title="MyTodosList" searchbar={true}/>
      <Todos todos={todos}/>
      <Todo/>
      <Footer/>
    </>
  );
}

export default App;
