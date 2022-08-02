import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "../GlobalStyles"

import Home from './Screens/Home/Home'
import Register from './Screens/Register/Register'
import Habits from './Screens/Habits/Habits'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/cadastro" element={<Register />}></Route>
                    <Route path="/habitos" element={<Habits />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}