import React from 'react';
import ContantOne from './Contant/ContantOne';
import ContantTwo from './Contant/ContantTwo';
import phph from '../../imgs/tap.jpeg';
import img from '../../imgs/mind.jpeg'
function Contant() {
  return ( 
    <section className='contant' id='contact'>
        <ContantOne src={img}/>
        <ContantTwo/>
        <ContantOne src={phph}/>
    </section>
  )
}

export default Contant