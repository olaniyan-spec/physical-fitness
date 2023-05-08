import React from 'react'

const HeadSection = (props) => {
  return (
        <div className='section-head'>
                <span>{props.icon}</span>
                <h2>{props.title}</h2>
            </div>
  )
}

export default HeadSection