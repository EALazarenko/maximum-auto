import { brands } from '../../utils/brands';
import './NavTab.css'

const NavTab = ({ handleBrandClick, selectedBrand }) => {

  const handleBrand = (brand) => {
    handleBrandClick(brand);
  };

  return (
    <div className='nav-tab'>
      {brands.map((brand, index) => (
        <button
          className={`nav-tab__link ${brand === selectedBrand ? 'active' : ''}`}
          key={index} onClick={() => handleBrand(brand)}>
          {brand}
        </button>
      ))}
    </div>
  )
}

export default NavTab;
