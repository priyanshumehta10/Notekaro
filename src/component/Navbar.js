import React from 'react';
import { Link ,useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate()

  const handleLogout = () => {
  localStorage.removeItem('token');
  navigate("/login")
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ">
       <Link className="navbar-brand " to="/">NoteKaro</Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item button1">
              <Link className={`nav-link ${location.pathname === "/" ? "active":"" }`} style={{fontFamily
              :"sans-serif"}} aria-current="page" to="/"><i className="fa-solid fa-house-chimney"></i> Home</Link>
            </li>
            <li className="nav-item button1">
              <Link className={`nav-link ${location.pathname === "/about" ? "active":"" } `} style={{fontFamily
              :"sans-serif"}} to="/about"><i className="fa-solid fa-address-card"></i> About</Link>
            </li>
          </ul>
          {/* Use ms-auto class to push the buttons to the right end */}
          {!localStorage.getItem('token')?<form className='ms-auto'>
            <Link to="/login" className="btn btn-primary me-2 cred">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary me-1 cred">
              Sign Up
            </Link>
          </form>:<button onClick={handleLogout} className='btn btn-danger ms-auto cred1'>Log out</button>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
