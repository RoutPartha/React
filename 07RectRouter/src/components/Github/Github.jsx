import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()//from useLoaderData() we can get all the data from the server
    //Type-1
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/RourPartha')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)

    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4px text-3xl'> Github followers:{data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300}/> 
    </div>//here from data.followers we can access all the data from the server
  )
}

export default Github
//Type-2
export const githubInfoLoader=async()=>{
   const response=await fetch('https://api.github.com/users/RoutPartha')
   return response.json
}
