import React from 'react'

export default function LoginInputs({ loginData, setLoginData }) {

    return (
        <>
            <input
                type="email"
                placeholder="email"
                name="email"
                required
                value={loginData.email}
                onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
            />
            <input
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