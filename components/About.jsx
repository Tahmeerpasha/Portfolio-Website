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
                    <p className='py-2 text-gray-600'>I am a Software Developer</p>
                    <p className='py-2 text-justify pr-10  text-gray-900'>
                        Hello! {"I'm"} Tahmeer Pasha, a Full Stack Developer with a strong foundation in building impactful digital solutions. My expertise includes a diverse array of technologies such as JavaScript, React.js, Next.js, Nest.js, Java, and Spring Boot, enabling me to tackle complex challenges with innovative approaches.
                        With hands-on experience leading projects for clients like Omron Healthcare and Mardia Engineering, I have successfully delivered results that enhance operational efficiency and drive business growth. Currently, I am working at Webknot Technologies, where I am passionate about building SaaS products that solve real-world problems. I continuously seek opportunities to expand my knowledge and skills.
                        Open to exciting new challenges, I am eager to contribute my freelance experience and collaborative spirit to dynamic teams. {"Let's"} connect and explore how we can innovate together!
                    </p>
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