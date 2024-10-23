import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Header } from "../components/Header";

const Categories = () => {
  const [categories, setCategories] = useState(["MERN Stack", "Java", "Python", "Front-end"]);
  const [newCategory, setNewCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newCategory) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
      alert("Category added!");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h2>Categories</h2>
        <div className="d-flex flex-wrap mt-4">
          {categories.map((category, index) => (
            <Card key={index} className="m-2" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>This is a brief description of the {category} category.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <Form onSubmit={handleSubmit} className="mt-5">
          <Form.Group controlId="newCategory">
            <Form.Label>Add New Category</Form.Label>
            <Form.Control type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} required />
          </Form.Group>
          <Button variant="outline-primary" type="submit" className="w-100 mt-5">
            Add Category
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Categories;
