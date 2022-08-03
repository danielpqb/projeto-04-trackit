import React from 'react'
import styled from "styled-components"

export default function Button({ color, children }) {
    return (
        <Wrapper color={color}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    & {
        width: 100px;
        height: 35px;
        color: ${({ color }) => ((color === 'blue') ? '#52B6FF' : '#FFFFFF')};
        background: ${({ color }) => (!(color === 'blue') ? '#52B6FF' : '#FFFFFF')};

        border-radius: 5px;
        border: none;

        font-size: 16px;

        align-self: center;
    }
`