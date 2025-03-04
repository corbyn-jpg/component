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
    width: "70%",
    borderRadius: "8px",
    marginBottom: "15px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    width: "100%",
    padding: "12px",
    textAlign: "left",
    border: "none",
    backgroundColor: "#f1f1f1",
    cursor: "pointer",
    fontSize: "16px",
  },
  content: {
    padding: "20px",
    margin: 0,
    textAlign: "center",
  },
};

export default Accordion;