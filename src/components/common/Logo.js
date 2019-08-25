import React from 'react';
import PropTypes from 'prop-types';
import { LOGO_SIZES } from '../../constants';

export const Logo = (props) => (
    <h1>
        Github <i> Search </i>
    </h1>
);

Logo.defaultProps = {
    size: LOGO_SIZES.SMALL
}

Logo.propTypes = {
    size: PropTypes.oneOf([LOGO_SIZES.SMALL, LOGO_SIZES.BIG]).isRequired
};
