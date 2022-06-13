import React from 'react';
import Footer from './components/Includes/Footer';
import Header from './components/Includes/Header';
import Routing from './routes/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />

    </div>
  );
}

export default App;
