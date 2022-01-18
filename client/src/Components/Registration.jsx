import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Registration.scss";
import Axios from "axios";

export default function Registration() {
  const [usersName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/api/users", {
      name: usersName,
      email: email,
      phone_number: cell,
      password: password,
      favourited_pets: "",
      location: location,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <Form id="register">
      <h1>Register Now!</h1>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          id="email"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          id="email"
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control
          id="email"
          type="text"
          placeholder="Enter location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cell Phone</Form.Label>
        <Form.Control
          id="email"
          type="text"
          placeholder="Enter phone number"
          onChange={(e) => {
            setCell(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          id="email"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="dark" type="submit" onClick={register}>
        Submit
      </Button>
    </Form>
  );
}
