import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Header } from "../components/Header";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "Portfolio Website",
      description: "A personal portfolio website.",
      image: "",
      videoUrl: "",
    },
    {
      title: "E-commerce App",
      description: "An online shopping platform.",
      image: "",
      videoUrl: "",
    },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description && image && videoUrl) {
      const newProject = {
        title,
        description,
        image: URL.createObjectURL(image),
        videoUrl,
      };
      setProjects([...projects, newProject]);
      setTitle("");
      setDescription("");
      setImage(null);
      setVideoUrl("");
      alert("Project added!");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h2>Projects</h2>
        <div className="d-flex flex-wrap mt-4">
          {projects.map((project, index) => (
            <Card key={index} className="m-2" style={{ width: "18rem" }}>
              {project.image && <Card.Img variant="top" src={project.image} alt={project.title} />}
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {project.videoUrl && (
                  <Card.Link href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                    Watch Video
                  </Card.Link>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
        <Form onSubmit={handleSubmit} className="mt-5 border shadow p-5">
          <Form.Group controlId="projectTitle">
            <Form.Label>Project Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="projectDescription">
            <Form.Label>Project Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="projectImage">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
          </Form.Group>
          <Form.Group controlId="projectVideoUrl">
            <Form.Label>Video URL</Form.Label>
            <Form.Control type="url" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} required />
          </Form.Group>
          <Button variant="outline-primary" type="submit" className="w-100 mt-5">
            Add Project
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Projects;
