import { INCREAMENT, DECREAMENT, RESET } from "./actionType"

// Action creator has type with property
export const increament = (value = 1)=>{
    return {
        type : INCREAMENT,
        value : value
    }
}
export const decreament = (value = 1)=>{
    return {
        type : DECREAMENT,
        value : value
    }
}
export const reset = ()=>{
    return {
        type : RESET,
    }
}