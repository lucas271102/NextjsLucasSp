
'use client'
import { Button } from '@nextui-org/button'
import React from 'react'

const PostCards = ({car}) => {
  return (
    <div className='flex'>

<div key={car.id}  >
             <h3>{car.title}</h3>
             <img src={car.url} className='w-24 h-24 '/>
             <button onClick={()=>{
                alert('Boton andando.')
             }}>Clic</button>
          </div>

    </div>
  )
}

export default PostCards