import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from '../images/logo.jpg'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import {useState} from 'react'

import './Navbar.css'

const Navbar = () => {

    const [navShowing, setNavshowing] = useState(false)
  return (
    <nav>
        <div className='container nav_container'>
            <Link to ='/' className='logo' onClick={()=>setNavshowing(false)}>
                <img src={logo} alt='nav_logo'></img>
            </Link>
            <ul className={`nav_links ${navShowing ? 'show-nav' : 'hide-nav' }`}>
                {links.map(({name, path}, index)=>{
                    return(
                        <li key={index}><NavLink to={path} className={({isActive})=>isActive? 'active_nav' : '' }>{name}</NavLink></li>
                    )
                })}
            </ul>
            <button className='nav_toggle' onClick={()=>setNavshowing(prev=>!prev)}>{
                navShowing ? <MdOutlineClose/> : <GoThreeBars/>
            }</button>
        </div>
    </nav>
  )
}

export default Navbar