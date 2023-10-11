import { ADD_TODO, REMOVE_TODO } from "../actions/actionType"

const todoArr = [];

// todoarr = [ {id : 1, value : "Hello"}]

const todoReducer = (state = todoArr, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];    
        case REMOVE_TODO:
            return state.filter((item) => item.id !== action.payload);    
        default:
            return state;
    }
}

export default todoReducer