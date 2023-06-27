import React from 'react'
import { Link } from 'react-router-dom'

function PageHome() {

  return (
    <section className='home-one ' id='home'>
        <h1>Shadow -AI</h1>
        <h4>How to learn</h4>
        <h4>web developer and Desiner</h4>
        <p>Learn how to design an engaging voice user interface (VUI) and build a custom Alexa skill. Learn to Build Skills with our Training Resources: Tools, APIs, and Code Samples. Build Custom Voice Skills. Alexa Developer Github. Tutorials and Tech Talks.</p>
     <button  className='btn btn-primary'> <Link to="/sginup"> Start Now</Link></button>
    </section>
  )
}

export default PageHome