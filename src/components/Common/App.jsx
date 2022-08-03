import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyles"

import Home from '../Screens/Home/Home'
import Habits from '../Screens/Habits/Habits'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home isLogin={true} />}></Route>
                    <Route path="/cadastro" element={<Home isLogin={false} />}></Route>
                    <Route path="/habitos" element={<Habits />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}