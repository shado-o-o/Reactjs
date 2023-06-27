import React from 'react'
import './loggin.css';
import { Link } from 'react-router-dom';

function SginIn() {
  return (
    <div>
       <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
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
      loggin
    </a>
  </form>
  <Link to='/sginup'>creat new acount</Link>
</div>
    </div>
  )
}

export default SginIn