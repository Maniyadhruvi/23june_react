import React from 'react'
import custom from "./custom.module.css";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function Header() {
  const Navigate = useNavigate()
  const handleLogout = (e)=>{
    e.preventDefault()
    localStorage.removeItem('user')
    Navigate('/')
  }
  return (
    <nav className={`navbar navbar-dark navbar-expand-lg ${custom.bglight}`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <LinkContainer to="/">
              <li className="nav-item">
                <a 
                  className={` nav-link active ${custom.navLink}`}
                  aria-current="page" href="#">Home</a>
              </li>
            </LinkContainer>

            <LinkContainer to="/about">
              <li className="nav-item">
                <a className={` nav-link active ${custom.navLink}`}
                  aria-current="page" href="#">About</a>
              </li>
            </LinkContainer>

            <LinkContainer to="/Products">
              <li className="nav-item">
                <a className={` nav-link active ${custom.navLink}`}
                  aria-current="page" href="#">Product</a>
              </li>
            </LinkContainer>

            {/* <li class="nav-item dropdown">
              <a className="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product
              </a>
              <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </li> */}
           <LinkContainer to="/Contact">
              <li className="nav-item">
                <a className={` nav-link active ${custom.navLink}`}
                  aria-current="page" href="#">Contact</a>
              </li>
            </LinkContainer>
            <LinkContainer to="/Login">
              <li className="nav-item">
                <a className={` nav-link active ${custom.navLink}`}
                  aria-current="page" href="#">Login</a>
              </li>
            </LinkContainer>
            <LinkContainer to="/signup">
              <li className="nav-item">
                <a className={` nav-link active ${custom.navLink}`}
                  aria-current="page" href="#">SignUp</a>
              </li>
            </LinkContainer>
            {
              localStorage.getItem('user')?
                <li className='nav-item'>
                  <a className={` nav-link active ${custom.navLink}`}
                  aria-current="page" href="#" onClick={handleLogout}>Logout</a>
                </li>
                :<></>
            }
          
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
