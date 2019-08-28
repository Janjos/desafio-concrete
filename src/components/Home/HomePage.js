import React from 'react';

import { Logo } from '../common/Logo';
import { LOGO_SIZES } from '../../constants';
import { SearchInput } from '../common/SearchInput';
import { Flexbox } from '../styles/Flexbox';
import { Column } from '../styles/Column';

export const HomePage = ({history}) => {
    return (
        <Flexbox
            direction='column'
            height='calc(100vh - 5em)'
            maxWidth='80vw'
            margin='-3.5em auto 0 auto'
        >
            <Logo size={LOGO_SIZES.BIG} />
            <Column maxWidth='50em'>
                <SearchInput />
            </Column>
        </Flexbox>
    )
}