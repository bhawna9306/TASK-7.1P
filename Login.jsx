import React, { useState } from "react";
import './login.css';
import { Link } from 'react-router-dom';
import { signemailandpass } from './utils/firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const history = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    try {
      const response = await signemailandpass(email, password);

      console.log(response);
      history("/");

    } catch (error) {
      alert('Error in login', error.message);
    }
  };

  const [contact, setContact] = useState({
    email: '',
    password: '',
  });

  const { email, password } = contact;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => ({
      ...preValue,
      [name]: value
    }));
  };

  return (
    <div className="login">
      <Link to="/Sign"><button className="signup">Sign Up</button></Link>

      <h2 style={{ float: "left" }}>Your email</h2>
      <input type="text" className="email2" name="email" value={contact.email} onChange={handleChange}></input>

      <h2 style={{ float: "left" }}>Your password</h2>
      <input type="password" className="password2" name="password" value={contact.password} onChange={handleChange}></input>

      <button className="login2" onClick={login}>Login</button>
    </div>
  );
}

export default Login;
