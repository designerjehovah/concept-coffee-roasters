import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './reusables/components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Subscribe from './pages/Subscribe';
import Footer from './reusables/components/Footer';
import Modal from './pages/Subscribe/components/Modal';

function App() {
  return (
    <Router>
      <div className="App relative p-6 md:p-10 lg:px-20 lg:py-11 xl:w-3/4 xl:mx-auto">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />}>
            <Route path="modal" element={<Modal />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
