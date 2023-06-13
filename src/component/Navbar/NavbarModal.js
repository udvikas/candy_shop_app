import { useState } from 'react';
import './NavbarModal.css'
export const ModalContent = ({ closeModal, showItem }) => {

  const [cartItems, setCartItems] = useState();
  const handleDelete = (item) => {
    const updatedCartItems = showItem.splice(item, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h2>Product Cart</h2>
      <div>
        {showItem.map((item) => {
          return (
            <div key={item.id} className="modal1">
              <h6>{item.id} </h6>
              <h6>{item.qty}</h6>
              <h6>{item.e_name}</h6>
              <h6>{item.e_desc}</h6>
              <h6>{item.e_price}</h6>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          )
        })}
      </div>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
};

