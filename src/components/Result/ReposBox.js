import React from 'react';

export const ReposBox = ({ repos }) => {
    return (
        <div className='repos'>
            <ul>
                {
                    repos
                    &&
                    repos.map(repo => (
                        <li key={repo.id}>
                            <h2> {repo.name} </h2>
                            <p> {repo.description} </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}