import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoPage from '../pages/NoPage';
import Home from '../pages/Home';
import Contactus from '../pages/Contactus';
import Aboutus from '../pages/Aboutus';
import Physiotherapist from '../pages/Physiotherapist';
import Diet from '../pages/Diet';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contactus />} />
      <Route exact path="/about" element={<Aboutus />} />
      <Route exact path="/services" element={<Physiotherapist />} />
      <Route exact path="/diet" element={<Diet />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NoPage />} />
    </Routes>

  );
}

export default Routing;
