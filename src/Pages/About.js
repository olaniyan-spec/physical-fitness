import React from 'react'
import Top from '../Components/Top'
import TopImage from '../images/gallery4.jpg'
import storyImage from '../images/gallery5.jpg'
import visonImage from '../images/gallery6.jpg'
import missionImage from '../images/gallery7.jpg'
import './About.css'
const About = () => {
  return (
    <>
    <Top title='About us' image={TopImage}>
      <p> djfhdjfhd;klfdkfjiutskdgkdgjdlasdgljkdsglgdjgksdgjsdlgj
        dkgdkddkkdfjdkd
        dfkdjfdkfjdkfjdkfjkfdjfkdkdsldfjdjdfdkjfdkjdfkdfkd
      </p>
    </Top>
    
    <section className='about-story'>
    <div className='container about-story-container'>
      <div className='about-section-image'>
        <img src={storyImage} alt='story'></img>
      </div>
      <div className='about-section-content'>
        <h1>Our Story</h1>
        <p>
          This is the about page watch out for some nice stories we have for you
        </p>
        <p>
          asdfkdsjkfdjafkldjfkhgjdhgadjgkdgljdgkdjgljldgkdjlgkajdlgdjldjgdljlgkdklg
        </p>
        <p>
          dkdsgkdjgkdjgkleigdkgjksdjgldgkdsglksdjldgkgdlgdgdkjvkngkrhirkgdjgkjgkdlskdj
        </p>
      </div>
    </div>
    </section>
    <section className='about-vision'>
    <div className='container about-vision-container'>
      <div className='about-section-content'>
        <h1>Our Vision</h1>
        <p>
          This is the about page watch out for some nice stories we have for you
        </p>
        <p>
          asdfkdsjkfdjafkldjfkhgjdhgadjgkdgljdgkdjgljldgkdjlgkajdlgdjldjgdljlgkdklg
        </p>
      </div>
      <div className='about-section-image'>
        <img src={visonImage} alt='vision'></img>
      </div>
    </div>
    </section>
    <section className='about-mission'>
    <div className='container about-mission-container'>
      <div className='about-section-image'>
        <img src={missionImage} alt='story'></img>
      </div>
      <div className='about-section-content'>
        <h1>Our Mission</h1>
        <p>
          This is the about page watch out for some nice stories we have for you
        </p>
        <p>
          asdfkdsjkfdjafkldjfkhgjdhgadjgkdgljdgkdjgljldgkdjlgkajdlgdjldjgdljlgkdklg
        </p>
        <p>
          dkdsgkdjgkdjgkleigdkgjksdjgldgkdsglksdjldgkgdlgdgdkjvkngkrhirkgdjgkjgkdlskdj
        </p>
      </div>
    </div>
    </section>

    </>
  )
}

export default About