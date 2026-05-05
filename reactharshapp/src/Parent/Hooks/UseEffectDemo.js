import React, { useState, useEffect } from 'react';
import './hooks.css';

const UseEffectDemo = () => {

  //const initialData = 10;
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Chats(${myNum})`
  })

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
        
      </div>
    </>
  )
}

export default UseEffectDemo