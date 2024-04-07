import { brands } from '../../utils/brands';
import './Swiper.css'

const Swiper = ({ handleBrandClick, selectedBrand }) => {

  const handleBrand = (brand) => {
    handleBrandClick(brand);
  };

  return (
    <div className='swiper'>
      <div className='swiper__list'>
        {brands.map((brand, index) => (
          <button
            className={`swiper__link ${brand === selectedBrand ? 'active' : ''}`}
            key={index} onClick={() => handleBrand(brand)}>
            {brand}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Swiper;
