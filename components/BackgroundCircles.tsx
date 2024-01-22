import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function
    ({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
                duration: 2.5,
            }}
            className='relative flex justify-center items-center'>
            <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-64 animate-ping' />
            <div className='absolute border border-[#333333] rounded-full h-[260px] w-[260px] mt-64 ' />
            <div className='absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-64 ' />
            <div className='border border-[#F7AB0A] opacity-20 h-[550px] w-[550px] absolute mt-64 rounded-full animate-pulse' />
            <div className='absolute border border-[#333333] rounded-full h-[720px] w-[720px] mt-64' />
        </motion.div>
    )
}