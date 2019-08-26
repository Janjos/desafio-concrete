import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { MEDIA_QUERY } from '../../constants';

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    margin: 0 !important;

    @media (max-width: ${MEDIA_QUERY.TABLET}) {
        font-size: 12px;
    }

    @media (max-width: ${MEDIA_QUERY.MOBILE}) {
        font-size: 10px;
    }
  }
`;