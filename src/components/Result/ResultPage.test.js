import React from 'react';
import { shallow } from 'enzyme';
import { ResultPage } from './ResultPage';

describe('Result Page', () => {

    it('Renders without crash', () => {
        shallow(<ResultPage />)
    })
})