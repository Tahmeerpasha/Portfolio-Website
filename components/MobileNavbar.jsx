'use client'
import React, { useState } from 'react';
import { FaSearch, FaTimes, FaList } from 'react-icons/fa';
import logo from '../public/Logo.png'
import Image from 'next/image';

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            {/* Desktop Navbar */}
            <nav className="flex items-center justify-between py-4">
                <Image height={300} width={300} src={logo} alt='Logo' href="#" className="text-3xl font-semibold leading-none text-blue-600 dark:text-gray-400" />

                <div className="hidden lg:flex lg:w-auto lg:space-x-12 lg:items-center">
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300">Home</a>
                    {/* ... other navigation links ... */}
                </div>

                <div className="hidden lg:flex">
                    <a href="#" className="inline-block px-4 py-3 mr-4 text-sm font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-200 rounded dark:hover:border-blue-400 dark:hover:bg-blue-400 dark:border-blue-300 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700">
                        Try it free!
                    </a>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 w-full bg-gray-800 opacity-25 dark:bg-gray-400 lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`} />

            <div className={`absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md dark:bg-gray-800 bg-blue-50 w-80 lg:hidden lg:transform-none lg:relative ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}>
                <div className="flex justify-between px-5 py-2">
                    <a className="text-2xl font-bold dark:text-gray-400" href="#">Logo</a>
                    <button className="rounded-md hover:text-blue-300 lg:hidden dark:text-gray-400" onClick={handleToggle}>
                        <FaTimes />
                    </button>
                </div>

                <ul className="px-5 text-left mt-7">
                    <li className="pb-3">
                        <a href="#" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-100">Home</a>
                    </li>
                    {/* ... other mobile navigation links ... */}
                </ul>

                <div className="px-4 mt-7 lg:hidden">
                    <a href="#" className="inline-block w-full py-3 mr-2 text-xs font-medium leading-none text-center text-gray-100 bg-blue-600 border border-blue-200 rounded px-7 dark:hover:border-blue-400 dark:hover:bg-blue-400 dark:border-blue-300 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700">
                        Try it free!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
