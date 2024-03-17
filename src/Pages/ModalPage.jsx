import React, { useState } from 'react'
import Button from '../Components/Button';
import Modal from '../Components/Modal';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  )

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>This is importtant agreement to accept you</p>
    </Modal>
  return (
    <div className='relative'>
      <Button primary onClick={handleClick} >Open Modal</Button>
      {showModal && modal}
    </div>
  )
}

export default ModalPage
