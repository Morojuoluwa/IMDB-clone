import Result from '@/components/Result'
import React from 'react'

const SearchId = async({params}) => {
    const searchTerm = params.id 
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`)

    const data = await res.json()
    const results = data.results;
    console.log(results)

  return (
    <div>
        {results && results.length === 0? (
            <div>No result found</div>
        ):

        (
            results && <Result data={results}/>
        )

      }
      
    </div>
  
  )
}

export default SearchId
