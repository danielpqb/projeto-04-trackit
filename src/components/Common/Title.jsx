import React from 'react'
import styled from "styled-components"

export default function Title({ showNewHabit, setShowNewHabit }) {
    return (
        <Wrapper>
            <Name>Meus hábitos</Name>
            <Button onClick={() => { setShowNewHabit(!showNewHabit) }}>+</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & {
        height: 70px;
        color: #126BA5;
    }
`

const Name = styled.div`
    & {
        justify-content: flex-start;
        font-size: 23px;
    }
`
const Button = styled.div`
    & {
        background: #52B6FF;
        border-radius: 5px;
        width: 40px;
        height: 35px;
        color: #FFFFFF;
        font-size: 27px;
    }
`