// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
`

const Character = (props) => {
    const {character} = props;

    return (
        <StyledCharacter>
            <p>{character.name}</p>
        </StyledCharacter>
    )
}

export default Character;