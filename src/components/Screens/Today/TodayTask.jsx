import React, { useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../../../Context/UserContext'
import { postCheckHabitAsDone, postUncheckHabitAsDone } from '../../../services/trackitAPI'
import checkmark from '../../../assets/img/Checkmark.svg'

export default function TodayTask({ todayHabitData }) {

    const { userData, refresh, setRefresh } = useContext(UserContext)

    function toggleCheck() {
        if (todayHabitData.done) {
            postUncheckHabitAsDone(todayHabitData.id, userData.token).then(() => { setRefresh(!refresh) })
        }
        else {
            postCheckHabitAsDone(todayHabitData.id, userData.token).then(() => { setRefresh(!refresh) })
        }
    }

    return (
        <Wrapper id={todayHabitData.id}>

            <Text todayHabitData={todayHabitData}>
                <h1>{todayHabitData.name}</h1>
                <div>
                    Sequência atual:
                    <span>
                        &nbsp;{todayHabitData.currentSequence}{todayHabitData.currentSequence <= 0 ? '' : todayHabitData.currentSequence > 1 ? ' dias' : ' dia'}
                    </span>
                </div>
                <div>
                    Seu recorde:
                    <span>
                        &nbsp;{todayHabitData.highestSequence}{todayHabitData.currentSequence <= 0 ? '' : todayHabitData.currentSequence > 1 ? ' dias' : ' dia'}
                    </span>
                </div>
            </Text>

            <Button
                isDone={todayHabitData.done}
                onClick={() => {
                    toggleCheck()
                }}
            >
                <img src={checkmark} alt="" />
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
        font-size: 20px;
        margin-bottom: 10px;
    }

    div {
        justify-content: flex-start;
        font-size: 13px;
    }

    span {
        display: inline-block;
        font-size: 13px;
        vertical-align: middle;
        color: ${({ todayHabitData }) => ((todayHabitData.currentSequence === todayHabitData.highestSequence) && (todayHabitData.done)) ? '#8FC549' : '#666666'};
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

    img {
        width: 35px;
        height: 35px;
    }
`