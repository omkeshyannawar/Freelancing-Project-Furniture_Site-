
import React from 'react'
import logo from '../../../assets/logo/pintu_furniture_logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
    <div className="logo">
        {/* <img className="pintu_logo" src={logo} alt="Pintu Furniture logo" /> */}
       <p>Pintu Furniture</p>
    </div>

    <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Products</li>
        <li>FAQ</li>
        <li>Contact Us</li>
    </ul>

    <div className="nav-icons">
     
<button class="btn-donate">Contact us</button>

    </div>
</nav>
    </div>
  )
}

export default Navbar



