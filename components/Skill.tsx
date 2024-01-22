import React from 'react'

type Props = {}

const Skill = (props: Props) => {
  return (
    <div className='group relative flex cursor-pointer '>
        <img src='https://www.oracle.com/img/tech/java-logo-v1.svg'
        className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-22 xl:h-22 filter group-hover:grayscale transition duration-300 ease-in-out'
        /> 
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-22 xl:w-22 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl md:text-2xl font-bold text-black opacity-100 '>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill