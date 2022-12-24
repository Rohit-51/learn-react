import React, { useState } from 'react';
import Modal from'./Modal';
import Backdrop from'./Backdrop';
export const Todo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const clickHandler= () => {
        setIsModalOpen(true);
    }

    const cancelHandler= () => {
        setIsModalOpen(false);
    }

    const confirmHandler= () => {
        setIsModalOpen(false);
    }

  return (<>
    <div className= 'box'>
        <h3>Create react app</h3>
        <div className='action'>
            <button className='btn' onClick={clickHandler}>Delete</button>
        </div>
    </div>
    <div>
        {isModalOpen && <Modal onCancel={cancelHandler} onConfirm={confirmHandler}/>  }
        {isModalOpen && <Backdrop onCancel={cancelHandler} />  }
    </div>
    </>
  )
}
