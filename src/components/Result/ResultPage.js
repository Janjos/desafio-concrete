import React, {useEffect, useState} from 'react';
import { getUser, getRepos } from '../../services/githubApi';
import { UserBox } from './UserBox/UserBox';
import { Column } from '../common/Column';
import { ReposBox } from './ReposBox';
import { Flexbox } from '../styles/Flexbox';
import { LAYOUT } from '../../constants';
import userMock from '../../../__mocks__/userMock';

export const ResultPage = ({match, history}) => {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        getUser(match.params.username).then(user => {
            if (true) {
                // setUser(user);
                // getRepos(match.params.username).then(repos => {
                //     setRepos(repos);
                // });
                setUser(userMock);
            } else {
                history.replace('/notfound');
            }
        });
    }, [match]);

    return (
        <Flexbox alignItems='start' justifyContent='space-between'>
            <Column maxWidth={LAYOUT.COLUMN.LEFT} width={LAYOUT.COLUMN.LEFT}>
                <UserBox user={user} />
            </Column>
            <Column width={LAYOUT.COLUMN.RIGHT} padding='0 0 0 1.5em'>
                <ReposBox repos={repos} />
            </Column>
        </Flexbox>
    );
}