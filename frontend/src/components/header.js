import React from 'react'
import logo from "../images/logo2.png"

const header = () => {
  return (
    <div>
      {/* <!--=============== HEADER ===============--> */}
      <header className="header" id="header">
          <nav className="nav container">
              <a href="/" className="nav__logo"><img className="Home-logo" src={logo} alt="logo"/>ZERO HUNGER</a>

              <div className="nav__menu" id="nav-menu">
                  <ul className="nav__list">
                      <li className="nav__item">
                          <a href="#home" className="nav__link active-link">Home</a>
                      </li>
                      <li className="nav__item">
                          <a href="#about" className="nav__link">About us</a>
                      </li>
                      <li className="nav__item">
                          <a href="#contact" className="nav__link">Contact us</a>
                      </li>
                      <li className="nav__item">
                          <a href="/RestaurantHomeNew" className="nav__link">Food Sales</a>
                      </li>
                      {/* <li className="nav__item">
                          <a href="#blog" className="nav__link">Blog</a>
                      </li> */}
                      <li className="nav__item">
                          <a href="/ExchangeFood" className="nav__link">Food Exchange</a>
                      </li>
                      <i className='bx bx-toggle-left change-theme' id="theme-button"></i>
                  </ul>
              </div>

              <div className="nav__toggle" id="nav-toggle">
                  <i className='bx bx-grid-alt'></i>
              </div>
          </nav>
      </header>
    </div>
  )
}

export default header
