import { createSlice } from '@reduxjs/toolkit';
import data from '../../../data.js'


const initialState = data;

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, name, type, description, imageUrl } = action.payload;
            const foundTask = state.find(task => task.id === id);
            if (foundTask) {
                foundTask.name = name;
                foundTask.type = type;
                foundTask.description = description;
                foundTask.imageUrl = imageUrl;
            }
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload);
            console.log(taskFound)
            if (taskFound) {
                const index = state.indexOf(taskFound);
                state.splice(index, 1);
            }
        },
        

    }
}
);

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;