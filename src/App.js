// import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/navbar"
import Todos from "./Components/todos"
import Todo from "./Components/todo"
import Footer from "./Components/footer"

function App() {
  return (
    <>
      <Header title="MyTodosList"/>
      <Todos/>
      <Todo/>
      <Footer/>

    </>
  );
}

export default App;
