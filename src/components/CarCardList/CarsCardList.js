import './CarsCardList.css'
import CarsCard from '../CarsCard/CarsCard';

const CarsCardList = ({ cars, handleModelClick }) => {
  const limitedCars = cars.slice(0, 10);

  return (
    <section className='cars'>
      {limitedCars.length > 0 ? (
        <ul className='cars__list'>
          {limitedCars.map((car, _id) => (
            <CarsCard key={_id} car={car} handleModelClick={handleModelClick} />
          ))}
        </ul>
      ) : (
        <p>По вашему запросу ничего не найдено</p>
      )}
    </section>
  )
}

export default CarsCardList;
