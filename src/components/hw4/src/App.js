import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Header from './components/header'
import Footer from './components/footer'
import Projects from './components/project'

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;