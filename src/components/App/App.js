import './App.css';
import { Route, Routes, } from 'react-router-dom';
import React, { useEffect, useState, } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import CarDetail from '../CarDetail/CarDetail';
import { url } from '../../utils/CarsApi';
import Preloader from '../Preloader/Preloader';


function App() {
  const [cars, setCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('Chery');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getCars = async () => {
      try {
        const res = await fetch(`${url}${selectedBrand}`);
        if (!res.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await res.json();
        setCars(data.list);

      } catch (error) {
        console.error('Произошла ошибка:', error.message);
      };
    }
    setIsLoading(false);
    getCars();
  }, [selectedBrand]);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  if (isLoading) return <Preloader />;

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/maximum-auto"
          element={<Main
            cars={cars}
            handleBrandClick={handleBrandClick}
            selectedBrand={selectedBrand}
          />} />
        <Route path="/car/:id"
          element={<CarDetail
            cars={cars}
          />} />
      </Routes>
    </div>
  );
}

export default App;
