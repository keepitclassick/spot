import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Registration() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter you name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter location" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cell Phone</Form.Label>
        <Form.Control type="phone" placeholder="Enter phone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
