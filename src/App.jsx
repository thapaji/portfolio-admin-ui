import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Projects from "./pages/Projects";
import Messages from "./pages/Messages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  );
}

export default App;
