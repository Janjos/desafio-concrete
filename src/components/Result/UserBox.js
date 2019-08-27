import React from 'react';
import styled from 'styled-components';

const UserAvatar = styled.img`
    width: 100%;
`;

export const UserBox = ({user}) => {

    return(
        <div className='user'>
            <UserAvatar
                className='user_avatar'
                src={user.avatar_url}
                alt={`${user.name} avatar`}
            />
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
    )
}