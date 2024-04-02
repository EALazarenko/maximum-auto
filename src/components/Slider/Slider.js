import './Slider.css';
import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className='slider'>
      <div className='slider__image-container'>
        <img className='slider__image' src={images[currentImageIndex].url}
          alt={`Автомобиль ${images[currentImageIndex].brandName} ${images[currentImageIndex].modelName}`}
        />
      </div>
      <div className='slider__segments'>
        {images.slice(currentImageIndex, currentImageIndex + 4).map((image, index) => (
          <div key={index} className={`slider__segment ${currentImageIndex === index ? 'active' : ''}`} onClick={() => changeImage(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
