import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'

const Card = ({data}) => {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 sm:m-2 transition-shadow duration-300'>
        <Link href={`/movie/${data.id}`}>
            <Image
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`}
            width={500}
            height={300}
            className=' sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'

            />
            <div className=' p-2'>
                <p className=' line-clamp-2 text-lg'>{data.overview}</p>
                <h2 className=' text-lg font-bold truncate'>{data.title || data.name}</h2>
                <p className=' flex items-center'>
                    {data.release_date || data.first_air_date}
                    <FiThumbsUp className=' h-5 mr-1 ml-3'/>
                    {data.vote_count}
                </p>
            </div>
        
        </Link>
   
    </div>
  )
}

export default Card
