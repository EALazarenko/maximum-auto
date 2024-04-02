import './App.css';
import { Route, Routes, } from 'react-router-dom';
import React, { useEffect, useState, } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import CarDetail from '../CarDetail/CarDetail';
import { url } from '../../utils/CarsApi';


function App() {
  const [cars, setCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('Chery');

  useEffect(() => {
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

    getCars();
  }, [selectedBrand]);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/"
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
