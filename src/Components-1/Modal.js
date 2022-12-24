import React from 'react'

 const Modal = (props) => {
  return (
    <div className='modal'>
        <p>are you sure?</p>
        <div>
            <button onClick={props.onCancel} className= 'btn--alt'>Cancle</button>
            <button onClick={props.onConfirm} className= 'btn--alt'>Confirm</button>
        </div>
    </div>
  )
}

export default Modal;