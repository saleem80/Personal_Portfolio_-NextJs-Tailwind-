import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
    return (
      <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
          <h3 className='uppercase absolute top-24 text-2xl tracking-[20px] text-gray-500'>Projects</h3>
          <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-40'>
              {projects.map((project,i) => (
                  <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center m-10 p-20 md:p-60 md:m-50 h-screen '>{}
                    <img className='max-w-[300px] md:max-w-[400px]' src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" alt="" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-xl font-semibold text-center'> <span className='underline decoration-[#F7AB0A]/50'> Case Study {i+1} of {projects.length}: UPS Clone </span></h4></div>
                  </div>
              ))}
  
  
          </div>
          <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] md:h-[400px] md:top-[23%]  -skew-y-12'/>
      </div>
    )
}

export default Projects