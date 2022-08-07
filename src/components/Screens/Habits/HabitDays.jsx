import React, { useState } from 'react'
import styled from 'styled-components'

export default function HabitDays({ selectedDays = [], newHabitData, setNewHabitData }) {

    function toggleHabitDay(id) {
        for (const day of habitDays) {
            if (id === day.id) {
                day.selected = !day.selected
            }
        }

        setHabitDays([...habitDays])

        const selecteds = habitDays.filter((element) => { return element.selected === true }).map((element) => { return element.id })
        setNewHabitData({ ...newHabitData, days: selecteds })

    }

    const [habitDays, setHabitDays] = useState([
        { id: 0, name: 'D', selected: (selectedDays.indexOf(0) === -1) ? false : true },
        { id: 1, name: 'S', selected: (selectedDays.indexOf(1) === -1) ? false : true },
        { id: 2, name: 'T', selected: (selectedDays.indexOf(2) === -1) ? false : true },
        { id: 3, name: 'Q', selected: (selectedDays.indexOf(3) === -1) ? false : true },
        { id: 4, name: 'Q', selected: (selectedDays.indexOf(4) === -1) ? false : true },
        { id: 5, name: 'S', selected: (selectedDays.indexOf(5) === -1) ? false : true },
        { id: 6, name: 'S', selected: (selectedDays.indexOf(6) === -1) ? false : true },
    ])

    return (
        <Wrapper>
            {habitDays.map((day, index) => {
                return (
                    <Weekday
                        key={index}
                        onClick={() => {
                            if (newHabitData !== undefined) {
                                toggleHabitDay(day.id)
                            }
                        }}
                        day={day}
                    >
                        {day.name}
                    </Weekday>
                )
            })}
        </Wrapper >
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