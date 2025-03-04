import React from "react";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Card from "./components/card";
import Accordion from "./components/accordion";
import Form from "./components/form";
import "./App.css";

const images = [
  "https://images.ctfassets.net/swt2dsco9mfe/3mu0p1gGUdYDDo2YYj5IK0/777cb0f5e2ae01560d56467bae14a1c7/1280x960-sts.jpeg",
  "https://images.ctfassets.net/swt2dsco9mfe/3Hl89cxcroRvpT2B43o8au/b9eb744dd72f29c25648d0bec09f9cd1/dnd_idrfm_wall1_1280.jpeg",
  "https://images.ctfassets.net/swt2dsco9mfe/5iAIB7LrBFLnuXosoySjDV/9e18fe81c628b543600cb3bdbb14340b/SCAG_1280x960_Wallpaper.jpeg",
];

const sections = [
  { title: "Races", content: "In Dungeons & Dragons 5e, 'races' refer to different playable character origins with unique physical traits, abilities, and cultural backgrounds, such as Elves (graceful and long-lived), Dwarves (sturdy warriors), Humans (versatile), etc." },
  { title: "Classes", content: "In Dungeons & Dragons 5th edition, 'classes' represent the core role your character plays in the game, defining their primary skills, abilities, and combat style, with options like Fighter (melee combatant), Barbarian (rage-powered warrior), Rogue (stealthy damage dealer), etc." },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Welcome to My DND App</h1>
        <Carousel images={images} />
        <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
          <Card
            image="https://images.ctfassets.net/swt2dsco9mfe/5o5XdSyUTleD5XfJfOeebM/cf7c0733a2a73efdf86c74137670235d/CurseofStrahd_Throne_1280x960_Wallpaper.jpeg"
            title="Curse of Strahd"
            description="Curse of Strahd is an adventure book for the 5th edition of the Dungeons & Dragons role-playing game. It was released on March 15, 2016 and is based on the Ravenloft module published in 1983."
          />
          <Card
            image="https://images.ctfassets.net/swt2dsco9mfe/3GiDTY0dHsQ21h4l28KjIv/d519f634c26a3d028eae74d3312d29a8/MadMage_Expansion_1280x960_WallpaperTemplate.jpeg"
            title="Waterdeep: Dungeon of the Mad Mage"
            description="Waterdeep: Dungeon of the Mad Mage is an adventure module for the 5th edition of the Dungeons & Dragons fantasy role-playing game. It is the second part of the Waterdeep storyline and follows the first adventure, Waterdeep: Dragon Heist."
          />
        </div>
        <Accordion sections={sections} />
        <Form />
      </main>
    </div>
  );
}

export default App;