import React from 'react'

const Backdrop = (props) => {
  return (
    <div onClick={props.onCancel} className= "backdrop"/>
  )
}

export default Backdrop;