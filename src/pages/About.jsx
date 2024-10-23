import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Header } from "../components/Header";

const About = () => {
  const [aboutText, setAboutText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("About section updated!");
  };

  return (
    <>
      <Header />
      <Container>
        <h2>About Me</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="aboutText">
            <Form.Label>About</Form.Label>
            <Form.Control as="textarea" rows={5} value={aboutText} onChange={(e) => setAboutText(e.target.value)} required />
          </Form.Group>
          <Button variant="outline-primary" type="submit" className="mt-5 w-100">
            Save
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default About;
