import React from 'react'
import Top from '../Components/Top'
import TopImage from '../images/gallery8.jpg'
import './Gallery.css'

const Gallery = () => {
  const galleryLength = 11;
  const images = []
  for(let i = 1; i<= galleryLength; i++){
    images.push(require(`../images/gallery${i}.jpg`))
  }
  return (
    <>
      <Top title="Our Gallery" image={TopImage}>
      </Top>
      <div className='gallery'>
        <div className='container gallery-container'>
          {
            images.map((image, index)=>{
              return <article key={index}>
                <img src={image} alt="from_array"></img>
              </article>
            })
          }
        </div>
      </div>
      </>
  )
}

export default Gallery