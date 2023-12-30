import React from 'react'
import Image from 'next/image'
const Cards = (props) => {
    return (
        <div>
            <div className='p-6 flex justify-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto flex'>
                        <Image src={props.img} width={250} height={250} alt='/' className='w-[70%]' />
                        <div className='flex ml-5 flex-col  items-center justify-center'>
                            <h3>{props.text}</h3>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Cards