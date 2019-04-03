import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
	render() {
		return (
			<div className="order-input">
				<input type="text" className="search location" placeholder="I am in (Enter Location)"></input>
                <input type="text" className="search dessert" placeholder="And I need (Enter Dessert Item)"></input>
				<input type="text" className="search date" placeholder="On  (Enter Pickup Date)"></input>
                <input type="text" className="search time" placeholder="At  (Enter Pickup Time)"></input>
                <button type="submit" className="search-btn" >Search</button>
			</div>
		)
	}
}

export default Landing;