import React from 'react';
import './App.css';
import './assets/scss/normalize.scss';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';
import BulletInBoard from './entities/BulletInBoard';
import GoodItemDetailed from './entities/GoodItemDetailed';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" />
        <Route path="/bulletin_board" element={<BulletInBoard />} />
        <Route path="/bulletin_board/:uuid" element={<GoodItemDetailed />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
