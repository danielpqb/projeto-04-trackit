import React from 'react'
import styled from "styled-components"

export default function Button({ id, color, children, disabled, onClick }) {
    return (
        <Wrapper id={id} color={color} disabled={disabled} type={id === 'cancel' ? 'button' : 'submit'} onClick={onClick}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    & {
        width: 100px;
        height: 35px;
        color: ${({ color }) => (!(color === 'blue') ? '#52B6FF' : '#FFFFFF')};
        background: ${({ color }) => ((color === 'blue') ? '#52B6FF' : '#FFFFFF')};

        opacity: ${({ disabled }) => (!disabled ? '1' : '0.7')};

        border-radius: 5px;

        font-size: 16px;

        align-self: center;
    }
`