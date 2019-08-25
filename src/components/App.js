import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';

import { HomePage } from './Home/HomePage';
import { ResultPage } from './Result/ResultPage';
import { NotFound } from './NotFound/NotFound';

const App = () => (
    <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/user/:username' component={ResultPage}></Route>
        <Route exact path='/notfound' component={NotFound}></Route>
        <Route path='*'>
            <Redirect to='/'></Redirect>
        </Route>
    </Switch>
)

export default App;