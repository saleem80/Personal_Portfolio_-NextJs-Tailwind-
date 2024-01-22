import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[270px] h-[340px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{y:-100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1.2}}
            viewport={{once:true}}
            // src='https://introvertdear.com/wp-content/uploads/2016/07/Different-Amazon-Logo.png'
            className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' />
    </article>
  )
}