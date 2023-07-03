import Home from './pages/Home.js';
import SignUp from './pages/SignUp.js';
import Login from './pages/LogIn.js';
import New from './pages/New.js'
import ShoesDetail from './pages/shoes_detail.js';
import About from './pages/About.js'
import Cart from './compenents/Cart.js';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductProvider } from './compenents/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
      
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/LogIn">
            <Login />
          </Route>
          <Route path="/New">
            <New />
          </Route>
          <Route path="/shoes_detail"> 
            <ShoesDetail />
          </Route>
          <Route path="/About"> 
            <About />
          </Route>
          <Route path="/Home"> 
            <Home />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </div>
      
      </Router>
    </ProductProvider>
  );
}

export default App;
