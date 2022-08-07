import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import image from '../../../assets/img/TrackItImage.svg'
import UserContext from '../../../Context/UserContext'
import { postLoginUser, postRegisterUser } from '../../../services/trackitAPI'

import Button from '../../Common/Button'
import LoginInputs from './LoginInputs'
import RegisterInputs from './RegisterInputs'

export default function Home({ isLogin }) {
    const navigate = useNavigate()

    const { setUserData } = useContext(UserContext)

    function handleSubmit(e) {
        e.preventDefault()

        if (e.nativeEvent.submitter.id === 'login') {
            const promise = postLoginUser(loginData)
            promise.then((res) => {
                setUserData(res.data)
                navigate('/habitos')
            })
            promise.catch((res) => {
                alert('ERRO!')
                console.log(res)
            })
        }
        else if (e.nativeEvent.submitter.id === 'register') {
            const promise = postRegisterUser(registerData)
            promise.then(() => {
                alert('Usuário registrado!')
                navigate('/')
            })
            promise.catch((res) => {
                alert('ERRO!')
                console.log(res)
            })
        }
    }

    const [registerData, setRegisterData] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    })
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    return (
        <Wrapper>
            <div>
                <img src={image} alt="" />
            </div>
            <FormWrapper action="" onSubmit={handleSubmit}>
                {isLogin ?
                    <>
                        <LoginInputs loginData={loginData} setLoginData={setLoginData} />
                        <Button id='login' color='blue' type="submit">
                            Entrar
                        </Button>
                    </>
                    :
                    <>
                        <RegisterInputs registerData={registerData} setRegisterData={setRegisterData} />
                        <Button id='register' color='blue' type="submit">
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