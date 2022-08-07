import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <Wrapper>
            <div>
                <Link to={`/habitos`}>
                    Hábitos
                </Link>
            </div>
            <Today>
                <Link to={`/hoje`}>
                    Hoje
                </Link>
            </Today>
            <div>
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

        z-index: 1;
    }
    
    & a {
        font-size: 18px;

        color: #52B6FF;
    }
`

const Today = styled.div`
    a {
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