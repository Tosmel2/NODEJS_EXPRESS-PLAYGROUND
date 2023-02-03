import React from 'react'
import { Link } from 'react-router-dom'
import Ayagigs from '../assets/Ayagigs.png'
import './home.css'

const Home = () => {
  return (
    <div className='containerr'>
      <div className='hero-container'>
        <div className='hero-left'>
          <img src={Ayagigs} alt='welcomeImage' className='hero_left-img' />
        </div>
        <div className='hero-right'>
          <div className='hero-right_text hrm'>
            <h1>Welcome To AYA TodoApp</h1>
            <p>We’re glad you’re here! Sign up to start</p>

            <Link to='/login'><button id='login-btn' style={{backgroundColor:"#FFFFFF"}}> Login</button></Link>

            <Link to='/register'><button style={{backgroundColor:"#1A308F"}} className='getstarted-btn'> Get started</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home