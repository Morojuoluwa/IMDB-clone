import React from 'react'
import Menuitem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
const Header = () => {
  return (
    <div className=' flex justify-between items-center max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <Menuitem title='Home' address='/' Icon={AiFillHome}/>
        <Menuitem title='About' address='/about' Icon={BsFillInfoCircleFill}/>
      </div>
      <Link href='/' className=' flex items-center mt-1 gap-1'>
        <span className=' text-[1rem] font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
        <span className=' text-xl hidden sm:inline'>Clone</span>
      </Link>
    </div>
    
  )
}

export default Header
