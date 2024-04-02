import { brands } from '../../utils/brands';
import React, { useState } from 'react';
import './NavTab.css'

const NavTab = ({ handleBrandClick }) => {
  const [activeBrand, setActiveBrand] = useState(brands[0]);

  const handleBrand = (brand) => {
    handleBrandClick(brand);
    setActiveBrand(brand);
  };

  return (
    <div className='nav-tab'>
      {brands.map((brand, index) => (
        <button
          className={`nav-tab__link ${brand === activeBrand ? 'active' : ''}`}
          key={index} onClick={() => handleBrand(brand)}>
          {brand}
        </button>
      ))}
    </div>
  )
}

export default NavTab;
