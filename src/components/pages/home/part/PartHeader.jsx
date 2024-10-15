import React from 'react'

const PartHeader = ({title=""}) => {
  return (
    <>
      <h2 className='text-center'>{title}</h2>
      <hr className='w-[50px] mx-auto bg-dark h-[2px] mb-16' />
    </>
  )
}

export default PartHeader