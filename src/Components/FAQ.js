import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const FAQ = (props) => {
  const[answerShowing, setAnswerShowing] = useState(false)
  return (
    <article className='faq' onClick={()=> setAnswerShowing(prev => !prev)}>
        <div>
            <h4>{props.question}</h4>
            <button className='faq-icons'>
             {answerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/> }
              </button>
        </div>

        {answerShowing && <p>{props.answer}</p>}
    </article>
  )
}

export default FAQ