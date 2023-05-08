import React from 'react'
import Card from '../UI/Card'

const Trainer = (props) => {
  return (
    <Card className='trainer'>
        <div className='trainer-img'>
            <img src={props.image} alt={props.name}/>
        </div>
        <h3>{props.name}</h3>
        <p>{props.job}</p>
        <div className='trainer-socials'>
            {
                props.socials.map((social, id)=>{
                    return <a  key ={id} href={social.link} target='blank' rel='norefferer noopener'>{social.icon}</a>
                })
            }
        </div>
    </Card>
  )
}

export default Trainer