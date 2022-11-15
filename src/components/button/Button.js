import React from 'react'
import './button.scss'

const Button = ({ clickHandler, isActive, btnText }) => {
  return (
    <button onClick={clickHandler}>{isActive ? "Repositories" : btnText}</button>
  )
}

export default Button