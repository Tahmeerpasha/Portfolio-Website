import React from 'react'
import Image from 'next/image'
import profile from '../public/assets/images/Tahmeer4.jpg'
const About = () => {
    return (
        <div id='about' className='md:h-screen w-full p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase tracking-widest font-bold text-2xl text-[#5651e5]'>About Me</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>I am a Developer</p>
                    <p className='py-2 text-justify pr-10  text-gray-900'>
                        Hello! {'I\'m'} Tahmeer Pasha, a final-year Information Science and Engineering student with a fervor for crafting meaningful digital experiences. My tech journey spans a versatile skill set, encompassing Next.js, React.js, Java, Spring Boot, and more. {'I\'m'} not just a coder, {'I\'m'} a problem solver who thrives on challenges. Beyond the realm of coding, I am deeply passionate about startups, business strategies, and staying abreast of global news. Currently open to exciting opportunities, I bring valuable freelance experience to the table. {'Let\'s'} connect, collaborate, and explore the intersection of technology, business, and the ever-evolving global landscape!                    </p>
                    {/* <pre>Summary:</pre>
                    <pre>Team Player | Smart Worker | Coding enthusiast.</pre>
                    <pre>Learning Web development and Data structures and algorithms.</pre>
                    <pre>Proficient in Java programming language.</pre> */}
                    <a href='#projects' className='py-2 text-gray-600'>Checkout my latest projects!</a>
                </div>
                <div className='w-full rounded h-auto m-auto shadow-xl shadow-gray-400  flex items-center justify-center  hover:scale-105 ease-in duration-300'>
                    <Image className='cursor-pointer rounded ' src={profile} alt='/' width={1980} height={480} />
                </div>
            </div>
        </div>
    )
}

export default About