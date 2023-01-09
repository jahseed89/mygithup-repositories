import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button/Button'
import { HOME_ROUTE } from '../contents-management/Landing'
import './pageNotFound.scss'

const PageNotFound = () => {

  const navigator = useNavigate()

  const navigatBackHome = () => {
    navigator(`${HOME_ROUTE}`)
  }
  return (
    <div className='error-page'>
      <h1>404</h1>
      <h3>PageNotFound...</h3>

      <p><Button btnText={'Back To Home'} clickHandler={navigatBackHome} /></p>
    </div>
  )
}

export default PageNotFound