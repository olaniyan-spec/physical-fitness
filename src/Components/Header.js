import React from 'react'
import{Link} from 'react-router-dom'
import image from '../images/home.jpg'
 
const Header = () => {
  return (
    <header className='main-header'>
        <div className='container main-header-container'>
            <div className='main-header-left'>
                <h4> 100 Days of Workout</h4>
                <h1>Join the Legends of the fitness World</h1>
                <p>Exercise is the key not only to physical health but peace of mind</p>
                <Link to='/Plans' className='btn btn-lg'>Get Started</Link>
            </div>
            <div className='main-header-right'>
                <div className='main-header-circle'></div>
                <div className='main-header-image'>
                    <img src={image} alt='display'></img>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header