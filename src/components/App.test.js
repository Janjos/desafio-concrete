import React from 'react';
import {shallow, mount} from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from "./App";
import { HomePage } from './Home/HomePage';
import { ResultPage } from './Result/ResultPage';

const appWrapper = path => {
    return (
        mount(
            <MemoryRouter initialEntries={[path]}>
                <App />
            </MemoryRouter>
        )
    )
}

describe('App', () => {
    it('renders without crash', () => {
        shallow(<App />)
    });
})

describe('Routes', () => {
    it('renders home on "/" path', () => {
        const HomeWrapper = appWrapper('/');

        expect(HomeWrapper.find(HomePage)).toHaveLength(1);
    });

    it('renders result page on "/user" path', () => {
        const ResultWrapper = appWrapper('/user/username');
        
        expect(ResultWrapper.find(ResultPage)).toHaveLength(1);
    })
})