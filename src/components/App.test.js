import React from 'react';
import {shallow} from 'enzyme';

import App from "./App";
import { HomePage } from './Home/HomePage';
import { ResultPage } from './Result/ResultPage';
import { appWrapper } from '../testUtils';
import {act} from 'react-test-renderer';

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