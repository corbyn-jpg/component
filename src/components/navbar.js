import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.brand}>My Brand</h1>
      <div style={styles.dropdown}>
        <button onClick={toggleDropdown} style={styles.dropdownButton}>
          Menu
        </button>
        {isOpen && (
          <ul style={styles.dropdownMenu}>
            <li style={styles.menuItem} onClick={() => alert("Option 1 clicked")}>
              Option 1
            </li>
            <li style={styles.menuItem} onClick={() => alert("Option 2 clicked")}>
              Option 2
            </li>
            <li style={styles.menuItem} onClick={() => alert("Option 3 clicked")}>
              Option 3
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  brand: {
    margin: 0,
  },
  dropdown: {
    position: "relative",
  },
  dropdownButton: {
    backgroundColor: "#444",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "#444",
    listStyle: "none",
    padding: 0,
    margin: 0,
    border: "1px solid #555",
  },
  menuItem: {
    padding: "10px 15px",
    cursor: "pointer",
  },
};

export default Navbar;