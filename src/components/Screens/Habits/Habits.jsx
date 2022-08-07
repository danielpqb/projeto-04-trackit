import React, { useState } from 'react'
import styled from 'styled-components'

import Footer from '../../Common/Footer'
import Header from '../../Common/Header'
import Title from '../../Common/Title'
import NewHabit from './NewHabit'

export default function Habits() {

    const [showNewHabit, setShowNewHabit] = useState(false)

    return (
        <Wrapper>

            <Header />

            <Title showNewHabit={showNewHabit} setShowNewHabit={setShowNewHabit} />

            {showNewHabit && <NewHabit />}

            <NoHabitMessage>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoHabitMessage>

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

const NoHabitMessage = styled.div`
    & {
        height: 75px;
        margin: 25px 0px;
    }
`