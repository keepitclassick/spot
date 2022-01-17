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
import "./Login.scss";
import axios from 'axios';
export default function Login() {
  

  const [user, setCurrentUser] = useState("null")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


	const login = e => {
		e.preventDefault();

    
		const data = {
			email: document.getElementById('email').value,
			password: document.getElementById('password').value,
		};

		console.log(data);

		axios
			.post('/api/login', data)
			.then(res => {
				setCurrentUser(res.data);
				const user = JSON.stringify(res.data);
        localStorage.setItem("userID", user);
        window.location.href = "/adopt";
			})
			.catch(err => {
				console.log(err);
        window.alert("Incorrect email or password")
			});

	};
  const handleSubmit = function () {};


 
  
  

  return (
    <div class="bg-img">
<div className="Login">
 
      <Form action="/action_page.php" class="container" onSubmit={handleSubmit}>
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
        <div className="btn">
         <button type="submit" onClick={login}>Login</button>
    </div>
      </Form>
    </div>
    </div>


    
  
    
  );
}
