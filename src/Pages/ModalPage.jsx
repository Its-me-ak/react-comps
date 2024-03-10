import React, { useState } from 'react'
import Modal from '../Components/Modal'
import Button from '../Components/Button';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <div className='relative'>
      <Button primary onClick={handleClick} >Open Modal</Button>
      {showModal && <Modal onClose={handleClose}/>}
    </div>
  )
}

export default ModalPage
