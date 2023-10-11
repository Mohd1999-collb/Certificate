// All the counter logic written here

import { INCREAMENT, DECREAMENT, RESET } from "../actions/actionType";

const iniState = 0;
const counterReducer = (state = iniState, action) => {
   switch (action.type) {
      case INCREAMENT:
         return state + action.value;
      case DECREAMENT:
         return state - action.value;
      case RESET:
         return 0;
      default:
         return state;
   }
}
export default counterReducer;

// CounterReducer(100, {type : INCREAMENT, value : value})