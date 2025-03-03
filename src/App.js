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