import { SELECTED_SONG } from "../actions/actionType";

const iniState = {};

const selectedSongReducer = (state = iniState, action) => {
    switch (action.type) {
        case SELECTED_SONG:
            return action.payload;

        default:
            return state;
    }
}

export default selectedSongReducer;