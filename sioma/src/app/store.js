import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/taskSlice';

// devolver objeto que nos permite manejar el estado en multiples archivos
export const store = configureStore(
    {
        reducer: {
            tasks: tasksReducer,
        },        
    })