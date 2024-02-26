import { useState } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal'); 

export default function Modal() {
  // Step 1: Handle button click to change state
  const [isOpen, setIsOpen] = useState(false);

  // Toggle modal open/close state
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button className = "modal-button" onClick={toggleModal}>Click Me!</button>
      {
        // Step 2: Conditionally show this based on open state
        isOpen && createPortal(
          <div style={{
            // Step 3: Example generic styling, replace with your README specifications
            position: 'fixed', 
            top: '50%', 
            fontFamily: 'Georgia, serif',
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white', 
            padding: '20px', 
            zIndex: 1000,
            width: '20rem',
            height: '20rem',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'

          }}>
            <p>Modal Content Here</p>
            <button onClick={toggleModal}>Close</button>
          </div>,
          modalRoot as Element
        )
      }
    </>
  );
}
