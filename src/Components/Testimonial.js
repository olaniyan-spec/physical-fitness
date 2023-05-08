import React, { useState } from 'react'
import HeadSection from './HeadSection'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import {testimonials} from '../data'

const Testimonial = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]


    const nextTestimonialHandler = ()=>{
        setIndex(prev=> prev + 1)
        if(index >= testimonials.length-1){
            setIndex(0)
        }
    }
    const prevTestimonialHandler = ()=>{
        setIndex(prev=> prev - 1)
        if(index<= testimonials.length - 1){
            setIndex(0)
        }

    }

  return (
    <section className='testimonials'>
        <div className='container testimonial-container'>
            <HeadSection className="testimonials-head" icon={<ImQuotesLeft/>} title="Testimonials"/>
            <Card className='testimonial'>
                <div className='testimonial-avatar'>
                    <img src={avatar} alt='avater'></img>
                </div>
                <p className='testimonial-quote'>{quote}</p>  
                <h5>{name}</h5>
                <small className='testimonial-title'>{job}</small>
            </Card>
            <div className='testimonials-btn-container'>
                <button className='testimonials-btn' onClick={prevTestimonialHandler}> <IoIosArrowDropleftCircle/></button>
                <button className='testimonials-btn' onClick={nextTestimonialHandler}> <IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonial