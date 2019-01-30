import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DefaultContainer from './containers/DefaultContainer';

const App = () => (
    <Switch>
        <Route exact path="/" component={DefaultContainer}/>
    </Switch>
)

export default App;