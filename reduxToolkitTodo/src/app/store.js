// for making store we have to configure first
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store=configureStore({
    reducer:todoReducer
})