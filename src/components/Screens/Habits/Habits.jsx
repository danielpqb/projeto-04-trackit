import React from 'react'
import styled from 'styled-components'
import Footer from '../../Common/Footer'
import Header from '../../Common/Header'

export default function Habits() {
    return (
        <Wrapper>
            <Header />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & {
        width: 100vw;
        height: 100vh;
        background: #F2F2F2;
    }
`