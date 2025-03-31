import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const{userid}=useParams()//here we use a hook called useParams to get the id from the url
  return (
    <div className='bg-gray-600 text-white text-3px'>User:{userid}
    </div>
  )
}

export default User
