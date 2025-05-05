import React from 'react'

function HeaderDescription({title, description}) {
  return (
    <div>
        <h2 className='font-bold text-primary text-3xl'>{title}</h2>
        <p className='text-lg text-gray-500 ml-2'>{description}</p>
    </div>
  )
}

export default HeaderDescription