import './NavBar.css';
import NavTab from '../NavTab/NavTab';
import { SMALL_SCREEN } from '../../utils/constant';
import useScreenWidth from '../../hooks/useScreenWidth';
import Swiper from '../Swiper/Swiper';

const NavBar = ({ handleBrandClick, selectedBrand }) => {
  const screenWidth = useScreenWidth();

  return (
    <section className='nav-bar'>
      {screenWidth > SMALL_SCREEN ? (
        <>
          <h3 className='nav-bar__title'>Бренд</h3>
          <NavTab handleBrandClick={handleBrandClick} selectedBrand={selectedBrand} />
        </>
      ) : (
        <Swiper handleBrandClick={handleBrandClick} selectedBrand={selectedBrand} />)}

    </section>
  )
}

export default NavBar;
