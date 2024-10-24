import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [
        { id: 101, name: 'Tiko', gender: 'male', salary: 150000 },
        { id: 102, name: 'Anush', gender: 'female', salary: 270000 },
        { id: 103, name: 'Vahag', gender: 'male', salary: 80000 },
        { id: 104, name: 'Artur', gender: 'male', salary: 300000 }
    ]
}

export const userSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        salaryUp: (state, action) => {
            const person = state.items.find(user => user.id == action.payload)

            if (person) {
                person.salary += 50000
            }

        },

        salaryDown: (state, action) => {
            const person = state.items.find(user => user.id == action.payload)

            if (person.salary > 50000) {
                person.salary -= 50000
            }
        },

        removeUser: (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload)
        },

        swipeUp: (state, action) => {
            const { items } = state

            const personIndex = state.items.findIndex(user => user.id == action.payload)

            if (personIndex != 0) {
                let temp = items[personIndex]
                items[personIndex] = items[personIndex - 1]
                items[personIndex - 1] = temp
            }
        },

        swipeDown: (state, action) => {
            const { items } = state

            const personIndex = state.items.findIndex(user => user.id == action.payload)

            if (personIndex != items.length - 1) {
                let temp = items[personIndex]
                items[personIndex] = items[personIndex + 1]
                items[personIndex + 1] = temp
            }
        }
    }
})

export const reducer = userSlice.reducer
export const { salaryUp, salaryDown, removeUser, swipeUp, swipeDown } = userSlice.actions