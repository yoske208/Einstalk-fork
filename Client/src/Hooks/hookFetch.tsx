import React, { useState } from 'react'


export function useFetch<T>(url:string):any  {
  const [puzzels,setPuzzels] = useState<T | null>(null)
  const [users,setUsers] = useState<T | null>(null)
  const [token,setToken] = useState<T | null>(null)
  const [error,setError] = useState<string | null>(null)

  const getpuzzelsFatch = async ()=> {
    try {
      const res = await fetch(url,{
        credentials: "include"
      })
      if(!res.ok) 
      {const errorPuzzels = await res.json()
      throw new Error(`error from user  ${errorPuzzels.error.message}`)};
      }
      
      
     catch (error) {
      
    }
  }

  return (
    <div>useFetch</div>
  )
}

export default useFetch