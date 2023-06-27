import React from 'react'
import { Link } from 'react-router-dom'
function DropdownMenu() {
  return (
    <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#services">services</a></li>
    <li><a className="dropdown-item disabled" href="#">Web Wesign</a></li>
    <li><Link className="dropdown-item"  to="/sginin"> sgin in</Link></li>
    <li><Link className="dropdown-item"  to="/sginup"> sgin up</Link></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item disabled" href="#">Desktop</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#contact-us">contact us</a></li>
  </ul>
  )
}

export default DropdownMenu