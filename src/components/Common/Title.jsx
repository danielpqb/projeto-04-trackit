import React from 'react'
import styled from "styled-components"

export default function Title({ screenId, showNewHabit, setShowNewHabit }) {
    return (
        <Wrapper screenId={screenId}>
            {screenId === 'today' ?
                <>
                    <Name>Date, time</Name>
                    <Description screenId={screenId}>Vem no test</Description>
                </>
                :
                screenId === 'historico' ?
                    <>
                        <Name>Histórico</Name>
                    </>
                    :
                    <>
                        <Name>Meus hábitos</Name>
                        <Button onClick={() => { setShowNewHabit(!showNewHabit) }}>+</Button>
                    </>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & {
        height: ${({ screenId }) => screenId === 'today' ? '100px' : '70px'};;
        color: #126BA5;
        flex-direction: ${({ screenId }) => screenId === 'today' ? 'column' : 'row'};
    }
`

const Name = styled.div`
    & {
        justify-content: flex-start;
        font-size: 23px;
        height: fit-content;
    }
`

const Description = styled.div`
    & {
        justify-content: flex-start;
        font-size: 18px;
        color: ${({ screenId }) => screenId === 'today' ? '#BABABA' : '#8FC549'};
        height: fit-content;
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