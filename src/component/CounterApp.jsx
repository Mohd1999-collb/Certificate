import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {decreament, increament, reset} from "../redux/actions/counterAction"
const CounterApp = () => {

  // useSelector is alterative of store.getState()
  // const count = useSelector(state=> state); // for one action type
  const count = useSelector(state=> state.counter); // for multiple action type

  // // useSelector is alterative of store.dispatch()
  const dispatch = useDispatch();

  function increase(){
    dispatch(increament());
  }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increament</button>
        <button onClick={()=> dispatch(decreament())}>Decreament</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default CounterApp