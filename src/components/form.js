import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    margin: "40px 0",
  },
  input: {
    padding: "10px",
    marginRight: "10px",
    width: "300px",
    fontSize: "16px"
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#444",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  },
};

export default Form;