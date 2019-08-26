import React from 'react';
import { Flexbox } from '../styles/Flexbox';
import styled from 'styled-components';
import { FONTS, COLORS } from '../../constants';

const NotFoundText = styled.h1`
    font-family: ${FONTS.TEXT};
    color: ${COLORS.PRIMARY};
`;

export const NotFound = () => (
    <Flexbox alignContent='center' margin='2em 0'>
        <NotFoundText> User not found :( </NotFoundText>
    </Flexbox>
)