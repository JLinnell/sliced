import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
// import Menu from '../Navbar/Menu';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
 import Routes from '../Routes';
 import { Link } from 'react-router-dom';
import Backdrop from '../Backdrop/Backdrop';
import Toolbar from '../Toolbar/Toolbar';
class App extends Component {

  state = {
    sidedrawerOpen: false
  }


drawerToggleClickHandler = () => {
  this.setState((prevState) => {
   return {sidedrawerOpen: !prevState.sidedrawerOpen}; 
  });
};

backdropClickHandler = () => {
  this.setState({sidedrawerOpen: false })
};

  render() {
    let backdrop;

    if (this.state.sidedrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{height: '100%'}}>
        <header className="App-header">
          <h1><Link to="/">Sliced</Link></h1>
          
        </header>
        {/* <Menu /> */}
       <Toolbar  drawerClickHandler={this.drawerToggleClickHandler} />
       <Sidedrawer show={this.state.sidedrawerOpen} />
       {backdrop}
       <main style={{marginTop: '64px'}}>
       
        </main>
        {/* REMOVE COMMENTs 45 & 46 ONCE ROUTES ARE READY */}
        <Routes />
        <Landing />
      </div>
    );
  }
}

export default App;
