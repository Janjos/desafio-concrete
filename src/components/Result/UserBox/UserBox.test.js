import React from 'react';
import {shallow} from 'enzyme';
import { UserBox } from '.';
import { UserBoxItem } from './UserBoxItem';
import { UserBoxContainer } from './UserBoxContainer';
import userMock from '../../../../__mocks__/userMock';

describe('User Box', () => {
    it('renders without crash', () => {
        shallow(<UserBox user={userMock} />);
    })
});

describe('UserBox Item', () => {
    it('renders without crash', () => {
        shallow(<UserBoxItem icon='' text={0} />);
    })
});

describe('UserBox Container', () => {
    it('renders without crash', () => {
        shallow(<UserBoxContainer />);
    })
});