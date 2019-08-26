import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { HomePage } from './Home/HomePage';
import { ResultPage } from './Result/ResultPage';
import { NotFound } from './NotFound/NotFound';
import { Header } from './common/Header';

const AppContainer = styled.div`
    padding: 1em 2em;
`;

const App = () => {
    return (
        <AppContainer>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path='/user/:username' component={ResultPage}></Route>
                <Route exact path='/notfound' component={NotFound}></Route>
                <Route path='*'>
                    <Redirect to='/'></Redirect>
                </Route>
            </Switch>
        </AppContainer>
    );
}

export default App;