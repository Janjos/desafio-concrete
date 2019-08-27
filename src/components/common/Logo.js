import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LOGO_SIZES, FONTS, MEDIA_QUERY } from '../../constants';

export const Logo = ({ size }) => {
    const LogoContainer = styled.h1`
        flex: 0 0 auto;
        white-space: nowrap;
        font-size: 2.74vw;
        margin: 0;

        ${
            (size == LOGO_SIZES.BIG)
            &&
            `font-size: 4em;`
        }

        a {
            text-decoration: none;
            color: black;
        }
    `;

    const GitHubLogo = styled.span`
        font-family: ${FONTS.TITLE};
        font-weight: normal;
    `;

    const SearchLogo = styled.span`
        font-family: ${FONTS.TEXT};
        font-style: italic;
        font-weight: 200;
        margin-left: -0.2em;
        ${
        (size == LOGO_SIZES.BIG)
        &&
        `margin-left: -0.3em;`
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
