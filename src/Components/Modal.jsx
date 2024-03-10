import React from 'react'
import ReactDOM from 'react-dom'


const Modal = ({onClose}) => {
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className='absolute inset-0 bg-black opacity-80'></div>
            <div className='absolute inset-40 p-10 bg-white rounded-lg'>
                I Am Modal Box
            </div>
        </div>, 
        document.querySelector(".modal-container")
    )
}

export default Modal
