import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import UserContext from '../../../Context/UserContext'
import { getTodayHabits } from '../../../services/trackitAPI'

import Footer from '../../Common/Footer'
import Header from '../../Common/Header'
import Title from '../../Common/Title'
import TodayTask from './TodayTask'

export default function Today() {

    const { userData } = useContext(UserContext)

    const [userTodayHabits, setUserTodayHabits] = useState([])

    console.log('userTodayHabits:', userTodayHabits)

    useEffect(() => {
        const promise = getTodayHabits(userData.token)
        promise.then((res) => {
            setUserTodayHabits(res.data)
            console.log(res.data)
        })
        promise.catch((res) => {
            alert('ERRO!')
            console.log(res)
        })
    }, [])

    return (
        <Wrapper>

            <Header />

            <Title screenId='today' />

            {userTodayHabits.map((element, index) => {
                return (
                    <TodayTask key={index} userTodayHabits={userTodayHabits} todayHabitData={element} />
                )
            })

            }

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