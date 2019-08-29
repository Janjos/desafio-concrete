import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import searchIcon from '../../assets/icons/search_icon.png';
import { COLORS, MEDIA_QUERY } from '../../constants';
import { Input } from './Input';
import { userBrowser } from '../../helpers';

const SearchButton = styled.button`
    display: block;
    background: ${COLORS.PRIMARY};
    box-shadow: 1px 0 3px ${COLORS.SHADOW};
    border: none;
    padding: 0.8em;
    transition: all .3s ease;
    width: 8em;
    cursor: pointer;

    @media (max-width: ${MEDIA_QUERY.TABLET}) {
        padding: 0.3em 1em;
        width: 20%;
    }

    &:hover {
        filter: brightness(105%);
        transform: scale(1.05);
    }

    img {
        height: 80%;
    }
`;

const Label = styled.label`
    visibility: hidden;
    position: absolute;
`;

const SearchForm = styled.div`
    display: flex;
    width: 100%;
`;

const SearchInputBase = ({ match, history }) => {
    const [userName, setUserName] = useState('');

    const searchUser = () => {
        userName && history.push(`/user/${userName}`);
    }

    return (
        <React.Fragment>
            <Label htmlFor="search-box">
                Type the name of the Github user that you want to find
            </Label>
                <SearchForm>
                    <Input
                        type="text"
                        id="search-box"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        onKeyPress={e => {
                            if (e.key == 'Enter') {
                                searchUser(e);
                                e.target.blur();
                            }
                        }}
                    />

                    <SearchButton
                        src={searchIcon}
                        onClick={() => searchUser()}
                    >
                        <img src={searchIcon} alt='Search user' />
                    </SearchButton>
                </SearchForm>
        </React.Fragment>
    );
}

export const SearchInput = withRouter(SearchInputBase);