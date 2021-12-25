import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Projects from './components/Projects';
import Work from './components/Work';
import About from './components/About';
import Resume from './components/Resume';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <Header />
      <About />
      <Work />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
