import React, { useState } from 'react'
import styled from 'styled-components'

export default function HabitDays() {

    function toggleHabitDay(id) {
        for (const day of habitDays) {
            if (id === day.id) {
                day.selected = !day.selected
            }
        }

        setHabitDays([...habitDays])
    }

    const [habitDays, setHabitDays] = useState([
        { id: 1, name: 'D', selected: false },
        { id: 2, name: 'S', selected: false },
        { id: 3, name: 'T', selected: false },
        { id: 4, name: 'Q', selected: false },
        { id: 5, name: 'Q', selected: false },
        { id: 6, name: 'S', selected: false },
        { id: 7, name: 'S', selected: false },
    ])

    return (
        <Wrapper>
            {habitDays.map((day, index) => {
                return (
                    <Weekday
                        key={index}
                        onClick={() => { toggleHabitDay(day.id) }}
                        day={day}
                    >
                        {day.name}
                    </Weekday>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & {
        justify-content: flex-start;
        height: 35px;
    }
`

const Weekday = styled.div`
    & {
        width: 30px;
        height: 30px;

        margin-right: 3px;
        margin-top: 5px;

        font-size: 20px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;
        
        background: ${({ day }) => (day.selected ? '#CFCFCF' : '#FFFFFF')};
        color: ${({ day }) => (day.selected ? '#FFFFFF' : '#DBDBDB')};
    }
`