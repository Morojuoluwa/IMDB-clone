
'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const Boxx = () => {

    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit=(e) =>{
      e.preventDefault()

      router.push(`/search/${search}`)

    }
  return (
    <form className=' flex justify-center px-5 max-w-6xl mx-auto ' onSubmit={handleSubmit}>
        <input type="text" placeholder='search keywords' className=' w-full h-14 rounded-md placeholder-gray-500 dark:placeholder-white outline-none bg-transparent flex-1' value={search} onChange={(e)=>setSearch(e.target.value)}/>

        <button disabled={search==''} className=' text-amber-600 disabled:text-gray-400'>Search</button>
    </form>
  )
}

export default Boxx
