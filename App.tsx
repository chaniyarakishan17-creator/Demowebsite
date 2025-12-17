import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Clinic } from './pages/Clinic';
import { Procedures } from './pages/Procedures';
import { Recovery } from './pages/Recovery';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
