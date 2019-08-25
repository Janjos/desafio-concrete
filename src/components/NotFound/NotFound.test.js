import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from './NotFound';

describe('Not found page', () => {
    it('renders without crash', () => {
        shallow(<NotFound />);
    })
})