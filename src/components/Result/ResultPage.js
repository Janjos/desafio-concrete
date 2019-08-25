import React, {useEffect, useState} from 'react';
import { getUser, getRepos } from '../../services/githubApi';
import { match } from 'minimatch';

export const ResultPage = ({match, history}) => {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        getUser(match.params.username).then(user => {
            user ? setUser(user) : history.push('/notfound')
        });

        getRepos(match.params.username).then(repos => {
            setRepos(repos);
        });
    }, []);

    return (
        <div>
            <div className='user'>
                <img className='user_avatar' src={user.avatar_url} alt={`${user.name} avatar`} />
                <h2 className='user_name'>{user.name}</h2>
                <h3 className='user_login'> {user.login} </h3>
                <div className='user_meta'>
                    <div>
                        <img />
                        <p className='user_meta_company'>
                            {user.company}
                        </p>
                    </div>
                    <div>
                        <img />
                        <p className='user_meta_location'>
                            {user.location}
                        </p>
                    </div>
                    <div>
                        <img />
                        <p className='user_meta_stars'>
                            13
                        </p>
                    </div>
                    <div>
                        <img />
                        <p className='user_meta_repos'>
                            {user.public_repos}
                        </p>
                    </div>
                    <div>
                        <img />
                        <p className='user_meta_followers'>
                            {user.followers}
                        </p>
                    </div>
                </div>
            </div>
            <div className='repos'>
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