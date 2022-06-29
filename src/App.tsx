import React from 'react';
import './App.css';
import './assets/scss/normalize.scss';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';
import BulletInBoard from './entities/BulletInBoard';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/"></Route>
        <Route path="/bulletin_board" element={<BulletInBoard />}>
          <Route path=":id"></Route>
        </Route>
      </Routes>
    </PageLayout>
  );
};

export default App;
