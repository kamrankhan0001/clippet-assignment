import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
  const [password, setPassword] = useState("");
      const [errorMessage, setErrorMessage] = useState('');
    
      
 const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.name === name && storedUser.password === password) {
        
    //   alert("Login successful!");
      navigate("/home");
    } else {
        setErrorMessage('Invalid Credentials');
    }
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
