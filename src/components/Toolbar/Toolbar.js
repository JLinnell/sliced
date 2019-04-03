import React from 'react';
import './Toolbar.css'
import Toggle from '../Sidedrawer/Toggle';

const toolbar = props => (
    <header className="tooblar">
        <nav className="toolbarNavigation">
            <div>
                <Toggle click={props.drawerClickHandler} />
            </div>
            {/* <div className="toolbarLogo"><a href="/">LOGO</a></div> */}
            <div className="spacer" />
            {/* <div className="toolbarNavItems">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>

                    </ul>
            </div> */}

        </nav>
        </header>
);

export default toolbar;