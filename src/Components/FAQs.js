import React from 'react'
import HeadSection from './HeadSection'
import {FaQuestion} from 'react-icons/fa'
import {faqs} from '../data'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section className='faqs'>
        <div className='container faqs-contianer'>
            <HeadSection icon = {<FaQuestion/>} title = "FAQs"/>
            <div className='faqs-wrapper'>
            {
                faqs.map((data, id)=>{
                    return <FAQ key = {id} question = {data.question} answer = {data.answer}/>
                })
            }
            </div>
        </div>
    </section>
  )
}

export default FAQs