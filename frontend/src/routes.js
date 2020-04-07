
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './screens/Logon';
import Register from './screens/Register';
import Profile from './screens/Profile';
import NewIncident from './screens/NewIncident';


const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon}/>
            <Route path="/register" component={Register}/>
            
            <Route path="/profile" component={Profile}/>
            <Route path="/incidents/new" component={NewIncident}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes