import React from 'react';
import PropTypes from 'prop-types';

import { UserBoxContainer } from './UserBoxContainer';
import organizationIcon from '../../../assets/icons/organization_icon.png';
import locationIcon from '../../../assets/icons/location_icon.png';
import starIcon from '../../../assets/icons/star_icon.png';
import repositorieIcon from '../../../assets/icons/organization_icon.png';
import followersIcon from '../../../assets/icons/followers_icon.png';
import { UserBoxItem } from './UserBoxItem';

export const UserBox = ({ user }) => {
    return (
        <UserBoxContainer>
            <img
                className='user_avatar'
                src={user.avatar_url}
                alt={`${user.name} avatar`}
            />
            <div className='user_username'>
                <h2 className='user_username_name'>{user.name}</h2>
                <h3 className='user_username_login'> {user.login} </h3>
            </div>
            
            <div className='user_meta'>
                { user.company && <UserBoxItem icon={organizationIcon} text={user.company}/> }
                { user.location && <UserBoxItem icon={locationIcon} text={user.location}/> }
                { user.stars && <UserBoxItem icon={starIcon} text={user.stars}/> }
                { user.public_repos && <UserBoxItem icon={repositorieIcon} text={user.public_repos}/> }
                { user.followers && <UserBoxItem icon={followersIcon} text={user.followers}/>}
            </div>
        </UserBoxContainer>
    )
}

UserBox.propTypes = {
    user: PropTypes.object.isRequired
}