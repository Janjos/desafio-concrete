import axios from 'axios';
import { GITHUB_API_USERS } from '../constants';

export const getUser = (username) => (
    axios.get(`${GITHUB_API_USERS}/${username}`)
        .then(res => res.data)
        .catch(err => {
            console.warn(err);
            return null;
        })
);

export const getRepos = (username) => (
    axios.get(`${GITHUB_API_USERS}/${username}/repos`)
        .then(res => res.data)
        .catch(err => {
            console.warn(err);
            return null;
        })
);

// export const getUserWithRepos = async (username) => {
//     const user = await getUser(username);
//     const repos = await getRepos(username);
//     const stars = repos.reduce((stars, repo) => {
//         const star = repo.stargazers_count;
//         return (star + stars);
//     });
//     return {
//         user: user,
//         repos: repos,
//         stars: stars
//     }
// }