import React from 'react';
import styled from 'styled-components';
import { FONTS, COLORS, MEDIA_QUERY } from '../../../constants';

export const UserBoxContainer = styled.div`
    display: flex;
    flex-direction: column;

    h2, h3, p {
        font-family: ${FONTS.TEXT};
        color: ${COLORS.SECONDARY};
        margin: 0;
    }

    .user {
        &_avatar {
            width: 100%;
        }

        &_username {
            margin-bottom: 1.5em;

            &_name {
                font-size: 1.5em;
                color: black;
            }

            &_login {
                font-size: 1.2em;
                font-weight: 200;
                margin-top: .2em;
            }
        }
    }

    @media (max-width: ${MEDIA_QUERY.TABLET}) {
        margin-bottom: 3em;

        .user {
            &_avatar {
                width: 60%;
            }

            &_username {
                margin-bottom: .4em;
            }
        }
    }

    @media (max-width: ${MEDIA_QUERY.MOBILE}) {
        .user {
            &_avatar {
                width: 100%;
            }
        }
    }
`;