import React from 'react'
import styled from 'styled-components'

import Footer from '../../Common/Footer'
import Header from '../../Common/Header'
import Title from '../../Common/Title'

export default function History() {

    return (
        <Wrapper>

            <Header />

            <Title screenId='historico' />

            <Message>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </Message>

            <Footer />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    & {
        padding: 70px 20px;
        flex-direction: column;
        justify-content: flex-start;
        width: 100vw;
        height: 100vh;
        background: #F2F2F2;

        font-size: 23px;

        color: #666666;
    }
`

const Message = styled.div`
    & {
        height: 75px;
        margin-bottom: 25px;
        justify-content: flex-start;
    }
`