import React from 'react'
import './button.scss'

const Button = ({ clickHandler, btnText }) => {
  return (
    <button onClick={clickHandler} type="button" >
      {btnText}
    </button>
  )
}

export default Button