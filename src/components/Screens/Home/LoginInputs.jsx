import React from 'react'

export default function LoginInputs({ loginData, setLoginData, disabled }) {

    return (
        <>
            <input
                disabled={disabled}
                type="email"
                placeholder="email"
                name="email"
                required
                value={loginData.email}
                onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
            />
            <input
                disabled={disabled}
                type="password"
                placeholder="senha"
                name="password"
                required
                value={loginData.password}
                onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
            />
        </>
    )
}