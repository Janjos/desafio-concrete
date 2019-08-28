import React from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { Logo } from './Logo';
import { Flexbox } from '../styles/Flexbox';
import { Column } from '../styles/Column';
import { MEDIA_QUERY, LAYOUT } from '../../constants';

const HeaderContainer = styled.div`
    margin-bottom: 3em;
    
    @media (max-width: ${MEDIA_QUERY.TABLET}) {
        .left-column {
            display: none;
        }

        .right-column {
            width: 100%;
        }
    }
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <Flexbox direction='row' justifyContent='space-between'>
                <Column className='left-column' width={LAYOUT.COLUMN.LEFT}>
                    <Logo size='small' />
                </Column>
                <Column className='right-column' width={LAYOUT.COLUMN.RIGHT}>
                    <SearchInput />
                </Column>
            </Flexbox>
        </HeaderContainer>
    )
}