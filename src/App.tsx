import React from "react";
import "./App.css";
import "./assets/scss/normalize.scss";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </PageLayout>
  );
};

export default App;
