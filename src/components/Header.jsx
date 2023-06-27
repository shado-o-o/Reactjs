import React,{Component} from 'react';
import DropdownMenu from './header/Dropdown-menu';
import '../sass/main.css';
import { Link } from 'react-router-dom';
class Header extends Component {
    
     render(){
       
        return (
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#home"> Shadow <span>Inc</span></a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ournavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-right" id="ournavbar">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">about</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">content</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    services
                  </a>
                
                <DropdownMenu/>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
        )
     }
}
export default Header;

