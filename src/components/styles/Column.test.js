import React from 'react';
import {shallow} from 'enzyme';
import { Column } from './Column';

test('Column render without crash', () => {
    shallow(<Column />);
})