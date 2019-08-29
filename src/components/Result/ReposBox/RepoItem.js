import React from 'react';
import styled from 'styled-components';
import { FONTS, COLORS } from '../../../constants';
import starIcon from '../../../assets/icons/star_icon.png';

const RepoItemContainer = styled.div`
    margin-top: 0;

    &:not(:first-child) {
        margin-top: 2em;
    }
    
    h2 {
        font-family: ${FONTS.TEXT};
        color: ${COLORS.PRIMARY};
        margin: 0;
        font-size: 2em;
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

export const RepoItem = ({repo}) => {
    return (
        <RepoItemContainer>
            <h2> {repo.name} </h2>
            <p> {repo.description} </p>
            <Stars>
                <img src={starIcon} />
                <p>{repo.stargazers_count}</p>
            </Stars>
        </RepoItemContainer>
    );
}