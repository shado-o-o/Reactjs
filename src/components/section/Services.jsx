import React from 'react'
import ServicesItem from './services/ServicesItem'
function Services() {
  return (
     <div className="container text-center">
          <h1 style={{color:"green"}}>services</h1>
          
         <table class="table" id='services'>
            <thead>
                <tr>
                <th scope="col">number</th>
                <th scope="col">Services</th>
                <th scope="col">How</th>
                <th scope="col">supported</th>
                </tr>
            </thead>
            <tbody>
                <ServicesItem id='1' Services='writing' />
                <ServicesItem id='2' Services='reading' />
                <ServicesItem id='3' Services='watching' />
                
            </tbody>
            </table>
     </div>
               
  )
}

export default Services