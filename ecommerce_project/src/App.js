import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ProductList from './screens/ProductList';
import ProductDetails from './screens/ProductDetails';
import OrderStepper from './screens/OrderStepper';
import ManageProducts from './screens/ManageProducts';
import AddProduct from './screens/AddProduct';
import ModifyProduct from './screens/ModifyProduct';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Router>
      <Header onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<ProductList searchQuery={searchQuery} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/order" element={<OrderStepper />} />
        <Route path="/manage" element={<ManageProducts />} />
        <Route path="/manage/add" element={<AddProduct />} />
        <Route path="/manage/edit/:id" element={<ModifyProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
