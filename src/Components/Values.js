import React from 'react'
import image from '../images/gallery1.jpg'
import HeadSection from './HeadSection'
import {GiCutDiamond} from 'react-icons/gi'
import Card from '../UI/Card'
import { values } from '../data'

const Values = () => {
  return (
   <section className='values'>
    <div className='container container-values'>
        <div className='values-left'>
            <div className='values-image'>
                <img src={image} alt='values'></img>
            </div>
        </div>
        <div className='values-right'>
            <HeadSection icon = {<GiCutDiamond/>} title= "Values"/>
            <p>This is the value section work in progress please stay in touch</p>
            <div className='values-wrapper'>
                {
                    values.map((data, id)=>{
                        return(
                            <Card key={id} className="values-value">
                            <span>{data.icon}</span>
                            <h4>{data.title}</h4>
                            <small>{data.desc}</small>
                        </Card>
                        )
                    })
                }
            </div>
        </div>
    </div>
   </section>
  )
}

export default Values