import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getUser, getRepos } from '../../services/githubApi';
import { UserBox } from './UserBox';
import { Column } from '../common/Column';
import { ReposBox } from './ReposBox';
import { Flexbox } from '../styles/Flexbox';
import { LAYOUT } from '../../constants';
import userMock from '../../../__mocks__/userMock';
import reposMock from '../../../__mocks__/reposMock';
import { Loading } from '../common/Loading';

export const ResultPage = ({ match, history }) => {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setUser(userMock);
    //     setRepos(reposMock);
    // }, [match]);

    useEffect(() => {
        setLoading(true);

        getUser(match.params.username).then(user => {
            if (user) {
                setUser(user);
                getRepos(match.params.username).then(repos => {
                    setRepos(repos);
                }).then(() => setLoading(false));
            } else {
                history.replace('/notfound');
                setLoading(false);
            }
        });
    }, [match.params.username]);

    const ResultPageContainer = styled.div`

    `;

    return (
        <Loading isLoading={loading}>
            <ResultPageContainer>
                <Flexbox
                    alignItems='start'
                    justifyContent='space-between'
                    mobileDirection='column'
                >
                    <Column mobileWidth={'100%'} maxWidth={LAYOUT.COLUMN.LEFT} width={LAYOUT.COLUMN.LEFT}>
                        <UserBox user={user} />
                    </Column>
                    <Column mobileWidth={'100%'} width={LAYOUT.COLUMN.RIGHT}>
                        <ReposBox repos={repos} />
                    </Column>
                </Flexbox>
            </ResultPageContainer>
        </ Loading>
    );
}