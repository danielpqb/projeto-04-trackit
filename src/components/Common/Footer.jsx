import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <Wrapper>
            <div className="habits">
                <Link to={`/habitos`}>
                    Hábitos
                </Link>
            </div>
            <div className="today">
                <Link to={`/hoje`}>
                    Hoje
                </Link>
            </div>
            <div className="history">
                <Link to={`/historico`}>
                    Histórico
                </Link>
            </div>
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
    }
    
    & a {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;

        color: #52B6FF;
    }

    & .today a {
        background: #52B6FF;
        color: #FFFFFF;

        border-radius: 50%;
        min-width: 90px;
        max-width: 90px;
        height: 90px;

        position: fixed;
        bottom: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`