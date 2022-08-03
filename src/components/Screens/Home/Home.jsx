import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from '../../../assets/img/TrackItImage.svg'

import Button from '../../Common/Button'
import LoginInputs from './LoginInputs'
import RegisterInputs from './RegisterInputs'

export default function Home({ isLogin }) {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <Wrapper>
            <div>
                <img src={image} alt="" />
            </div>
            <FormWrapper action="" onSubmit={handleSubmit}>
                {isLogin ?
                    <>
                        <LoginInputs />
                        <Button color='blue' type="submit">
                            Entrar
                        </Button>
                    </>
                    :
                    <>
                        <RegisterInputs />
                        <Button color='blue' type="submit">
                            Cadastrar
                        </Button>
                    </>
                }
            </FormWrapper>
            <SwitchLoginRegister>
                <Link to={isLogin ? '/cadastro' : '/'}>Não tem uma conta? Cadastre-se!</Link>
            </SwitchLoginRegister>
        </Wrapper>
    )
}

export const Wrapper = styled.div`
    & {
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

    button {
        font-size: 21px;
        width: 100%;
        height: 45px;
    }
`

const FormWrapper = styled.form`
    & {
        width: 100%;
        min-width: 380px;
        max-width: 380px;
        color: #293845;
    }

    input {
        margin-bottom: 10px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    
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

    input::placeholder {
        color: #AFAFAF;
        font-size: 20px;
    }
`

const SwitchLoginRegister = styled.div`
    & {
        margin-top: 30px;

        font-size: 17px;
        text-decoration-line: underline;
    }
 `