import React from 'react'
import photo1 from '../../imgs/writing.jpeg';
import photo2 from '../../imgs/chating.jpeg';
import photo3 from '../../imgs/shearch.jpeg';


import AboutCard from './about/AboutCard';

function About() {
  return (
    <section className='about' id='about'>
      <AboutCard src={photo1} name='web delevolper' data='to learn that'/>
      <AboutCard src={photo2} name='web designer' data='to learn that'/>
      <AboutCard src={photo3} name='mobail developer' data='to learn that'/>
   </section>
  )
}

export default About