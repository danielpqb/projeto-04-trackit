import React from 'react'

export default function RegisterInputs({ registerData, setRegisterData }) {

    return (
        <>
            <input
                type="email"
                placeholder="email"
                name="email"
                required
                value={registerData.email}
                onChange={(e) => { setRegisterData({ ...registerData, email: e.target.value }) }}
            />
            <input
                type="password"
                placeholder="senha"
                name="password"
                required
                value={registerData.password}
                onChange={(e) => { setRegisterData({ ...registerData, password: e.target.value }) }}
            />
            <input
                type="text"
                placeholder="nome"
                name="name"
                required
                value={registerData.name}
                onChange={(e) => { setRegisterData({ ...registerData, name: e.target.value }) }}
            />
            <input
                type="text"
                placeholder="foto"
                name="photo"
                required
                value={registerData.image}
                onChange={(e) => { setRegisterData({ ...registerData, image: e.target.value }) }}
            />
        </>
    )
}