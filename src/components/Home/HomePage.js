import React from 'react';
import { Logo } from '../Common/Logo';
import { LOGO_SIZES } from '../../constants';
import searchIcon from '../../assets/icons/search_icon.png';

export const HomePage = () => {
    return (
        <div>
            <Logo size={LOGO_SIZES.BIG}></Logo>
            <label for="search-box">
                Type the name of the Github user that you want to find
            </label>
            <div>
                <input type="text" id="search-box"></input>
                <button>
                    <img src={searchIcon} alt='Search user'/>
                </button>
            </div>
        </div>
    )
}