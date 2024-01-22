import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='min-h-screen flex relative overflow-hidden flex-col md:text-left xl:flex-row max-w-full xl:px-10 justify-center xl:space-y-0 mx-auto items-center text-center'>
        <h3 className='uppercase absolute top-24 text-2xl tracking-[20px] text-gray-500'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[1px] md:tracking-[3px] xl:tracking-[4px] text-gray-500 text-sm'>Hover over a skill for current proficiency </h3>
        <motion.div 
        initial={{x:-300, opacity:0}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        className='grid grid-cols-4 gap-3 mt-10 md:mt-20 xl:pt-20 '>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
        </motion.div>
    </motion.div>
  )
}