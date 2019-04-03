import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

////lines 9 & 10 are from macgyver
// import { Provider } from 'react-redux';
// import store from './store';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

//Version below is from macgyver (lines 16-19)

// ReactDOM.render(<Provider store={store}>
//     <BrowserRouter><App /></BrowserRouter>
//     </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
