import React from 'react'


const Card = ({promotion}) => {
  console.log(promotion);
  const { id, image_url, title, caption } = promotion;
  console.log(promotion);
  return (
    <>
      <div className='w-full border-2 border-gray-200 rounded-md h-full'
      style={{ 
        backgroundImage: `url('${image_url}')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <div className='p-6'>
            <h1 className='text-lg font-bold text-gray-100'>{title}</h1>
            <h1 className='text-sm text-gray-100'>{caption}</h1>
        </div>
      </div>
    </>
  )
}

export default Card