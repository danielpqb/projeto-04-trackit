import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from '../../../assets/img/TrackItImage.svg'

export default function Home() {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <LoginWrapper>
            <div>
                <img src={image} alt="" />
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        required
                    // value={clientData.name}
                    // onChange={(e) => { setClientData({ ...clientData, name: e.target.value }) }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="senha"
                        name="password"
                        required
                    // value={clientData.cpf}
                    // onChange={(e) => { setClientData({ ...clientData, cpf: clientCpf }) }}
                    />
                </div>
                <div>
                    <button type="submit">
                        Entrar
                    </button>
                </div>
            </form>
            <div className='register'>
                <Link to={`/cadastro`}>Não tem uma conta? Cadastre-se!</Link>
            </div>
        </LoginWrapper>
    )
}

export const LoginWrapper = styled.div`
    & {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;

        flex-direction: column;
    }

    a {
        color: #52B6FF;
    }

    img {
        margin-top: 80px;
        width: 180px;
        height: 180px;
    }

    .register {
        margin-top: 30px;

        font-size: 17px;
        text-decoration-line: underline;
    }

    button {
        border-radius: 5px;
        
        color: #FFFFFF;
        background: #52B6FF;

        font-size: 21px;

        align-self: center;
        border: none;
        width: 100%;
        height: 45px;
    }

    form {
        width: 100%;
        min-width: 380px;
        max-width: 380px;
        color: #293845;
    }

    form div {
        margin-top: 10px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    form div input {
        font-size: 20px;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding: 15px;
        color: #6e6e6e;
    }
    form div input::placeholder {
        color: #AFAFAF;
        font-size: 20px;
    }
`