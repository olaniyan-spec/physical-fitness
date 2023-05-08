import React from 'react'
import{Link} from 'react-router-dom'
import logo from '../images/logo.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
    <div className='container footer-container'>
        <article>
            <Link to='/' className='logo'>
                <img src={logo} alt='logo'></img>
            </Link>
            <p>dfdhfkldsfklsdjlksdjgkdladlgakgdsjgljdlgdjlgdjskgsladdjgdlgdj</p>
            <div className='footer-socials'>
                <a href='https://linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                <a href='https://twitter.com/@TofunmiOlaniyan' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                <a href='https://instagram.com/tofunmi_olaniyan' target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
            </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to='/About'>About</Link>
            <Link to='/Plans'>Plans</Link>
            <Link to='/Trainers'>Trainers</Link>
            <Link to='/Gallery'>Gallery</Link>
            <Link to='/Contact'>Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to='/s'>Blog</Link>
            <Link to='/s'>Case Studies</Link>
            <Link to='/s'>Events</Link>
            <Link to='/s'>Communities</Link>
            <Link to='/s'>FAQs</Link>
        </article>
        <article>
            <h4>Get in Touch</h4>
            <Link to='/s'>Support Us</Link>
            <Link to='/Contact'>Contact Us</Link>
        </article>
            
            
        </div>
        <div className='footer-copyright'>
            <small>2023 Zhamani &copy; All rights reserved</small>
        </div>
    </footer>
  )
}

export default footer