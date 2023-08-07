import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Login = (props) => {


    const [credentials,setCredentials] = useState({email:"",password:""})
    let navigate = useNavigate()
    const handleClick = async(e)=>{
        e.preventDefault();



        const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }, body: JSON.stringify({ email: credentials.email ,password: credentials.password }) 
          });
          const json = await response.json()
          console.log(json)
          if (json.success) {
            // redirect
            localStorage.setItem('token', json.authtoken)
            props.showAlert("Successfully Logged in","success")
            navigate('/')
        }else{
            props.showAlert("Invalid credentials","danger")
        }
  
    }

    onchange=(e) => {
        setCredentials({...credentials, [e.target.name]:e.target.value});
    }
  return (
    <div className="container pb-5">
        <h1 className='text-center '> NoteKaro</h1>
        <br />
        
    <div className='container mb-5 pb-3 bg-success bg-opacity-10 border border-success rounded-2 flex col-9 shadow-lg'>
      <form onSubmit={handleClick}>
      <h5 className='text-center m-3'>Log in to Notekaro </h5>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"> <i className="fa-solid fa-envelope"></i> Email address </label>
    <input type="email" className="form-control border border-success" name='email' onChange={onchange}  value={credentials.name} id="email" aria-describedby="emailHelp"/>
 
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label"><i className="fa-solid fa-lock"></i> Password </label>
    <input type="password" className="form-control border border-success" name='password' value={credentials.password} onChange={onchange} id="exampleInputPassword1"/>
  </div>
    <div className='text-center m-2'>
  <button type="submit" className="btn btn-success text-center" >LOG IN</button>
  </div>
</form>
    </div>
    </div>
  )
}

export default Login
