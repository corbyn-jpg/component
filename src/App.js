import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  { title: "Dwarves", content: "Dwarves were raised from the earth in the elder days by a deity of the forge. Called by various names on different worlds—Moradin, Reorx, and others—that god gave dwarves an affinity for stone and metal and for living underground. The god also made them resilient like the mountains, with a life span of about 350 years. Squat and often bearded, the original dwarves carved cities and strongholds into mountainsides and under the earth. Their oldest legends tell of conflicts with the monsters of mountaintops and the Underdark, whether those monsters were towering giants or subterranean horrors. Inspired by those tales, dwarves of any culture often sing of valorous deeds—especially of the little overcoming the mighty. On some worlds in the multiverse, the first settlements of dwarves were built in hills or mountains, and the families who trace their ancestry to those settlements call themselves hill dwarves or mountain dwarves, respectively. The Greyhawk and Dragonlance settings have such communities.",
    image:
    "https://www.dndbeyond.com/avatars/thumbnails/43940/449/420/618/638607448977617455.png",
  },
  { title: "Elves", content: "Created by the god Corellon, the first elves could change their forms at will. They lost this ability when Corellon cursed them for plotting with the deity Lolth, who tried and failed to usurp Corellon’s dominion. When Lolth was cast into the Abyss, most elves renounced her and earned Corellon’s forgiveness, but that which Corellon had taken from them was lost forever. No longer able to shape-shift at will, the elves retreated to the Feywild, where their sorrow was deepened by that plane’s influence. Over time, curiosity led many of them to explore other planes of existence, including worlds in the Material Plane. Elves have pointed ears and lack facial and body hair. They live for around 750 years, and they don’t sleep but instead enter a trance when they need to rest. In that state, they remain aware of their surroundings while immersing themselves in memories and meditations. An environment subtly transforms elves after they inhabit it for a millennium or more, and it grants them certain kinds of magic. Drow, high elves, and wood elves are examples of elves who have been transformed thus." ,
    image:
    "https://www.dndbeyond.com/avatars/thumbnails/43940/467/420/618/638607449394457692.png",
  },
];

function Home() {
  return (
    <div>
      <h1>Welcome to My DND App</h1>
      <Carousel images={images} />
      <p style={{color: "white", fontSize: "25px"}}>Quests</p>
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
    </div>
  );
}

function Races() {
  return (
    <div>
      <h1>Races</h1>
      <Accordion sections={sections} />
    </div>
  );
}

function Classes() {
  return (
    <div>
      <h1>Classes</h1>
      <Form />
    </div>
  );
}

function Spells() {
  return (
    <div>
      <h2 style={{color: "white", fontSize: "20px"}}>Fireball</h2>
      <p style={{color: "white", paddingLeft: "200px", paddingRight: "200px"}}>
        A bright streak flashes from you to a point you choose within range and then blossoms with a low roar into a fiery explosion. Each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw, taking 8d6 Fire damage on a failed save or half as much damage on a successful one.
        <br /><br />
        Flammable objects in the area that aren’t being worn or carried start burning.
        <br /><br />
        Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3.
        <br /><br />
        * - (a ball of bat guano and sulfur)
      </p>
      <img
        src="https://www.glassstaff.com/cdn/shop/articles/fireball-d20-design-made-by-glassstaff_jpg.webp?v=1674642119&width=2048"
        alt="Fireball Spell"
      />
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ minHeight: "100vh", backgroundColor: "#f0f0f0", padding: "20px" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/races" element={<Races />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/spells" element={<Spells />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;