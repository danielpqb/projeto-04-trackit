import React, { useContext } from 'react'
import styled from "styled-components"

import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import updateLocale from "dayjs/plugin/updateLocale"
import UserContext from '../../Context/UserContext'
dayjs.extend(updateLocale)
dayjs.updateLocale("pt-br", {
    weekdays: [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
    ],
})
const today = dayjs().locale("pt-br").format("dddd, DD/MM")

export default function Title({ screenId, showNewHabit, setShowNewHabit }) {

    const { progress } = useContext(UserContext)

    return (
        <Wrapper screenId={screenId}>
            {screenId === 'today' ?
                <>
                    <Name>{today}</Name>
                    <Description progress={progress}>{
                        !progress ?
                            'Nenhum hábito concluído ainda'
                            :
                            `${progress}% dos hábitos concluídos `
                    }</Description>
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
        color: ${({ progress }) => (!progress ? '#BABABA' : '#8FC549')};
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