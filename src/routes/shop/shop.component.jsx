import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from "../categories-preview/categories-preview.component";

import './shop.style.scss'

const Shop = () => {
  
  return (
    <div className='shop-container'>
      <Routes>
        <Route index element={<CategoriesPreview />} />
      </Routes>
    </div>
  );
};

export default Shop;