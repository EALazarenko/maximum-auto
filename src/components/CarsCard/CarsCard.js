import { Link } from 'react-router-dom';
import './CarsCard.css';
import { SMALL_SCREEN } from '../../utils/constant';
import useScreenWidth from '../../hooks/useScreenWidth';

const CarsCard = ({ car }) => {
  const screenWidth = useScreenWidth();

  const handleCarData = (_id) => {
    localStorage.setItem('selectedCar', JSON.stringify(car));
  };

  return (
    <li className='card'>
      <img className='card__img' src={car.photobank.imgs[0].url} alt={`Автомобиль ${car.feedData.brandName} ${car.feedData.modelName}`} />
      {screenWidth > SMALL_SCREEN ? (
        <div>
          <h4 className='card__title'>{car.feedData.brandName} {car.feedData.modelName}</h4>
          {car.feedData.equipmentName !== 'ПустаяКомплектация' && (
            <p className='card__title'>{car.feedData.equipmentName}</p>
          )}
        </div>
      ) : (
        <h4 className='card__title'>
          {car.feedData.brandName} {car.feedData.modelName} {car.feedData.equipmentName !== 'ПустаяКомплектация' ? car.feedData.equipmentName : ''}
        </h4>
      )}
      <span
        className='card__subtitle'>
        {`${car.feedData.engine.engineCapacity} / ${car.feedData.engine.enginePower} Л.С. / ${car.feedData.equipmentVariantTransmissionType}`}
      </span>
      <button className='card__button'>
        <Link
          to={{ pathname: `/car/${car._id}` }}
          className='card__link'
          onClick={() => handleCarData(car._id)}>
          Подробнее
        </Link>
      </button>
    </li>
  )
}

export default CarsCard;
