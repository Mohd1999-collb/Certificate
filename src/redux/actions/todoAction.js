// Action creator
import { ADD_TODO, REMOVE_TODO } from "./actionType";

export const addTodo = (item)=>{
    return {
        type : ADD_TODO,
        payload: item
    }
}

export const removeTodo = (id)=>{
    return {
        type : REMOVE_TODO,
        payload: id
    }
}