import React from 'react'

const Content = ({activeTab}) => {
  return (
    <div className='w-full h-[500px] bg-black flex justify-center items-center text-white'>
      {activeTab}
    </div>
  )
}

export default Content
