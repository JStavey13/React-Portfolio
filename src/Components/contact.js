import React, { useState } from 'react';
import linkedinLogo from "../image/linkedinlogo.png"
import githubLogo from "../image/GitHub-Logo.png"
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';



export default function Contact() {

  // contact form logic
  // const [status, setStatus] = useState("Submit");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   }
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus("Submit");
  //   let result = await response.json()
  //   alert(result.status)
  // }

  // form HTML 
  return (
    <div>
      {/* header */}
      <h1 style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "40px",
        // outlineStyle: "solid",
        // backgroundColor: "white",
        // borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        width: "20%",
        textShadow: "1px 1px 1px gray, 2px 2px 1px white",
      }}>Contact Me</h1>

      {/* input fields */}
      {/* <Form onSubmit={handleSubmit}>
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
    </Form> */}

      {/* contact links */}
      <p style={{
        fontSize: "30px",
        marginTop: "20px",
        fontWeight: "bold",
        textShadow: "1px 1px 1px gray, 2px 2px 1px white",
        textAlign: "center"
      }}>
        {`Email me directly at: `}
        <a href="mailto:jstavey13@icloud.com"
          style={{
            textShadow: "0px 0px"
          }}>
          jstavey13@icloud.com
        </a>
      </p>
      <p style={{
        fontSize: "30px",
        marginTop: "20px",
        fontWeight: "bold",
        textShadow: "1px 1px 1px gray, 2px 2px 1px white",
        textAlign: "center"
      }}>
        Or Visit My Socials:
        {/* lindedin link and pic */}
        <a href="https://www.linkedin.com/in/jarrett-stavey-aa9b0315a/">
          <img src={linkedinLogo} alt='LinkedIn Logo' class="logo"></img>
        </a>
        {/* github link and pic */}
        <a href="https://github.com/JStavey13">
          <img src={githubLogo} alt='GitHub Logo' class="logo"></img>
        </a>
      </p>

    </div>
    
  );
}