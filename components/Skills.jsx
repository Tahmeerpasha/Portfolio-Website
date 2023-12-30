import React from 'react'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import tailwind from '../public/assets/skills/tailwind.png'
import javascript from '../public/assets/skills/javascript.png'
import react from '../public/assets/skills/react.png'
import nextjs from '../public/assets/skills/nextjs.png'
import github from '../public/assets/skills/github1.png'
import firebase from '../public/assets/skills/firebase.png'
import aws from '../public/assets/skills/aws.png'
import axios from '../public/assets/skills/axios.png'
import rapidApi from '../public/assets/skills/rapidapi.svg'
import springboot from '../public/assets/skills/spring-boot.png'
import postman from '../public/assets/skills/postman.png'
import hibernate from '../public/assets/skills/hibernate.png'
import mySql from '../public/assets/skills/mysql.png'
import java from '../public/assets/skills/java.png'
import Cards from './helper/Cards'

function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className=' tracking-widest uppercase font-bold text-2xl text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>Technologies I know</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* <Cards img={html} text={"HTML"} /> */}
                    {/* <Cards img={css} text={"CSS"} /> */}
                    <Cards img={javascript} text={"JavaScript"} />
                    <Cards img={nextjs} text={"NextJs"} />
                    <Cards img={react} text={"React"} />
                    <Cards img={tailwind} text={"Tailwind CSS"} />
                    <Cards img={java} text={"Java"} />
                    <Cards img={springboot} text={"Spring Boot"} />
                    <Cards img={hibernate} text={"Hibernate"} />
                    <Cards img={mySql} text={"MySQL"} />
                    <Cards img={github} text={"Github"} />
                    <Cards img={firebase} text={"Firebase"} />
                    <Cards img={aws} text={"AWS"} />
                    <Cards img={postman} text={"Postman"} />
                    {/* <Cards img={rapidApi} text={"RapidAPI"} /> */}
                    {/* <Cards img={axios} text={"Axios"} /> */}
                </div>
            </div>
        </div>
    )
}

export default Skills