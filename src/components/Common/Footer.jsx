import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <Wrapper>
            <div className="habits">Hábitos</div>
            <div className="today">Hoje</div>
            <div className="history">Histórico</div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    & {
        position: fixed;
        left: 0;
        bottom: 0;

        height: 70px;

        background: #FFFFFF;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;

        color: #52B6FF;
    }

    .today {
        background: #52B6FF;
        color: #FFFFFF;

        border-radius: 50%;
        min-width: 90px;
        max-width: 90px;
        height: 90px;

        position: fixed;
        bottom: 12px;
    }
`