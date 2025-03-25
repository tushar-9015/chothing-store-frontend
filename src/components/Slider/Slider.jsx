import React, { useState, useEffect } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import "./slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/15792384/pexels-photo-15792384.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/15728395/pexels-photo-15728395.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/20054070/pexels-photo-20054070.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/6770031/pexels-photo-6770031.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/28354681/pexels-photo-28354681.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]

  const totalSlides = data.length;

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Adjust time as needed (4 seconds here)

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <TiArrowLeftThick />
        </div>
        <div className="icon" onClick={nextSlide}>
          <TiArrowRightThick />
        </div>
      </div>
    </div>
  );
};

export default Slider;
