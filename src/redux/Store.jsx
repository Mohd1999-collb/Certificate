// All the changes store this file
import counterReducer from "./Reducers/counterReducer";
import todoReducer from "./Reducers/todoReducer";
import selectedSongReducer from "./Reducers/selectedSongReducer";
import { combineReducers, createStore } from "redux";

// for multiple action type
const rootReducer = combineReducers({
    counter : counterReducer,
    todo : todoReducer,
    songSelect : selectedSongReducer
})
// const Store = createStore(counterReducer); // for only one action type
const Store = createStore(rootReducer); 
export default Store;