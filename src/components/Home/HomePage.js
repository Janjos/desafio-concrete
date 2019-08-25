import React, {useState} from 'react';
import { Logo } from '../common/Logo';
import { LOGO_SIZES, GITHUB_API_USERS } from '../../constants';
import searchIcon from '../../assets/icons/search_icon.png';
import { Link } from 'react-router-dom';

export const HomePage = (props) => {
    const [userName, setUserName] = useState('');

    const searchUser = () => {

    }

    return (
        <div>
            <Logo size={LOGO_SIZES.BIG}></Logo>
            <label htmlFor="search-box">
                Type the name of the Github user that you want to find
            </label>
            <div>
                <input
                    type="text"
                    id="search-box"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    onKeyPress={e => {
                        (e.key == 'Enter') && props.history.push(`/user/${userName}`)
                    }}
                />
                <Link
                    to={`/user/${userName}`}
                >
                    <img src={searchIcon} alt='Search user'/>
                </Link>
            </div>
        </div>
    )
}