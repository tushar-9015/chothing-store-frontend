import React, { useState } from 'react'
import { TiArrowLeftThick, TiArrowRightThick} from 'react-icons/ti';
import './slider.scss'

const Slider = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/15792384/pexels-photo-15792384.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/15728395/pexels-photo-15728395.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/6770031/pexels-photo-6770031.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };
  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
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
  )
}

export default Slider
