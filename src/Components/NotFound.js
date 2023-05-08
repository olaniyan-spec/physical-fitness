import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
<section>
      <div className='container notFound-container'>
        <h2>Page not found</h2>
        <Link to = "/" className="btn">Go back home</Link>
      </div>
    </section>
  )
}

export default NotFound