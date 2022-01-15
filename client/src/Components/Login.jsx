// import axios from 'axios';
// import { useEffect } from 'react';

// function Login() {

  // const [currentUser, setCurrentUser]
  //login example
  // const login = () => {
  //   axios.post("/api/login").then((res) => setCurrentUser(res.data))
  // }

//   return (
//     <div className='Login'>
// 		</div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "./Login.css";
import axios from 'axios';
export default function Login() {
  
  const login = () => {
    axios.post("/api/login").then((res) => setEmail(res.data))
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/* <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button> */}
        <button onClick={login}>Login</button>
      </Form>
    </div>
  );
}