// src/Messages.jsx
import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Header } from "../components/Header";

const Messages = () => {
  // Dummy data representing messages from the contact form
  const messages = [
    { name: "Alice", email: "alice@example.com", message: "Great portfolio!" },
    { name: "Bob", email: "bob@example.com", message: "Interested in your services." },
    { name: "Charlie", email: "charlie@example.com", message: "How can I get in touch?" },
  ];

  return (
    <>
      <Header />
      <Container>
        <h2>Messages</h2>
        <ListGroup>
          {messages.map((msg, index) => (
            <ListGroup.Item key={index}>
              <strong>{msg.name}</strong> ({msg.email}): {msg.message}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default Messages;
