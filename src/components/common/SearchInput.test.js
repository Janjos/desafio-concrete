import React from 'react';
import {shallow} from 'enzyme';
import { SearchInput } from './SearchInput';

describe('Search Input', () => {
    it ('renders without crash', () => {
        shallow(<SearchInput />)
    })
})