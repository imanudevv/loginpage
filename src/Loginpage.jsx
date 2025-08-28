import React from 'react'
import { useNavigate } from 'react-router-dom' 
import './Loginpage.css'

const Loginpage = () => {
  const navigate = useNavigate();  

  const handleLogin = (e) => {
    e.preventDefault();
    
    navigate("/list");
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <div className='log'>
        <form onSubmit={handleLogin}>  
          <input type="text" placeholder='Username' required />
          <input type="password" placeholder='Password' required />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Loginpage;
