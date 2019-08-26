import React from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { Logo } from './Logo';
import { Flexbox } from '../styles/Flexbox';
import { Column } from './Column';

const HeaderContainer = styled.div``;

export const Header = () => {
    return (
        <HeaderContainer>
            <Flexbox direction='row' justifyContent='space-between'>
                <Column width='30%'>
                    <Logo size='small' />
                </Column>
                <Column width='70%'>
                    <SearchInput />
                </Column>
            </Flexbox>
        </HeaderContainer>
    )
}