import { brands } from '../../utils/brands';
import React, { useState } from 'react';
import './Swiper.css'

const Swiper = ({ handleBrandClick }) => {
  const [activeBrand, setActiveBrand] = useState(brands[0]);

  const handleBrand = (brand) => {
    handleBrandClick(brand);
    setActiveBrand(brand);
  };

  return (
    <div className='swiper'>
      <div className='swiper__list'>
        {brands.map((brand, index) => (
          <button
            className={`swiper__link ${brand === activeBrand ? 'active' : ''}`}
            key={index} onClick={() => handleBrand(brand)}>
            {brand}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Swiper;
