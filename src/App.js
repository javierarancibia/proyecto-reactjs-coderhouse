import './App.css';
import React from 'react';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/containers/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Switch, Route, useParams} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Switch>
          <main>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/">
              <ItemListContainer greetingProp='Bienvenidos al E-commerce con ReactJS' />
            </Route>
          </main>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

