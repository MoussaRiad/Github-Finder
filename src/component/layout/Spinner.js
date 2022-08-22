import React from 'react'
import spinner from './assets/spinner.gif'

export default function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img 
            className='text-center mx-auto' 
            src={spinner} 
            alt='Loading ...' 
            width={180}
        />
    </div>
  )
}
