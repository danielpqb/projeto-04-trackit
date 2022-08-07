import React from 'react'
import styled from 'styled-components'

import Footer from '../../Common/Footer'
import Header from '../../Common/Header'
import Title from '../../Common/Title'
import TodayTask from './TodayTask'

export default function Today() {

    return (
        <Wrapper>

            <Header />

            <Title screenId='today' />

            <TodayTask />

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