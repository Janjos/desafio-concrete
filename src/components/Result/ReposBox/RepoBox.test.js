import React from 'react';
import {shallow, mount} from 'enzyme';
import { ReposBox } from '.';
import { RepoItem } from './RepoItem';
import reposMock from '../../../../__mocks__/reposMock';

const mockedReposBox = <ReposBox repos={reposMock} />;

describe('Repos Box', () => {
    it('renders without crash', () => {
        shallow(mockedReposBox);
    })

    it("renders RepoItem's", () => {
        expect(mount(mockedReposBox).find(RepoItem)).toHaveLength(reposMock.length);
    })
});

describe('Repo Item', () => {
    it('renders without crash', () => {
        shallow(<RepoItem repo={reposMock[0]} />);
    })
})