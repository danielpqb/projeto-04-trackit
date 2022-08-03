import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../../Common/Footer'
import Header from '../../Common/Header'
import HabitDays from './HabitDays'

export default function Habits() {
    function handleSubmit(e) {
        e.preventDefault()
    }

    const [showNewHabit, setShowNewHabit] = useState(false)

    return (
        <Wrapper>

            <Header />

            <div className="title">
                <div className='name'>Meus hábitos</div>
                <div className='button' onClick={() => { setShowNewHabit(!showNewHabit) }}>+</div>
            </div>

            {showNewHabit &&
                <div className="new-habit">
                    <form action="" onSubmit={handleSubmit}>
                        <div className='allForm'>
                            <div className='new-habit-info'>
                                <div className='input-habit'>
                                    <input
                                        type="text"
                                        placeholder="nome do hábito"
                                        name="newHabit"
                                        required
                                    // value={clientData.name}
                                    // onChange={(e) => { setClientData({ ...clientData, name: e.target.value }) }}
                                    />
                                </div>

                                <HabitDays />

                            </div>
                            <div className='buttons'>
                                <div>
                                    <button className='cancel'>
                                        Cancelar
                                    </button>
                                </div>
                                <div>
                                    <button type="submit" className='save'>
                                        Salvar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            }

            <div className="no-habit-message">
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </div>
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

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
    }

    .allForm {
        flex-direction: column;
        padding: 15px;
    }

    .input-habit {
        height: 50px;
    }

    .title {
        height: 70px;
        color: #126BA5;
    }

    .title .name {
        justify-content: flex-start;
        font-size: 23px;
    }

    .title .button {
        background: #52B6FF;
        border-radius: 5px;
        width: 40px;
        height: 35px;
        color: #FFFFFF;
        font-size: 27px;
    }

    .no-habit-message {
        height: 75px;
        margin: 25px 0px;
    }

    .new-habit {
        height: 180px;
        background: #FFFFFF;
        border-radius: 5px;
    }

    .new-habit form {
        width: 100%;
        height: 100%;
    }

    .new-habit input {
        height: 45px;
        width: 100%;

        box-sizing: border-box;

        padding: 10px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;

        color: #b1b1b1;
    }

    .new-habit input::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;

        color: #DBDBDB;
    }

    .new-habit .save {
        border-radius: 5px;
        
        color: #FFFFFF;
        background: #52B6FF;

        font-size: 16px;

        align-self: center;
        border: none;
        width: 85px;
        height: 35px;
    }

    .new-habit .cancel {
        font-size: 16px;

        color: #52B6FF;

        background: none;
        border: none;

        width: 110px;
        height: 35px;
    }

    .new-habit-info {
        flex-direction: column;
        justify-content: flex-start;
    }

    .buttons {
        justify-content: flex-end;
        height: 35px;
    }

    .buttons > div {
        width: fit-content;
    }
`