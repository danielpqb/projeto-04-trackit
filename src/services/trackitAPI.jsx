import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'

function postRegisterUser(newUser) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, newUser)
    return promise
}

function postLoginUser(user) {
    const promise = axios.post(`${BASE_URL}/auth/login`, user)
    return promise
}

function postNewHabit(newHabit) {
    const promise = axios.post(`${BASE_URL}/habits`, newHabit)
    return promise
}

function getHabits() {
    const promise = axios.post(`${BASE_URL}/habits`)
    return promise
}

function deleteHabit(id) {
    const promise = axios.delete(`${BASE_URL}/habits/${id}`)
    return promise
}

function getTodayHabits() {
    const promise = axios.get(`${BASE_URL}/habits/today`)
    return promise
}

function postCheckHabitAsDone(id) {
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`)
    return promise
}

function postUncheckHabitAsDone(id) {
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`)
    return promise
}

function getDailyHabitsHistory() {
    const promise = axios.post(`${BASE_URL}habits/history/daily`)
    return promise
}

export { postRegisterUser, postLoginUser, postNewHabit, getHabits, deleteHabit, getTodayHabits, postCheckHabitAsDone, postUncheckHabitAsDone, getDailyHabitsHistory }