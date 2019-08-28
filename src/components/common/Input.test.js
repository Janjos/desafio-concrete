import React from 'react';
import {shallow} from 'enzyme';
import { Input } from './Input';

it('renders Input component without crash', () => {
    shallow(<Input />);
})