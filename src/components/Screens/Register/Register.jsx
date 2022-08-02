import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/img/TrackItImage.svg'
import { LoginWrapper } from '../Home/Home'

export default function Register() {
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
                    <input
                        type="text"
                        placeholder="nome"
                        name="name"
                        required
                    // value={clientData.cpf}
                    // onChange={(e) => { setClientData({ ...clientData, cpf: clientCpf }) }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="foto"
                        name="photo"
                        required
                    // value={clientData.cpf}
                    // onChange={(e) => { setClientData({ ...clientData, cpf: clientCpf }) }}
                    />
                </div>
                <div>
                    <button type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
            <div className='register'>
                <Link to={`/`}>Já tem uma conta? Faça login!</Link>
            </div>
        </LoginWrapper>
    )
}