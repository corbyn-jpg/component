import React, { useState } from "react";

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} style={styles.section}>
          <button onClick={() => toggleSection(index)} style={styles.button}>
            {section.title}
          </button>
          {activeIndex === index && <p style={styles.content}>{section.content}</p>}
        </div>
      ))}
    </div>
  );
};

const styles = {
  section: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    textAlign: "left",
    border: "none",
    backgroundColor: "#f1f1f1",
    cursor: "pointer",
  },
  content: {
    padding: "10px",
    margin: 0,
  },
};

export default Accordion;