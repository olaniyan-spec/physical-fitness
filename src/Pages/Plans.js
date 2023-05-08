import React from 'react'
import HeaderImage from '../images/gallery2.jpg'
import Card from '../UI/Card'
import {plans} from '../data'
import Top from '../Components/Top'
import './Plans.css'


const Plans = () => {
  return (
    <>
    <Top title="Membership Plans" image={HeaderImage}>
      adjfkdjgldkgdkgasdgldgjdlgdklgdgkjdgldjgkdgsdkgjdgkjdsgldsgdjgljgkgdg
    </Top>
    <section className='plans'>
      <div className='container plans-container'>
        {
          plans.map((plan, id)=>{
            return <Card key={id}>
              <h3>{plan.name}</h3>
              <small>{plan.desc}</small>
              <h1>{`$${plan.price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                plan.features.map((data, index)=>{
                  return <p key={index} className={!data.available ? 'disabled': ''}>{data.feature}</p>
                })
              }
              <button className='btn-lg'>Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    
    </>
  )
}

export default Plans