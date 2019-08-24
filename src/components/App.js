import React from 'react'
import { HomePage } from './Home/HomePage';
import { Switch, Route } from 'react-router-dom';

const App = () => (
    <Switch>
        <Route exact path='/'>
            <HomePage></HomePage>
        </Route>
    </Switch>
)

export default App;