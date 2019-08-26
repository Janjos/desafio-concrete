import React, { useState } from 'react';
import searchIcon from '../../assets/icons/search_icon.png';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

export const SearchInputBase = ({ history }) => {
    const [userName, setUserName] = useState('');

    return (
        <div>
            <input
                type="text"
                id="search-box"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                onKeyPress={e => {
                    (e.key == 'Enter') && history.push(`/user/${userName}`)
                }}
            />

            <Link
                to={`/user/${userName}`}
            >
                <img src={searchIcon} alt='Search user' />
            </Link>
        </div>
    );
}

export const SearchInput = withRouter(SearchInputBase);