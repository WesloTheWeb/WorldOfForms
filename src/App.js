import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import FormGeneric from './containers/Form_Generic/FormGeneric';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/generic" exact component={FormGeneric} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;