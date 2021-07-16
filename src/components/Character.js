// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacterDiv = styled.div`
    border: 1px solid #FFE81F;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 32px 0px;
    margin: 16px;
    padding: 16px;
    width: 40%;
`

const StyledCharacterH2 = styled.h2`
    color: #FFE81F;
`

const Character = (props) => {
    const {character} = props;

    return (
        <StyledCharacterDiv>
            <StyledCharacterH2>{character.name}</StyledCharacterH2>
        </StyledCharacterDiv>
    )
}

export default Character;