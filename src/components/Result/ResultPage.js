import React, {useEffect, useState} from 'react';
import { getUser, getRepos } from '../../services/githubApi';
import { match } from 'minimatch';

export const ResultPage = ({match}) => {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        getUser(match.params.username).then(user => {
            setUser(user);
        });

        getRepos(match.params.username).then(repos => {
            setRepos(repos);
        });
    }, []);

    return (
        <div>
            <div>
                <img src={user.avatar_url} alt={`${user.name} avatar`} />
                <h2> {user.login} </h2>
                <h3>{user.name}</h3>
            </div>
            <div>
                <ul>
                    {
                        repos.map(repo => (
                            <li key={repo.id}>
                                <h2> {repo.name} </h2>
                                <p> {repo.description} </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}