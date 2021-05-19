import './App.css';
import React from 'react';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/containers/ItemDetailContainer/ItemDetailContainer'
import CategoryDetailContainer from '../src/containers/ItemDetailContainer/CategoryDetailContainer'
import Cart from './containers/context/Cart'
import {CartProvider} from '../src/containers/context/CartContext'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <Switch>
            <main>
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/category/:category">
                <ItemListContainer />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route exact path="/">
                <ItemListContainer greetingProp='Bienvenidos al E-commerce con ReactJS' />
              </Route>
            </main>
            </Switch>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

