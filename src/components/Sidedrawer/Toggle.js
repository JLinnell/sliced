import React from 'react';
import './Toggle.css';

const toggle = props => (
    <button className="toggleButton" onClick={props.click}>
        <div className="toggleLine" />
        <div className="toggleLine" />
        <div className="toggleLine" />
    </button>
);

export default toggle;