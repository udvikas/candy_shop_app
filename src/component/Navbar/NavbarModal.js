import './NavbarModal.css'
export const ModalContent = ({ closeModal, showItem }) => {
  // Add your modal content here
  return (
    <div>
      <h2>Product Cart</h2>
      <div>
        {showItem.map((item) => {
          return (
            <div key={item.id} className="modal1">
              <h5>{item.e_name}</h5>
              <h5>{item.e_desc}</h5>
              <h5>{item.e_price}</h5>
              <button>Delete</button>
            </div>
          )
        })}
      </div>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
};

