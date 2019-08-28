import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        setUser(userMock);
        setRepos(reposMock);
    }, [match]);

    // useEffect(() => {
    //     setLoading(true);

    //     getUser(match.params.username).then(user => {
    //         if (user) {
    //             setUser(user);
    //             getRepos(match.params.username).then(repos => {
    //                 setRepos(repos);
    //             }).then(() => setLoading(false));
    //         } else {
    //             history.replace('/notfound');
    //             setLoading(false);
    //         }
    //     });
    // }, [match.params.username]);

    return (
        <Loading isLoading={loading}>
            <Flexbox alignItems='start' justifyContent='space-between'>
                <Column maxWidth={LAYOUT.COLUMN.LEFT} width={LAYOUT.COLUMN.LEFT}>
                    <UserBox user={user} />
                </Column>
                <Column width={LAYOUT.COLUMN.RIGHT} padding='0 0 0 1.5em'>
                    <ReposBox repos={repos} />
                </Column>
            </Flexbox>
        </ Loading>
    );
}