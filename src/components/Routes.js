import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import SignUp from './Modal/SignUp';
import LogIn from './Modal/LogIn';
import Landing from './Landing/Landing';

class Routes extends React.Component {
    render() {
        return(
            <Switch>
                <Route path="/signUp" exact component={SignUp} />
                <Route path="/logIn" exact component={LogIn} />
                <Route path="/" exact component={Landing} />
                {/* 
                <Route path="/details" exact component={Details} />
                <Route path="/home" exact component={Home} />
                <Route path="/create" exact component={HackForm} />
                <Route path="/list" exact component={HackList} /> */}

                 </Switch> 
            
        )
    }
 }
 export default Routes;