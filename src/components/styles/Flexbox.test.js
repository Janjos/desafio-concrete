import React from 'react';
import {shallow} from 'enzyme';
import { Flexbox } from './Flexbox';

test('Flexbox render without crash', () => {
    shallow(<Flexbox />);
})