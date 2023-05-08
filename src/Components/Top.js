import React from 'react'

const Top = (props) => {
  return (
   <header className='top'>
    <div className='top-container'>
        <div className='top-container-bg'>
            <img src={props.image} alt='bg'></img>
        </div>
        <div className='top-content'>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    </div>
   </header>
  )
}

export default Top