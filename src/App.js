import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home';
import About from './screens/About';
import Privacy from './screens/Privacy';
import Contact from './screens/Contact';
import Terms from './screens/Terms';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;