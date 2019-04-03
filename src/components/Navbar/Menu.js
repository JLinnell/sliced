import React, { Component } from 'react';
import './Navbar.css';

// let toggleNavStatus = false;


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
      }

      toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
        console.log('Im open!');
      }  
    
    
//  toggleNav = () => {
//     let toggleNavStatus = true;

//     let getSidebar = document.querySelector(".nav-siidebar");
//     let getSidebarUl = document.querySelector(".nav-siidebar ul");
//     let getSidebarTitle = document.querySelector(".nav-siidebar span");
//     let getSidebarLinks = document.querySelectorAll(".nav-siidebar a");

//     if (toggleNavStatus === true) {
//         getSidebarUl.style.visibility = "visible";
//         getSidebar.style.width = "272px";
//         getSidebarTitle.style.opacity = "0.5";

//         let arrayLength = getSidebarLinks.length;
//         for (let i = 0; i < arrayLength; i++) {
//             getSidebarLinks[i].style.opacity = "1";
//         }
//         toggleNavStatus = false;
    
//   }
//   else if (toggleNavStatus === false) {
//     getSidebar.style.width = "50px";
//     getSidebarTitle.style.opacity = "0.5";

//     let arrayLength = getSidebarLinks.length;
//     for (let i = 0; i < arrayLength; i++) {
//         getSidebarLinks[i].style.opacity = "0";
//     }

//     getSidebarUl.style.visibility = "hidden";

//     toggleNavStatus = true;

// }


// }

 

// class Menu extends Component {
	render() {
		return (
           <div>

<nav className="nav-main">
<div className="btn-toggle-nav" onClick={() => this.toggleMenu()}></div>

<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Gallery</a></li>
    </ul>
  
    </nav>

    <aside className="nav-sidebar">

        <ul>
    <li><span>Side</span></li>
    <li><a href="#">CRUSH</a></li>
    <li><a href="#">HI</a></li>
    <li><a href="#">HEY</a></li>
    <li><a href="#">HELLO</a></li>
    </ul>
    </aside>

    </div>

        )
	}
}

export default Menu;



