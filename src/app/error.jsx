'use client'

import React, { useEffect } from 'react'

const error = ({error, reset}) => {

    useEffect(()=>{

    },[error])
  return (
    <div className=' flex flex-col h-screen justify-center items-center'>
      <h1>Something went wrong.Please try agaim</h1>
      <button className=' hover:text-amber-600' onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default error
