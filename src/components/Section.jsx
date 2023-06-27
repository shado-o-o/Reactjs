import React from 'react';
import Contant from './section/Contant';
import PageHome from './section/PageHome';
import About from './section/About';
import Services from './section/Services';
import '../sass/main.css';
function Section() {
 

  return (
    <div className='home'>
         <PageHome/>
         <Contant/>
         <Services/>
         <About/>
    </div>
      
  )
}

export default Section
