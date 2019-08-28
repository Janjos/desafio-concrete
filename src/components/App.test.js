import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
require('regenerator-runtime/runtime');

import App from "./App";
import { HomePage } from './Home/HomePage';
import { ResultPage } from './Result/ResultPage';
import { appWrapper } from '../testUtils';
import { NotFound } from './NotFound/NotFound';
import { GITHUB_API_USERS, ROUTES } from '../constants';
import userMock from '../../__mocks__/userMock';

describe('App', () => {
    it('renders without crash', () => {
        shallow(<App />)
    });
})

describe('Routes', () => {
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('renders home on "home" path', () => {
        const HomeWrapper = appWrapper(ROUTES.HOME);

        expect(HomeWrapper.find(HomePage)).toHaveLength(1);
    });

    it('renders result page on "result" path', async () => {
        const ResultWrapper = await appWrapper(`${ROUTES.RESULT.PATH}/timbl`);

        expect(ResultWrapper.find(ResultPage)).toHaveLength(1);
    });

    it('renders not found page on "notfound" path', () => {
        const NotFoundWrapper = appWrapper(ROUTES.NOTFOUND);

        expect(NotFoundWrapper.find(NotFound)).toHaveLength(1);
    });
})