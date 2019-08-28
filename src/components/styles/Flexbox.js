import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constants';

export const Flexbox = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    flex-direction: ${props => props.direction || 'row'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    margin: ${props => props.margin || '0'};
    max-width: ${props => props.maxWidth || 'auto'};

    @media (max-width: ${MEDIA_QUERY.TABLET}) {
        flex-direction: ${props => props.mobileDirection || props.direction || 'row'};
    }
`;