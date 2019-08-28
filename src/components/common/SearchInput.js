import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import searchIcon from '../../assets/icons/search_icon.png';
import { COLORS, MEDIA_QUERY } from '../../constants';
import { Flexbox } from '../styles/Flexbox';
import { Input } from './Input';

const SearchButton = styled.button`
    display: block;
    background: ${COLORS.PRIMARY};
    height: 4em;
    box-shadow: 0 0 3px ${COLORS.SHADOW};
    border: none;
    padding: 0.8em;
    transition: all .3s ease;
    width: 8em;
    cursor: pointer;

    @media (max-width: ${MEDIA_QUERY.TABLET}) {
        height: 4em;
    }

    @media (max-width: ${MEDIA_QUERY.MOBILE}) {
        height: 4.15em;
    }

    &:hover {
        filter: brightness(105%);
        transform: scale(1.05);
    }

    img {
        height: 100%;
    }
`;

const Label = styled.label`
    visibility: hidden;
    position: absolute;
`;

export const SearchInputBase = ({match, history }) => {
    const [userName, setUserName] = useState('');

    const searchUser = () => {
        userName && history.push(`/user/${userName}`);
    }

    return (
        <React.Fragment>
            <Label htmlFor="search-box">
                Type the name of the Github user that you want to find
            </Label>
            <Flexbox>
                <Input
                    type="text"
                    id="search-box"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    onKeyPress={e => {
                        (e.key == 'Enter') && searchUser(e)
                    }}
                />

                <SearchButton
                    src={searchIcon}
                    onClick={() => searchUser()}
                >
                    <img src={searchIcon} alt='Search user' />
                </SearchButton>
            </Flexbox>
        </React.Fragment>
    );
}

export const SearchInput = withRouter(SearchInputBase);