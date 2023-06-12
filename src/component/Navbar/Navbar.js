import React,{useState} from "react";
import "./Navbar.css";
import Modal from "react-modal";
import { ModalContent } from "./NavbarModal";

function Navbar({ cartCount,showItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
    
  const showCart = () => {
    openModal();
  };
  

  return (
    <>
    <div className="cover">
      <h5>Candy Shop </h5>
      <button onClick={showCart}>
        {" "}
        Cart{" "}
        <span style={{ color: "yellow", fontWeight: "bold" }}>{cartCount}</span>
      </button>
    </div>
    <Modal  isOpen={isModalOpen} onRequestClose={closeModal}>
      <ModalContent showItem={showItem} closeModal={closeModal} />
    </Modal>
    </>
  );
}

export default Navbar;
