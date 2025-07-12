import { createSlice,nanoid } from "@reduxjs/toolkit";//here we use nanoid to generate random ids
const initialState={
    todos:[{id:1,text: "Hello World"}]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
        }
    }
})
//state always gives you the access of the values prest in the initialstate ,hands to hand 
//action -> when u want to remove an todo u required its id that action provide
export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer
