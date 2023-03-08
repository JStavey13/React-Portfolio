import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>

    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name" />
    </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Text Here</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    <Button variant="primary" type="submit">
        Submit!
      </Button>
    </Form>
    </div>
  );
}