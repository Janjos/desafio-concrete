import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../../constants';
import { LoadingIcon } from './LoadingIcon';

const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 9;
    position: relative;

    &.show {
        max-height: calc(100vh - 12em);
        min-height: calc(100vh - 12em);
    }
`;

const OverLay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${COLORS.WHITE};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loading = (({isLoading, children, className}) => {
    return (
        <div className={className}>
                {
                    <LoadingContainer className={isLoading && 'show'}>
                        {
                            isLoading
                            &&
                            <OverLay>
                                <LoadingIcon />
                            </OverLay>
                        }
                        {children}
                    </LoadingContainer>
                }
        </div>
    );
})

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired
}