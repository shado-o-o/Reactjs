import React from 'react'
import Form from './footer/Form'
import SocialIicon from './footer/SocialIicon'
function Footer() {
  return (
    <footer id='contact-us'>
      <div className='container '>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-start footer-logo">
            <h2>Shady <span>Inc</span></h2>
            <h4>Web developer</h4>
            <p>Phone: 0102345678</p>
            <p>Email: shadyfthy8@gmail</p>
            <SocialIicon/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-start">
            
           <Form/>

          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer