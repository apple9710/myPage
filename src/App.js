import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wiget from './pages/Wiget';


const App = () => {


  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/wiget" element={<Wiget/>} />
        </Routes>
    </div>
  );
};

export default App;