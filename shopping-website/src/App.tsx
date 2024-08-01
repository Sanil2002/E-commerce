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
import { addProducts, initDB } from './Utilities/db';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {



  //................................................................


  useEffect(() => {
    const fetchAndStoreProducts = async () => {
      const db = await initDB();
      const cachedProducts = await db.getAll('products');

      if (cachedProducts.length === 0) {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          const products = response.data.products;
          console.log("app.tsx",products)
          await addProducts(db, products); // Store fetched products in IndexedDB
          console.log('Products stored in IndexedDB');
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      } else {
        console.log('Using cached products from IndexedDB');
        console.log(cachedProducts)
      }
    };

    fetchAndStoreProducts();
  }, []);


  // ...............................................................


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
