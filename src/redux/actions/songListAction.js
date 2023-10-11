// Song list action creator
import { SELECTED_SONG } from "./actionType"

export const songList = (song) =>{
    return {
        type : SELECTED_SONG,
        payload : song
    }
}