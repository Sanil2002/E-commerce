// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './Pages/Home';
import { About } from './Pages/About';
import Store from './Pages/Store';
import { Navbar } from './Components/Navbar';
import Singleproduct from './Pages/Singleproduct';
import { Shoppingcartprovider } from './Context/Shoppingcartcontext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Cart from './Components/Cart';
import CheckoutSuccess from './Pages/Checkout';
import Profile from './Pages/Profile';
import Update from './Pages/Update';

const App = () => {
  return (
    <Shoppingcartprovider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/About" element={<About />} />
          <Route path="/Store/:id" element={<Singleproduct />} />
          <Route path="/checkout" element={<CheckoutSuccess/>} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Update" element={<Update/>} />
        </Routes>
        <Cart />
      </Container>
    </Shoppingcartprovider>
  );
};

export default App;
