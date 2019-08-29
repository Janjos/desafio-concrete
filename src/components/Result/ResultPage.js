import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getUser, getRepos } from '../../services/githubApi';
import { UserBox } from './UserBox';
import { Column } from '../styles/Column';
import { ReposBox } from './ReposBox';
import { Flexbox } from '../styles/Flexbox';
import { LAYOUT } from '../../constants';
import { Loading } from '../common/Loading';
import { getUserStars } from './UserBox/userHelpers';

export const ResultPage = ({ match, history }) => {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        
        let fetchedUser = {};
        getUser(match.params.username)
        .then(user => fetchedUser = user)
        .then(getRepos(match.params.username)
        .then(repos => {
            setRepos(repos);
            fetchedUser.stars = getUserStars(repos);
            setUser(fetchedUser);
        }))
        

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