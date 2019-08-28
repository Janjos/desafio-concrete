import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

export const Input = styled.input`
    background: ${COLORS.WHITE};
    box-shadow: 0 0 3px ${COLORS.SHADOW};
    border: none;
    padding: 0.6em 1.3em;
    width: 100%;
    font-size: 1.2em;
    color: ${COLORS.SECONDARY};
    box-sizing: border-box;
`;