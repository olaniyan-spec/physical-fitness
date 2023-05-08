import React from 'react'
import Top from '../Components/Top'
import HeaderImage from '../images/gallery9.jpg'
import {trainers} from '../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Trainer from '../Components/Trainer'
import './Trainers.css'
const Trainers = () => {
  return (
    <>
    <Top title='Our Trainers' image={HeaderImage}>
      Meet our Humble Trainers
    </Top>
    <section className='trainers'>
      <div className='container trainers-container'>
        {
          trainers.map((data, id)=>{
            return <Trainer key={id} image={data.image} name={data.name} job={data.job} socials={
              [
                {icon: <BsInstagram/>, link: data.socials[0]},
                {icon: <AiOutlineTwitter/>, link: data.socials[1]},
                {icon: <FaFacebook/>, link: data.socials[2]},
                {icon: <FaLinkedin/>, link: data.socials[3]}
              ]
            }/>
          })
        }
      </div>

    </section>
    
    
    </>
  )
}

export default Trainers