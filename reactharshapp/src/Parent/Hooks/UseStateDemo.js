import React from 'react'
import "./hooks.css"

const useState = () => { 

  const initialData = 10;
  const [myNum, setMyNum] = React.useState(initialData);

  return (
    <>
      <div className="main-div">

        <p>{myNum}</p>
        <div className='btn' onClick={() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className='btn' onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>
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

export default useState
