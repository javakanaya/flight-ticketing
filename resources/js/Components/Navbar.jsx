import "../../css/navbar.css"
import { Component } from "react";
import { Link } from "react-router-dom"

class Navbar extends Component{ 
  render(){
    return (
      <nav className="NavbarItems">
        <img src="" alt=""  className="navbar-logo" />
        <ul className="nav-menu">
          <li>
            <a>Home</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;