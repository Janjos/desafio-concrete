export const getUserStars = (repos) => (
    repos
    .map(repo => repo.stargazers_count)
    .reduce((a, b) => a + b)
);