import './Banner.css';
import carBanner from '../../images/carBanner.svg';

const Banner = () => {


  return (
    <section className='banner'>
        <h3 className='banner__title'>Кредит на новый Chery Tiggo</h3>
        <div className='banner__container'>
        <span className='banner__subtitle'>
          Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»
        </span>
        <button className='banner__button'>Оформить</button>
      </div>
      <img src={carBanner} alt='Изображение автомобиля' className='banner__img' />
    </section>
  )
}

export default Banner;
