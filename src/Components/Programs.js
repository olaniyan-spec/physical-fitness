import React from 'react'
import {FaCrown} from 'react-icons/fa'
import {programs} from '../data'
import HeadSection from './HeadSection'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiTwotoneTrophy} from 'react-icons/ai'
const Programs = () => {
  return (
    <section className='programs'>
        <div className='container programs-container'>
        <HeadSection icon = {<FaCrown/>} title="Programs"/>
        <div className='program-wrapper'>
            {
                programs.map((data, id)=>{
                    return(
                    <Card className="programs_program" key={id}>
                        <span>{data.icon}</span>
                        <h4>{data.title}</h4>
                        <small>{data.info}</small>
                        <Link to={data.path} className='btn sm'>Learn More<AiTwotoneTrophy/></Link>
                    </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Programs