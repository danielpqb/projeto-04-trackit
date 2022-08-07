import React, { useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../../../Context/UserContext'
import { postCheckHabitAsDone, postUncheckHabitAsDone } from '../../../services/trackitAPI'

export default function TodayTask({ todayHabitData }) {

    const { userData } = useContext(UserContext)

    console.log('todayHabitData:', todayHabitData)

    function toggleCheck() {
        if (todayHabitData.done) {
            postUncheckHabitAsDone(todayHabitData.id, userData.token)
        }
        else {
            postCheckHabitAsDone(todayHabitData.id, userData.token)
        }
    }

    return (
        <Wrapper id={todayHabitData.id}>

            <Text>
                <h1>{todayHabitData.name}</h1>
                <h2>{`Sequência atual: ${todayHabitData.currentSequence}`}</h2>
                <h2>{`Seu recorde: ${todayHabitData.highestSequence}`}</h2>
            </Text>

            <Button
                isDone={todayHabitData.done}
                onClick={() => {
                    toggleCheck()
                }}
            >

            </Button>

        </Wrapper>
    )
};

const Wrapper = styled.div`
    & {
        height: 100px;
        background: #FFFFFF;
        border-radius: 5px;

        padding: 15px;
        margin-top: 10px;
    }
`

const Text = styled.div`
    & {
        flex-direction: column;
        align-items: flex-start;

        color: #666666;
    }

    h1 {
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 12.976px;
        line-height: 16px;
    }
`
const Button = styled.div`
    & {
        height: 70px;
        min-width: 70px;
        max-width: 70px;
        background: ${({ isDone }) => isDone ? '#8FC549' : '#EBEBEB'};
        border-radius: 5px;
    }
`