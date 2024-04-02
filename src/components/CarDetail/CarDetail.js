import './CarDetail.css';
import React from 'react';
import garantiia from '../../images/garantiia.svg';
import iconYear from '../../images/iconYear.svg';
import iconEngine from '../../images/iconEngine.svg';
import iconTM from '../../images/iconTM.svg';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';

const CarDetail = () => {
  const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div>
      {selectedCar ? (
        <div>
          <section className='promo'>
            <h1 className='promo__title'>{selectedCar.feedData.brandName} {selectedCar.feedData.modelName} {selectedCar.feedData.productionYear} года</h1>
            <span className='promo__subtitle'>VIN: {selectedCar.feedData.vin}</span>
            <div className='promo__container'>
              <div className='promo_description'>
                <ul className='promo__list'>
                  <li className='promo_item'>
                    <h3 className='promo__price'>{formatPrice(selectedCar.feedData.autoPrice)} &#8381;</h3>
                  </li>
                  <li className='promo_item'>
                    <img src={garantiia} alt='Иконка Гарантия юр. чистоты' />
                    <p className='promo__text'>Гарантия юр. чистоты</p>
                  </li>
                </ul>
                <h3 className='promo__title'>Характеристики</h3>
                <ul className='promo__area'>
                  <li className='promo_item'>
                    <img className='promo__icon' src={iconYear} alt='Иконка Год выпуска' />
                    <p className='promo__text'>{selectedCar.feedData.productionYear} год выпуска</p>
                  </li>
                  <li className='promo_item'>
                    <img className='promo__icon'
                      src={iconEngine}
                      alt='Иконка Характеристики двигателя'
                    />
                    <p className='promo__text'>
                      {`${selectedCar.feedData.engine.engineCapacity} л
                  / ${selectedCar.feedData.engine.enginePower} л.с.
                  / ${selectedCar.feedData.equipmentVariantFuelType}`}
                    </p>
                  </li>
                  <li className='promo_item'>
                    <img className='promo__icon' src={iconTM} alt='Иконка Коробка передач' />
                    <p className='promo__text'>КП - {selectedCar.feedData.equipmentVariantTransmissionType}</p>
                  </li>
                </ul>
              </div>
              <Slider images={selectedCar.photobank.imgs} />
            </div>
          </section>
          <Banner />
        </div>
      ) : (
        <p>Данные об автомобиле не найдены</p>
      )}
    </div>
  );
};

export default CarDetail;
