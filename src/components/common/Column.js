import React from 'react';
import styled from 'styled-components';

export const Column = styled.div`
    width: ${props => props.width || '100%'};
    max-width: ${props => props.maxWidth || 'auto'};
`;