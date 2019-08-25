import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

describe('Home Page', () => {
    it('Renders withou crash', () => {
        shallow(<HomePage />);
    })
})