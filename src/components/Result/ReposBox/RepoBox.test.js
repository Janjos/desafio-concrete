import React from 'react';
import {shallow} from 'enzyme';
import { ReposBox } from '.';
import { RepoItem } from './RepoItem';
import reposMock from '../../../../__mocks__/reposMock';

describe('Repos Box', () => {
    it('renders without crash', () => {
        shallow(<ReposBox repos={reposMock} />);
    })
});

describe('Repo Item', () => {
    it('renders without crash', () => {
        shallow(<RepoItem repo={reposMock[0]} />);
    })
})