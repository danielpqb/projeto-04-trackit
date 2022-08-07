import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'

function postRegisterUser(newUser) {
    const promise = axios.post(
        `${BASE_URL}/auth/sign-up`,
        newUser)
    return promise
}

function postLoginUser(user) {
    const promise = axios.post(
        `${BASE_URL}/auth/login`,
        user)
    return promise
}

function postNewHabit(newHabit, token) {
    const promise = axios.post(
        `${BASE_URL}/habits`,
        newHabit,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
    return promise
}

function getHabits(token) {
    const promise = axios.get(
        `${BASE_URL}/habits`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
    return promise
}

function deleteHabit(id, token) {
    const promise = axios.delete(
        `${BASE_URL}/habits/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
    return promise
}

function getTodayHabits(token) {
    const promise = axios.get(
        `${BASE_URL}/habits/today`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
    return promise
}

function postCheckHabitAsDone(id, token) {
    const promise = axios.post(
        `${BASE_URL}/habits/${id}/check`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
    return promise
}

function postUncheckHabitAsDone(id, token) {
    const promise = axios.post(
        `${BASE_URL}/habits/${id}/uncheck`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
    return promise
}

function getDailyHabitsHistory(token) {
    const promise = axios.get(
        `${BASE_URL}habits/history/daily`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
    return promise
}

export {
    getHabits,
    getTodayHabits,
    getDailyHabitsHistory,
    postRegisterUser,
    postLoginUser,
    postNewHabit,
    postCheckHabitAsDone,
    postUncheckHabitAsDone,
    deleteHabit,
}