import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [],
        filterStatus: "all"
    },
    reducers: {
        addTask (state, action) { 
            state.tasks.push(action.payload);
        },
        deleteTask (state, action) { 
            state.tasks = state.tasks.filter(item => item.id !== action.payload)
        },
        updateTask (state, action) { 
            let task = state.tasks.find(item => item.id === action.payload.id)
            task.title = action.payload.title;
            task.date = action.payload.date;
            task.time = action.payload.time;
            task.important = action.payload.important;
        },
        completeTask (state, action) { 
            const task = state.tasks.find(item => item.id === action.payload)
            task.completed = !task.completed;
        }, 
        updateFilterStatus (state, action) {
            state.filterStatus = action.payload;
        },
    }
})


export const todoActions = todoSlice.actions 
export default todoSlice;