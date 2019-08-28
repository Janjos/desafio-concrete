import React from 'react'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedSwitch } from 'react-router-transition';

import { HomePage } from './Home/HomePage';
import { ResultPage } from './Result/ResultPage';
import { NotFound } from './NotFound/NotFound';
import { Header } from './common/Header';

const AppContainer = styled.div`
    padding: 1em 2em;
`;

const AppSwitch = ({ children, isTestEnviroment }) => {
    return (
        <>
            {
                isTestEnviroment
                    ?
                    <Switch> {children} </Switch>
                    :
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 1 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper"
                        location={location}
                    >
                        {children}
                    </AnimatedSwitch>
            }
        </>
    )
}

const App = ({ location, isTestEnviroment }) => {
    return (
        <AppContainer>
            {
                location.pathname !== '/'
                &&
                <Header />
            }
            <AppSwitch isTestEnviroment={isTestEnviroment}>
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path='/user/:username' component={ResultPage}></Route>
                <Route exact path='/notfound' component={NotFound}></Route>
                <Route path='*'>
                    <Redirect to='/'></Redirect>
                </Route>
            </AppSwitch>
        </AppContainer>
    );
}

export default withRouter(App);