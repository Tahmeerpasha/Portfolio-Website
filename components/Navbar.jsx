'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { SiHashnode } from 'react-icons/si';
import logo from '../public/assets/images/Logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])
    return (
        <div id='navbar' className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]' : 'fixed w-full h-20  z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/' className='cursor-pointer'>
                    <Image src={logo} width='80' height='80' alt='/' />
                </Link>
                <div>
                    <ul className='hidden m-4 md:flex'>
                        <Link href='/'>
                            <li className='ml-10 uppercase text-sm hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 uppercase text-sm hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 uppercase text-sm hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 uppercase text-sm hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 uppercase text-sm hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen  bg-black/70' : ""}>
                <div className={
                    nav ?
                        'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
                        'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src={logo} alt='/' width={87} height={35} />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-400 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>{'Let\'s'} build something great together</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase '>
                            <Link href='/' onClick={handleNav}>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about' onClick={handleNav}>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills' onClick={handleNav}>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects' onClick={handleNav}>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact' onClick={handleNav}>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>{'Let\'s'} connect</p>
                            <div className='flex items-center justify-between w-full my-4 sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://www.linkedin.com/in/tahmeer-pasha-b36267202/'>
                                        <FaLinkedinIn />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://github.com/Tahmeerpasha'>
                                        <FaGithub />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://www.instagram.com/'>
                                        <BsInstagram />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://twitter.com/IamTahmeer'>
                                        <BsTwitter />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://tahmeerpasha.hashnode.dev/'>
                                        <SiHashnode />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar