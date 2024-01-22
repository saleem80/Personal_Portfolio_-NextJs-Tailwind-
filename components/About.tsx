import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>About</h3>
        <motion.img 
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        viewport={{once:true}}
        src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
        className='mt-20 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]'
        />
        <div className=' space-y-10 px-0 md:px-10'>
            <h4 className='mt-10 text-3xl font-semibold'>Here is a{" "}<span className='underline decoration-[#F7AB0A]/50'>little</span> backgound</h4>
            <p className=' bottom-0 text-sm  md:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos deleniti ad iste veniam esse quibusdam ipsam consequuntur ea! Minima quos iste mollitia ab voluptatem iure laborum excepturi iusto deserunt molestias, expedita rem quas modi est laudantium id a necessitatibus eos odio illo adipisci velit animi. Explicabo fugit aliquam impedit tempora repudiandae temporibus, rem doloremque eius eaque soluta repellendus quis!
            </p>
        </div>
    </motion.div>
  );
}