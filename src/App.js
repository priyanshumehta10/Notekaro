import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Todos from './component/Todos';
import AddNote from './component/AddNote';


import { useState } from "react";
function App() {
  const onDelete = (todo) => {
    console.log('onDelete', todo)
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }
  const addTodo = (title, desc) => {
    console.log('addTodo', title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 1;
    }
    else {

      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "please buy patato"
    },
    {
      sno: 2,
      title: "Go to gym",
      desc: "please buy protien shack"
    },
    {
      sno: 3,
      title: "Go to mall",
      desc: "please buy clothing"
    }
  ]);

  return (
    <div >
      <Navbar />
      <AddNote addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />

      <Footer />
    </div>
  );
}

export default App;
