import React from 'react';
import PropTypes from 'prop-types';
import { LOGO_SIZES, FONTS } from '../../constants';
import styled from 'styled-components';

export const Logo = ({size}) => {
    const GitHubLogo = styled.span`
        font-family: ${FONTS.TITLE};
        font-weight: normal;
        ${
            (size == LOGO_SIZES.BIG)
            &&
            'font-size: 2em;'
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
        <h1>
            <GitHubLogo> Github </GitHubLogo>
            <SearchLogo> Search </SearchLogo>
        </h1>
    );
};

Logo.defaultProps = {
    size: LOGO_SIZES.SMALL
}

Logo.propTypes = {
    size: PropTypes.oneOf([LOGO_SIZES.SMALL, LOGO_SIZES.BIG]).isRequired
};
