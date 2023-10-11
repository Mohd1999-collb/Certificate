import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import songsData from '../data/songData';
import { songList } from '../redux/actions/songListAction';

const SongDisplay = () => {
  const song = useSelector(state => state.songSelect);
  const dispatch  = useDispatch();

  return (
    <div style={{background: "teal"}}>
      <h1>Song List</h1>
      <div >
        {
          songsData.map((item)=> {
            return <h2 style={{border: "5px solid green", cursor: "pointer", textAlign:"center"}} key={item.id} onClick={()=>dispatch(songList(item))}>{item.name}</h2>
          })
        }
      </div>

      <div style={{textAlign: "center"}}>
        <h1>Song Information</h1>
        <p>{song.id}</p>
        <p>{song.name}</p>
        <p>{song.artist}</p>
        <p>{song.album}</p>
        <p>{song.duration}</p>
      </div>
    </div>
  )
}

export default SongDisplay