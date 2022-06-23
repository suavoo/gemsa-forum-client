import React from 'react';
import './App.css';
import Home from './components/routes/Home';
import Thread from './components/routes/thread/Thread';
import { Routes, Route } from "react-router-dom";

function App() {
  //const renderHome = (props: any) => <Home {...props} />

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorythreads/:categoryId" element={<Home />} />
      <Route path="/thread/:id" element={<Thread />} />
    </Routes>
  );
}

export default App;
