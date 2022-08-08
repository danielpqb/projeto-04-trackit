import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import UserContext from '../../../Context/UserContext'
import { getHabits, postNewHabit } from '../../../services/trackitAPI'
import { ThreeDots } from 'react-loader-spinner'

import Button from '../../Common/Button'
import HabitDays from './HabitDays'

export default function NewHabit({ setUserHabits, setShowNewHabit }) {

    const { userData } = useContext(UserContext)

    const [newHabitData, setNewHabitData] = useState({ name: '', days: [] })

    const [disabled, setDisabled] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        setDisabled(true)

        const promise = postNewHabit(newHabitData, userData.token)
        promise.then(() => {
            const promise = getHabits(userData.token)
            promise.then((res) => {
                setUserHabits(res.data)
                setShowNewHabit(false)
            })
            promise.catch(() => {
                setDisabled(false)
            })
        })
        promise.catch(() => {
            setDisabled(false)
        })

    }

    return (
        <Wrapper disabled={disabled}>
            <form
                action=""
                onSubmit={(e) => {
                    handleSubmit(e)
                }}
            >
                <FormWrapper>
                    <Data>
                        <input
                            disabled={disabled}
                            type="text"
                            placeholder="nome do hábito"
                            name="newHabit"
                            required
                            value={newHabitData.name}
                            onChange={(e) => { setNewHabitData({ ...newHabitData, name: e.target.value }) }}
                        />

                        <HabitDays newHabitData={newHabitData} setNewHabitData={setNewHabitData} disabled={disabled} />
                    </Data>

                    <Buttons>
                        <Button id='cancel' disabled={disabled} onClick={() => { setShowNewHabit(false) }}>
                            {disabled ?
                                <ThreeDots
                                    height="13"
                                    width="51"
                                    color="#FFFFFF"
                                    ariaLabel="three-dots-loading"
                                />
                                :
                                'Cancelar'
                            }
                        </Button>
                        <Button id='save' color='blue' type="submit" disabled={disabled}>
                            {disabled ?
                                <ThreeDots
                                    height="13"
                                    width="51"
                                    color="#FFFFFF"
                                    ariaLabel="three-dots-loading"
                                />
                                :
                                'Salvar'
                            }
                        </Button>
                    </Buttons>
                </FormWrapper>
            </form>
        </Wrapper >
    )
};


const Wrapper = styled.div`
    & {
        height: 180px;
        background: #FFFFFF;
        border-radius: 5px;
    }

    form {
        width: 100%;
        height: 100%;
    }

    input {
        height: 45px;
        width: 100%;

        box-sizing: border-box;

        padding: 10px;

        background: ${({ disabled }) => (disabled ? '#F2F2F2' : '#FFFFFF')};
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-size: 20px;

        color: #b1b1b1;
    }

    input::placeholder {
        font-size: 20px;

        color: #DBDBDB;
    }
`
const FormWrapper = styled.div`
    & {
        flex-direction: column;
        padding: 15px;
    }
`

const Data = styled.div`
    & {
        flex-direction: column;
        justify-content: flex-start;
    }
`

const Buttons = styled.div`
    & {
        justify-content: flex-end;
        height: 35px;
    }
`