import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CreateCV from './pages/CreateCV';
import About from './pages/About';
import Templates from './pages/Templates';

import Tips from './pages/Tips';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateCV />} />
          <Route path="tips" element={<Tips />} />
          <Route path="templates" element={<Templates />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
