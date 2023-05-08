import React from 'react'
import Header from '../Components/Header'
import Programs from '../Components/Programs'
import Values from '../Components/Values'
import FAQs from '../Components/FAQs'
import Testimonial from '../Components/Testimonial'
import './Home.css'

const Home = () => {
  return (
        <div>
      <Header/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonial/>

        </div>
  )
}

export default Home