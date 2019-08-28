import React from 'react';
import { shallow } from 'enzyme';
import { ResultPage } from './ResultPage';
import { appWrapper } from '../../testUtils';
import { ROUTES } from '../../constants';

let wrapper = appWrapper(`${ROUTES.RESULT.PATH}/timbl`);

describe('Result Page', () => {

    it('Renders without crash', () => {
        expect(wrapper.find(ResultPage)).toHaveLength(1);
    })
})