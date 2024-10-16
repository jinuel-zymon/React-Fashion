import React from 'react'
import PartHeader from '../part/PartHeader'

const WidgetNewsLetter = () => {
  return (
    <div className='widget border border-gray-200 p-7 mb-10'>
      <PartHeader title='Newsletters'/>
      <p className='text-center mb-4'>Subscribe to our newsletter to stay updated.</p>
      <form action="">
            <input type="email" placeholder='Email' className='outline-none border border-gray-200 px-2 py-2.5 w-full mb-2'/>
            <button type="submit" className='px-2 py-4 bg-red-700 text-white uppercase w-full text-xs'>Subscribe</button>
        </form>
    </div>
  )
}

export default WidgetNewsLetter