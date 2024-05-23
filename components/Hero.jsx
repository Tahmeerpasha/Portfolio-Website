'use client'
import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { TbLetterR } from "react-icons/tb";
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from "react-icons/fa6";
import { SiHashnode } from 'react-icons/si';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
function Hero() {
    const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK || '';
    const linkedInLink = process.env.NEXT_PUBLIC_LINKEDIN_LINK || '';
    const githubLink = process.env.NEXT_PUBLIC_GITHUB_LINK || '';
    const instagramLink = process.env.NEXT_PUBLIC_INSTAGRAM_LINK || '';
    const twitterLink = process.env.NEXT_PUBLIC_TWITTER_LINK || '';
    const hashnodeLink = process.env.NEXT_PUBLIC_HASHNODE_LINK || '';
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        {'Let\'s'} build something great together</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi 👋, {'I\'m'} <span className='text-[#5651e5]'>Tahmeer Pasha </span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                1000,
                                "Frontend Developer",
                                1000,
                                "Java Developer",
                                1000,
                                "Software Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='py-4 text-gray-400 '>
                        Passionate Full Stack Engineer | Transforming Ideas into Solutions | Embracing Innovation and Continuous Learning
                    </p>
                    <div className='flex items-center justify-between max-w-[400px] m-auto py4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href={linkedInLink}>
                                <FaLinkedinIn />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href={githubLink}>
                                <FaGithub />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href={instagramLink}>
                                <BsInstagram />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href={twitterLink}>
                                <FaXTwitter />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href={hashnodeLink}>
                                <SiHashnode />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href={resumeLink}>
                                <TbLetterR className='font-bold' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero