import React from 'react'

export default function RegisterInputs({ registerData, setRegisterData, disabled }) {

    return (
        <>
            <input
                disabled={disabled}
                type="email"
                placeholder="email"
                name="email"
                required
                value={registerData.email}
                onChange={(e) => { setRegisterData({ ...registerData, email: e.target.value }) }}
            />
            <input
                disabled={disabled}
                type="password"
                placeholder="senha"
                name="password"
                required
                value={registerData.password}
                onChange={(e) => { setRegisterData({ ...registerData, password: e.target.value }) }}
            />
            <input
                disabled={disabled}
                type="text"
                placeholder="nome"
                name="name"
                required
                value={registerData.name}
                onChange={(e) => { setRegisterData({ ...registerData, name: e.target.value }) }}
            />
            <input
                disabled={disabled}
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