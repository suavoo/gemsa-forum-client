import React from 'react';
import './App.css';
import Home from './components/routes/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  //const renderHome = (props: any) => <Home {...props} />

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorythreads/:categoryId" element={<Home />} />
    </Routes>
  );
}

export default App;
