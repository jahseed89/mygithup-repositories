import React, { useState } from 'react'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import * as ContentMgtURL from "../urls/Routing";

import './home.scss'

const Home = () => {

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState()

    const githubUrl = "https://api.github.com/user";

    const getUserProfile = () => {
        setLoading(true)
        axios.get(githubUrl).then((response) => {
            console.log(response.data)
            .catch((error) => {
                console.log(error);
                setLoading(true);
              })
              .finally(() => {
                setLoading(false);
                setActive(true);
              });
        })

    }

    const navigator = useNavigate()
    const handleClick = () => {
        navigator(`${ContentMgtURL.LANDING_ROUTE}/repositories`)
    }
  return (
    <div className='home'>
        <nav>
            <ul>
                <li>Overview</li>
                <li>Repositories</li>
                <li>Projects</li>
                <li>Packages</li>
                <li>Stars</li>
            </ul>
        </nav>
        <main>
            <div>
                <div className='img-container'>img</div>
                <h3>Name</h3>
                <div>Samson Ocran</div>
            </div>
            <div>
                <h2>Polular repositories</h2>
                <div className='repositories-container'>
                    <div className='repo'></div>
                    <div className='repo'></div>
                    <div className='repo'></div>
                    <div className='repo'></div>
                    <div className='repo'></div>
                    <div className='repo'></div>
                    <div className='repo'></div>
                    <div className='repo'></div>


                </div>
            </div>
        </main>
        <Button clickHandler={handleClick} />
    </div>
  )
}

export default Home