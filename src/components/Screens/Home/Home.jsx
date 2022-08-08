import React, { useContext, useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
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

    const [disabled, setDisabled] = useState(false)

    useEffect(() => {

        const localUser = JSON.parse(localStorage.getItem('user'))
        if (localUser) {
            setUserData(localUser)
            navigate('/hoje')
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        setDisabled(true)

        if (e.nativeEvent.submitter.id === 'login') {
            const promise = postLoginUser(loginData)
            promise.then((res) => {
                setUserData(res.data)
                localStorage.setItem("user", JSON.stringify(res.data));
                navigate('/hoje')
            })
            promise.catch(() => {
                alert('Dados inválidos!')
                setDisabled(false)
            })
        }
        else if (e.nativeEvent.submitter.id === 'register') {
            const promise = postRegisterUser(registerData)
            promise.then(() => {
                setDisabled(false)
                alert('Usuário registrado!')
                navigate('/')
            })
            promise.catch(() => {
                setDisabled(false)
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
            <FormWrapper action="" onSubmit={handleSubmit} disabled={disabled}>
                {isLogin ?
                    <>
                        <LoginInputs loginData={loginData} setLoginData={setLoginData} disabled={disabled} />
                        <Button id='login' color='blue' type="submit" disabled={disabled}>
                            {disabled ?
                                <ThreeDots
                                    height="13"
                                    width="51"
                                    color="#FFFFFF"
                                    ariaLabel="three-dots-loading"
                                />
                                :
                                'Entrar'
                            }
                        </Button>
                    </>
                    :
                    <>
                        <RegisterInputs registerData={registerData} setRegisterData={setRegisterData} disabled={disabled} />
                        <Button id='register' color='blue' type="submit" disabled={disabled}>
                            {disabled ?
                                <ThreeDots
                                    height="13"
                                    width="51"
                                    color="#FFFFFF"
                                    ariaLabel="three-dots-loading"
                                />
                                :
                                'Cadastrar'
                            }
                        </Button>
                    </>
                }
            </FormWrapper>
            <SwitchLoginRegister disabled={disabled}>
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
        background: ${({ disabled }) => (disabled ? '#F2F2F2' : '#FFFFFF')};
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

    a {
        ${({ disabled }) => (disabled ? 'pointer-events: none;' : '')};
    }
 `