'use client'

import {useTheme} from 'next-themes'
import {MdLightMode, MdDarkMode} from 'react-icons/md'


import React, { useEffect, useState } from 'react'

const Switch = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    const {theme, systemTheme, setTheme} = useTheme()
    const currentTheme = theme == 'system'? systemTheme: theme
  return (
    <div>
      {
        mounted && currentTheme == 'dark'?
         <MdLightMode className=' text-xl cursor-pointer hover:text-amber-500' onClick={()=>setTheme('light')}/>:
         <MdDarkMode className=' text-xl cursor-pointer hover:text-amber-500' onClick={()=>setTheme('dark')}/>
      }
    </div>
  )
}

export default Switch
