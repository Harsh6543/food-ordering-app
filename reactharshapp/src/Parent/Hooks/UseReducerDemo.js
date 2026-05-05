import React, { useReducer, useState } from 'react'
import './hooks.css';

  const reducer = (state, action) => {
    if(action.type === "INCR"){
      state = state + 1;
    }
    if(state > 0 && action.type === "DECR"){
      state = state - 1;
    }
    return state;
  }

  const UseReducerDemo = () => {

 //const [myNum, setMyNum] =  useState(0);
  const initialData = 10;
  const [state, dispatch] =  useReducer(reducer, initialData); 

  return (
    <>
      <div className="main-div">

        <p>{state}</p>
        <div className='btn' onClick={() => dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className='btn' onClick={() => dispatch({type:"DECR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
        
      </div>
    </>
  )
}

export default UseReducerDemo
