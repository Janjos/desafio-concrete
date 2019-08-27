import React from 'react';
import { RepoItem } from './RepoItem';
import styled from 'styled-components';

const ReposList = styled.ul`
    padding: 0;
`;

export const ReposBox = ({ repos }) => {
    return (
        <div className='repos'>
            <ReposList>
                {
                    repos
                    &&
                    repos.map(repo => (
                        <RepoItem key={repo.id} repo={repo} />
                    ))
                }
            </ReposList>
        </div>
    )
}