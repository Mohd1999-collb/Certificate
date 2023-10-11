import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions/todoAction';

const TodoApp = () => {
    const todo = useSelector(state=> state.todo);
    const dispatch = useDispatch();
    console.log(todo);

    function todoAdd(){
        dispatch(addTodo({
          id : 1,
          payload : "Hello"
        }));
    }
  return (
    <div>
        <h1>{todo[0].payload}</h1>
        <button onClick={todoAdd}>Add Todo</button>
    </div>
  )
}

export default TodoApp