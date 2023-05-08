import React from 'react'
import Top from '../Components/Top'
import TopImage from '../images/gallery7.jpg'
import { MdEmail } from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Top title="Get in Touch" image={TopImage}>
      </Top>
      <section className='contact'>
        <div className='container contact-container'>
          <div className='contact-wrapper'>
            <a href='mailto:olaniyanolaoluwa3@gmail.com' target='blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href='https://wa.me/+2348109799958' target='blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
            <a href='https://m.me/olaniyan Tofunmi' target='blank' rel='noreferrer noopener'><BsMessenger/></a>
          </div>
        </div>
      </section>
    
    
    </>
  )
}

export default Contact