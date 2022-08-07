import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import UserContext from '../../../Context/UserContext'
import { deleteHabit, getHabits } from '../../../services/trackitAPI'

import trashCan from '../../../assets/img/TrashCan.svg'

import Footer from '../../Common/Footer'
import Header from '../../Common/Header'
import Title from '../../Common/Title'
import NewHabit from './NewHabit'
import HabitDays from './HabitDays'

export default function Habits() {

    const { userData } = useContext(UserContext)

    const [showNewHabit, setShowNewHabit] = useState(false)

    const [userHabits, setUserHabits] = useState([])

    console.log(userHabits)

    useEffect(() => {
        refreshUserHabits()
    }, [])

    function refreshUserHabits() {
        const promise = getHabits(userData.token)
        promise.then((res) => {
            setUserHabits(res.data)
            console.log(res.data)
        })
        promise.catch((res) => {
            alert('ERRO!')
            console.log(res)
        })
    }

    return (
        <Wrapper>

            <Header />

            <Title showNewHabit={showNewHabit} setShowNewHabit={setShowNewHabit} />

            {showNewHabit && <NewHabit userHabits={userHabits} setUserHabits={setUserHabits} showNewHabit={showNewHabit} setShowNewHabit={setShowNewHabit} />}

            {userHabits.map((element, index) => {
                return (
                    <Habit key={index}>
                        <HabitName>{element.name}</HabitName>
                        <HabitDays selectedDays={element.days} />
                        <img
                            src={trashCan}
                            alt=""
                            onClick={(e) => {
                                console.log(e)
                                deleteHabit(element.id, userData.token)

                                refreshUserHabits()
                            }}
                        />
                    </Habit>
                )
            })}

            {userHabits.length === 0 &&
                <NoHabitMessage>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoHabitMessage>
            }

            <Footer />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    & {
        padding: 80px 20px;
        padding-bottom: 110px;
        flex-direction: column;
        justify-content: flex-start;
        width: 100vw;
        min-height: 100vh;
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

const Habit = styled.div`
    & {
        position: relative;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
        
        height: fit-content;

        font-size: 20px;
        color: #666666;

        background: #FFFFFF;
        border-radius: 5px;

        padding: 15px;
    }

    img {
        position: absolute;
        top: 15px;
        right: 15px;
        height: 15px;
        width: 15px;
    }
`

const HabitName = styled.div`
    & {
        justify-content: flex-start;
        width: 95%;
    }
`