import './App.css';
import React from 'react';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer greetingProp='Bienvenidos al E-commerce con ReactJS' />
    </div>
  );
}

export default App;
