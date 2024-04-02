import './Header.css';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <h2 className='header__title'>Официальный дилер  Максимум</h2>
    </header>
  )
}

export default Header;
