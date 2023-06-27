import React from 'react'

function AboutCard(props) {
  return (
    <div className="container rounded card-about">
        <div className="row ">
 
            <div className="col-2  ">
                <img src={props.src} alt="not found" />
            </div>
            <div className="col-9 about-text">
                <h5>1 : {props.name}</h5>
                <h5>2 : {props.data}</h5>
                <p>3 : web developer we are support your mind to creat web site</p>
            </div>
            
        </div>
      </div>
  )
}

export default AboutCard