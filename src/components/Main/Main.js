import './Main.css';
import CarsCardList from '../CarCardList/CarsCardList';
import NavBar from '../NavBar/NavBar';

const Main = ({ cars, handleBrandClick, selectedBrand, handleModelClick }) => {


  return (
    <main className='main'>
      <h1 className='main__title'>Автомобили {selectedBrand} в СПб</h1>
      <div className='main__group'>
        <div>
          <NavBar handleBrandClick={handleBrandClick} />
        </div>
        <CarsCardList cars={cars} handleModelClick={handleModelClick} />

      </div>
    </main>
  )
}

export default Main;
