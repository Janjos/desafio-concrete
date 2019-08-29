import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Flexbox } from "../../styles/Flexbox";

const IconContainer = styled.div`
    div {
        margin-top: .8em;
    }

    p {
        font-size: 1.2em;
        font-weight: 200;
    }

    .user_meta {
        &_icon {
            margin-right: .5em;
        }
    }
`;

export const UserBoxItem = ({ icon, text }) => {
    return (
        <IconContainer>
            <Flexbox justifyContent='start'>
                <img className='user_meta_icon' src={icon} />
                <p className={`user_meta_${text}`}>
                    {text}
                </p>
            </Flexbox>
        </IconContainer>
    )
}

UserBoxItem.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}