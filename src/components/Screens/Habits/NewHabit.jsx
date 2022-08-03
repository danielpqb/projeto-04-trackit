import React from 'react'
import styled from 'styled-components'

import Button from '../../Common/Button'
import HabitDays from './HabitDays'

export default function NewHabit() {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <Wrapper>
            <form action="" onSubmit={handleSubmit}>
                <FormWrapper>
                    <Data>
                        <input
                            type="text"
                            placeholder="nome do hábito"
                            name="newHabit"
                            required
                        // value={clientData.name}
                        // onChange={(e) => { setClientData({ ...clientData, name: e.target.value }) }}
                        />

                        <HabitDays />
                    </Data>

                    <Buttons>
                        <Button>Cancelar</Button>
                        <Button color='blue' type="submit">Salvar</Button>
                    </Buttons>
                </FormWrapper>
            </form>
        </Wrapper>
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

        background: #FFFFFF;
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