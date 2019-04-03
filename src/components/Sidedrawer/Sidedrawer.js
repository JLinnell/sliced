 import React from 'react';
import { Link } from 'react-router-dom';
import './Sidedrawer.css';
const sidedrawer = props => {
    let drawerClasses = 'sidedrawer';
    if (props.show) {
        drawerClasses = 'sidedrawer open';
    }
return (
<nav className={drawerClasses}>
        <Link to={'/signUp'}>
        <button className="btn" id="signUp">Sign Up</button>
        </Link>

        <Link to={'/logIn'}>
       <button className="btn" id="logIn">Log In</button>
        </Link>

    <ul>
            {/* view w\Wanderu for route transitions */}
        <li><a href="/">My Order</a></li>
        <li><a href="/">Search</a></li>
        <li><a href="/">Profile</a></li>
    </ul>
</nav>
);
};

export default sidedrawer;