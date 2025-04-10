import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Social from './pages/Social';
import UN from './pages/UN';
import UzbekistanFaceEurope from './pages/UzbekistanFace/Europe';
import UzbekistanFaceAmerica from './pages/UzbekistanFace/America';
import UzbekistanFaceAsia from './pages/UzbekistanFace/Asia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="social" element={<Social />} />
          <Route path="un" element={<UN />} />
          <Route path="uzbekistan-face">
            <Route path="europe" element={<UzbekistanFaceEurope />} />
            <Route path="america" element={<UzbekistanFaceAmerica />} />
            <Route path="asia" element={<UzbekistanFaceAsia />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
