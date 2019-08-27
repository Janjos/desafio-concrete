import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import searchIcon from '../../assets/icons/search_icon.png';
import { COLORS } from '../../constants';
import { Flexbox } from '../styles/Flexbox';
import { Input } from './Input';

const SearchButton = styled.span`
    display: block;
    padding: 0.5em 2em;
    background: ${COLORS.PRIMARY};
    height: 2em;
    box-shadow: 0 0 3px ${COLORS.SHADOW};

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
                        (e.key == 'Enter') && history.push(`/user/${userName}`)
                    }}
                />

                <Link
                    to={`/user/${userName}`}
                >
                    <SearchButton src={searchIcon}>
                        <img src={searchIcon} alt='Search user' />
                    </SearchButton>
                </Link>
            </Flexbox>
        </React.Fragment>
    );
}

export const SearchInput = withRouter(SearchInputBase);