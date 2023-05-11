import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function Contact() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json()
    alert(result.status)
  }

  return (
    <div>
      <h1>Contact (under construction)</h1>

    <Form onSubmit={handleSubmit}>
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
        {status}
      </Button>
    </Form>
    <p style={{fontSize:"30px", marginTop:"20px"}}>Email me directly at <a href="mailto:jstavey13@icloud.com">jstavey13@icloud.com</a></p>
    <p style={{fontSize:"30px", marginTop:"20px"}}>Or Visit My Socials: 
    <a href="https://www.linkedin.com/in/jarrett-stavey-aa9b0315a/"><img src="public/assets/image/linkedinlogo.png" alt='linkedin logo' class="logo"></img></a> 
    <a href="https://github.com/JStavey13"><img src="public/assets/image/GitHub-Logo.png" alt='linkedin logo' class="logo"></img></a>
    
     </p>
    </div>
  );
}