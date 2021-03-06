import axios from 'axios';
import { GITHUB_API_USERS } from '../constants';

export const getUser = (username) => (
    axios.get(`${GITHUB_API_USERS}/${username}`, {
        headers: {Authorization: 'janjos ihad3174'}
    })
        .then(res => res.data)
        .catch(err => {
            console.warn(err);
            return null;
        })
);

export const getRepos = (username) => (
    axios.get(`${GITHUB_API_USERS}/${username}/repos`, {
        headers: {Authorization: 'janjos ihad3174'}
    })
        .then(res => res.data)
        .catch(err => {
            console.warn(err);
            return null;
        })
);