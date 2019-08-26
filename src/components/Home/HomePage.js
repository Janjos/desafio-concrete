import React, {useState} from 'react';
import { Logo } from '../common/Logo';
import { LOGO_SIZES } from '../../constants';
import { SearchInput } from '../common/SearchInput';

export const HomePage = ({history}) => {
    return (
        <div>
            <Logo size={LOGO_SIZES.BIG}></Logo>
            <label htmlFor="search-box">
                Type the name of the Github user that you want to find
            </label>
            <div>
                <SearchInput />
            </div>
        </div>
    )
}