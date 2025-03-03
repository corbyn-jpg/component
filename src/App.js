import React from "react";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Card from "./components/card";
import Accordion from "./components/accordion";
import Form from "./components/form";
import "./App.css";

const images = [
  "https://placehold.co/600x400/png",
  "https://placehold.co/600x400/orange/white",
  "https://placehold.co/600x400/blue/black",
];

const sections = [
  { title: "What is JavaScript?", content: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications." },
  { title: "What are React Hooks?", content: "Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8." },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Welcome to My React App</h1>
        <Carousel images={images} />
        <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
          <Card
            image="https://placehold.co/600x400/green/white"
            title="React Components"
            description="Components are the building blocks of a React application. They let you split the UI into independent, reusable pieces."
          />
          <Card
            image="https://placehold.co/600x400/purple/white"
            title="React State"
            description="State allows React components to manage and respond to dynamic data, making them interactive and dynamic."
          />
        </div>
        <Accordion sections={sections} />
        <Form />
      </main>
    </div>
  );
}

export default App;