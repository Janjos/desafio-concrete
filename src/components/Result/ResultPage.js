import React, {useEffect, useState} from 'react';
import { getUser, getRepos } from '../../services/githubApi';
import { UserBox } from './UserBox';
import { Column } from '../common/Column';
import { ReposBox } from './ReposBox';
import { Flexbox } from '../styles/Flexbox';

export const ResultPage = ({match, history}) => {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        getUser(match.params.username).then(user => {
            console.log(user);
            if (user) {
                getRepos(match.params.username).then(repos => {
                    setRepos(repos);
                });
            } else {
                history.replace('/notfound');
            }
        });
    }, [match]);

    return (
        <Flexbox alignItems='start'>
            <Column width='30%'>
                <UserBox user={user} />
            </Column>
            <Column width='70%'>
                <ReposBox repos={repos} />
            </Column>
        </Flexbox>
    );
}