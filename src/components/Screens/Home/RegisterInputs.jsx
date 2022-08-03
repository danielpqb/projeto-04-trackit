import React from 'react'

export default function RegisterInputs() {

    return (
        <>
            <input
                type="email"
                placeholder="email"
                name="email"
                required
            // value={clientData.name}
            // onChange={(e) => { setClientData({ ...clientData, name: e.target.value }) }}
            />
            <input
                type="password"
                placeholder="senha"
                name="password"
                required
            // value={clientData.cpf}
            // onChange={(e) => { setClientData({ ...clientData, cpf: clientCpf }) }}
            />
            <input
                type="text"
                placeholder="nome"
                name="name"
                required
            // value={clientData.cpf}
            // onChange={(e) => { setClientData({ ...clientData, cpf: clientCpf }) }}
            />
            <input
                type="text"
                placeholder="foto"
                name="photo"
                required
            // value={clientData.cpf}
            // onChange={(e) => { setClientData({ ...clientData, cpf: clientCpf }) }}
            />
        </>
    )
}