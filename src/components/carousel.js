import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={styles.carousel}>
      <button onClick={prevSlide} style={styles.button}>
        &lt;
      </button>
      <img src={images[currentIndex]} alt="slide" style={styles.image} />
      <button onClick={nextSlide} style={styles.button}>
        &gt;
      </button>
    </div>
  );
};

const styles = {
  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "600px",
    height: "400px",
    margin: "0 10px",
  },
  button: {
    backgroundColor: "#444",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
  },
};

export default Carousel;