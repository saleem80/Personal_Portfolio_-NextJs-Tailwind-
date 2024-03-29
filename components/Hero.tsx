import Link from 'next/link';
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
// import profile from '../public/profile.webp';


type Props = {}

export default function Hero({}: Props) {
    const [text,count]=useTypewriter({
        words: ["Hi, The Name's Saleem Khan",
            "xyz.tsx",
            "<Butlove/>"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
    <div className=' h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgke_uVFWXUtgz09-kf-F8AY6ZGk2pBH7HD1lILfQOQ&usqp=CAU&ec=48600112' alt="im" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10 '>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </h1>
          <div className='pt-5'>
            <Link href='#about'>
                <button className='heroButton'>About</button>
            </Link>
            <Link href='#experience'>
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href='#skills'>
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
                <button className='heroButton'>Projects</button>
            </Link>
          </div>
        </div>
    </div>
  )
}