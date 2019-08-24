import React from 'react'
import { HomePage } from './Home/HomePage';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <HomePage></HomePage>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default App;