import React from 'react';
import { Link } from 'react-router-dom';
import './loggin.css';
function SginUp() {
  return (
    <div>
    <div class="login-box">
<h2>sgin up</h2>
<form>

 <div class="user-box">
   <input type="text" name="" required=""/>
   <label>Username</label>
 </div>
 <div class="user-box">
   <input type="email" name="" required=""/>
   <label> Your email</label>
 </div>
 <div class="user-box">
   <input type="password" name="" required=""/>
   <label>Password</label>
 </div>
 <a href="#">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   SginUp
 </a>
</form>
<Link to='/sginin'>I have an acount</Link>
</div>
 </div>
  )
}

export default SginUp