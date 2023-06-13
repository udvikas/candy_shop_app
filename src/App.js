import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Form from "./component/form/Form";
import { Routes, Route } from "react-router-dom";
import Show from "./component/Show/Show";

function App() {
  const [ cartItems, setCartItems] = useState([]);

  const addToCart1 = (item, quantity = 1) => {
    const updatedItem = Array(quantity).fill(item);
    setCartItems([...cartItems, ...updatedItem]);
  };

  
  return (
    <div>
      <Navbar cartCount={cartItems.length} showItem={cartItems} />
      <Routes>
        <Route exact path="/show" element={<Show addToCart1={addToCart1} />}></Route>
        <Route exact path="/" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
