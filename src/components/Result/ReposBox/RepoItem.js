import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FONTS, COLORS } from '../../../constants';
import starIcon from '../../../assets/icons/star_icon.png';

const RepoItemContainer = styled.div`
    margin-top: 0;

    &:not(:first-child) {
        margin-top: 2em;
    }
    
    a {
        font-family: ${FONTS.TEXT};
        color: ${COLORS.PRIMARY};
        margin: 0;
        text-decoration: none;

        h2 {
            font-size: 2em;
            margin: 0;
        }
    }

    p {
        font-family: ${FONTS.TEXT};
        margin: 0.2em 0 0 0;
        font-size: 1em;
    }
`;

const Stars = styled.div`
    display: flexbox;
    margin-top: 0.5em;

    img {
        margin-right: .4em;
    }

`;

export const RepoItem = ({ repo }) => {
    return (
        <RepoItemContainer>
            <a href={repo.html_url} target='_blank'>
                <h2>
                    {repo.name}
                </h2>
            </a>
            <p> {repo.description} </p>
            <Stars>
                <img src={starIcon} />
                <p>{repo.stargazers_count}</p>
            </Stars>
        </RepoItemContainer>
    );
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}