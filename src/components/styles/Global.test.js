import React from 'react';
import {shallow} from 'enzyme';
import { GlobalStyle } from './Global';

test('GlobalStyle render without crash', () => {
    shallow(<GlobalStyle />);
})