import React from 'react';
import styled from 'styled-components';
import { COLORS, MEDIA_QUERY } from '../../../constants';

const LoadingIconContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    box-sizing: content-box;

    @media(min-width: ${MEDIA_QUERY.TABLET}) {
        transform: scale(2);
    }

    & div {
        box-sizing: content-box;
        position: absolute;
        border: 8px solid ${COLORS.PRIMARY};
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    & div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes lds-ripple {
        0% {
        top: 28px;
        left: 28px;
        width: 0;
        height: 0;
        opacity: 1;
        }
        100% {
        top: -1px;
        left: -1px;
        width: 58px;
        height: 58px;
        opacity: 0;
        }
    }
`;

export const LoadingIcon = () => {
    return (
        <LoadingIconContainer>
            <div /><div />
        </LoadingIconContainer>
    )
}