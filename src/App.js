import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Todos from './component/Todos';
import AddNote from './component/AddNote';
import Alert from './component/Alert';
import About from './component/About';
import {useState } from "react";
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';



function App() {


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({

      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)

  }



  return (




    <div>
      <NoteState>
      <Router>
        
        <Navbar />
        <Alert alert={alert} />
        <Routes>
        <Route exact path="/login"
            element={<Login  showAlert={showAlert}/>}>
          </Route>
          <Route exact path="/signup"
            element={<Signup  showAlert={showAlert}/>}>
          </Route>
         
          <Route exact path="/home"
            element={<Home  showAlert={showAlert}/>}>
          </Route>
          <Route exact path="/"
            element={<><AddNote  showAlert={showAlert} />
              <Todos  showAlert={showAlert} /></>}>
          </Route>
          <Route exact path="/about"
            element={<About />}>
          </Route>


        </Routes>
        <Footer />
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
