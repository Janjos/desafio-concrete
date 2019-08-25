import React from 'react'
import { Switch, Route} from 'react-router-dom';

import { HomePage } from './Home/HomePage';
import { ResultPage } from './Result/ResultPage';

const App = () => (
    <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/user/:username' component={ResultPage}></Route>
    </Switch>
)

export default App;