import React from 'react';
import {shallow, mount} from 'enzyme';
import { UserBox } from '.';
import { UserBoxItem } from './UserBoxItem';
import { UserBoxContainer } from './UserBoxContainer';
import userMock from '../../../../__mocks__/userMock';

userMock.stars = 43;

const mockedUserBox = <UserBox user={userMock} />;

describe('User Box', () => {
    it('renders without crash', () => {
        shallow(mockedUserBox);
    })

    describe('renders correct info', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(mockedUserBox);
        })

        it("renders correct username", () => {
            expect(wrapper.find('.user_username_name').text().trim()).toEqual(userMock.name);
        })

        it("renders correct login", () => {
            expect(wrapper.find('.user_username_login').text().trim()).toEqual(userMock.login);
        })

        it("renders UserBoxItem's", () => {
            expect(wrapper.find(UserBoxItem)).toHaveLength(5);
        })

        afterEach(() => {
            wrapper.unmount();
        })
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