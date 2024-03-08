import { useState } from 'react';
import Modal from './components/Modal';
import ModalButton from './components/ModalButton';

export function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalTitle = 'Delete subprocess 03A456 Picking smtg_long name';
  const modalText = 'Are you sure you want to delete this subprocess? This action cannot be undone.';

  return (
    <>
      <div>
        <ModalButton onClickFunction={() => setModalOpen(true)} buttonText="Open Modal" />
        <Modal title={modalTitle} text={modalText} isOpen={isModalOpen} setModalOpen={setModalOpen} />
      </div>
    </>
  );
}
