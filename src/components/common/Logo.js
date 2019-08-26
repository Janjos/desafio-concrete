import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LOGO_SIZES, FONTS } from '../../constants';

export const Logo = ({ size }) => {
    const LogoContainer = styled.h1`
        flex: 0 0 auto; 

        a {
            text-decoration: none;
            color: black;
        }
    `;

    const GitHubLogo = styled.span`
        font-family: ${FONTS.TITLE};
        font-weight: normal;
        ${
        (size == LOGO_SIZES.BIG)
        &&
        `font-size: 2em;`
        }
    `;

    const SearchLogo = styled.span`
        font-family: ${FONTS.TEXT};
        font-style: italic;
        font-weight: 200;
        margin-left: -0.2em;
        ${
        (size == LOGO_SIZES.BIG)
        &&
        `font-size: 2em;
             margin-left: -0.3em;`
        }
    `;

    return (
        <LogoContainer>
            <Link to='/'>
                <GitHubLogo> Github </GitHubLogo>
                <SearchLogo> Search </SearchLogo>
            </Link>
        </LogoContainer>
    );
};

Logo.defaultProps = {
    size: LOGO_SIZES.SMALL
}

Logo.propTypes = {
    size: PropTypes.oneOf([LOGO_SIZES.SMALL, LOGO_SIZES.BIG]).isRequired
};
