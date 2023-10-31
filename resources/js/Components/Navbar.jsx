import "../../css/navbar.css"
import { Component } from "react";
import { Link, Head } from '@inertiajs/react';
import { MenuItems } from "./MenuItems";

class Navbar extends Component{ 
  state = {clicked: false};
  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked })
  }
  render(){
    return (

      <nav className="NavbarItems">
        <h1 className="navbar-logo"><i class="fa-solid fa-plane"></i></h1>
        <div className="menu-icons" onClick = { this.handleClick }>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
          {MenuItems.map((item, index) => {
            return(
            <li key={index}>
              <a className={item.cName} href={item.url} >{item.title}</a>
            </li>
            );
          })}

          <Link
            href={route('login')}
            className="button"
          >
            Login
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar;