import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyles"

import UserContext from '../../Context/UserContext'
import Home from '../Screens/Home/Home'
import Habits from '../Screens/Habits/Habits'
import Today from '../Screens/Today/Today'
import History from '../Screens/History/History'

export default function App() {
    const [userData, setUserData] = useState({})

    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value={{ userData, setUserData }}>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Home isLogin={true} />}></Route>
                        <Route path="/cadastro" element={<Home isLogin={false} />}></Route>
                        <Route path="/habitos" element={<Habits />}></Route>
                        <Route path="/hoje" element={<Today />}></Route>
                        <Route path="/historico" element={<History />}></Route>
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}