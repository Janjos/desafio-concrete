import React from 'react';
import {shallow, mount} from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from "./App";
import { HomePage } from './Home/HomePage';

const appWrapper = path => {
    return (
        mount(
            <MemoryRouter initialEntries={[path]}>
                <App></App>
            </MemoryRouter>
        )
    )
}

describe('App', () => {
    it('renders without crash', () => {
        shallow(<App />)
    });

    it('renders home on "/" path', () => {
        const HomeWrapper = appWrapper('/');

        expect(HomeWrapper.find(HomePage)).toHaveLength(1);
    });
})