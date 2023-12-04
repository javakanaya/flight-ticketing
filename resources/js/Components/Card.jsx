import React from 'react'


const Card = () => {
  return (
    <>
      <div className='w-full border-2 border-gray-200 rounded-md h-full'
      style={{ 
        backgroundImage: "url('/storage/assets/jakarta.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <div className='p-6'>
            <h1 className='text-lg font-bold text-gray-100'>Jakarta</h1>
            <h1 className='text-sm font-medium text-gray-50 '>100 tickets</h1>
        </div>
      </div>
    </>
  )
}

export default Card