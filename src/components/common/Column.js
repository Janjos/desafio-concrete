import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constants';

export const Column = styled.div`
    width: ${props => props.width || '100%'};
    max-width: ${props => props.maxWidth || 'auto'};
    padding: ${props => props.padding || 'auto'};

    @media (max-width: ${MEDIA_QUERY.TABLET}) {
        width: ${props => props.mobileWidth || '100%'};
        max-width: ${props => props.mobileWidth || 'auto'};
    }
`;