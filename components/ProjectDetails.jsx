import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ProjectDetails = ({ name, imageSrc, techStack, overview, demoLink, codeLink }) => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute  left-0 top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
                    <Image src={imageSrc} alt={name} className='absolute z-1 w-[50%] fill-white' layout='fill' objectFit='fill' />
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='p-3 lg:text-2xl font-bold'> {name}</p>
                    <h2 className='p-2'>Overview</h2>
                    <p className='px-2 py-2'>{overview}</p>
                    <button className='px-8 py-2 mt-4 mr-8'><Link href={demoLink}>Demo</Link></button>
                    <button className='px-8 py-2 mt-4'><Link href={codeLink}>Code</Link></button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            {techStack.map((tech) => (
                                <p key={tech} className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1' />
                                    {tech}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <Link href='/#projects'><p className='underline cursor-pointer'>Go Back</p></Link>
            </div>
        </div>
    );
};

export default ProjectDetails;
