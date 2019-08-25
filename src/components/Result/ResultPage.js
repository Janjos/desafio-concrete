import React, {useEffect, useState} from 'react';
import { getUser, getRepos } from '../../services/GithubApi';

export const ResultPage = (props) => {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        getUser('janjos').then(user => {
            setUser(user);
        });

        getRepos('janjos').then(repos => {
            setRepos(repos);
        });
    }, []);

    return (
        <div>
            <h1> {user.name} </h1>
        </div>
    );
}