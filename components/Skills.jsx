"use client"
import React, { useState } from 'react';
import html from '../public/assets/skills/html.png';
import css from '../public/assets/skills/css.png';
import tailwind from '../public/assets/skills/tailwind.png';
import javascript from '../public/assets/skills/javascript.png';
import react from '../public/assets/skills/react.png';
import nextjs from '../public/assets/skills/nextjs.png';
import github from '../public/assets/skills/github1.png';
import firebase from '../public/assets/skills/firebase.png';
import aws from '../public/assets/skills/aws.png';
import axios from '../public/assets/skills/axios.png';
import rapidApi from '../public/assets/skills/rapidapi.svg';
import springboot from '../public/assets/skills/spring-boot.png';
import postman from '../public/assets/skills/postman.png';
import hibernate from '../public/assets/skills/hibernate.png';
import mySql from '../public/assets/skills/mysql.png';
import java from '../public/assets/skills/java.png';
import express from '../public/assets/skills/express.webp';
import node from '../public/assets/skills/nodejs.jpg';
import jwt from '../public/assets/skills/jwt.png';
import mongo from '../public/assets/skills/mongo.png';
import Cards from './helper/Cards';

function Skills() {
    const [showAll, setShowAll] = useState(false);

    const skills = [
        { img: html, text: "HTML" },
        { img: css, text: "CSS" },
        { img: javascript, text: "JavaScript" },
        { img: nextjs, text: "NextJs" },
        { img: react, text: "React" },
        { img: tailwind, text: "Tailwind CSS" },
        { img: express, text: "ExpressJS" },
        { img: node, text: "NodeJS" },
        { img: java, text: "Java" },
        { img: springboot, text: "Spring Boot" },
        { img: hibernate, text: "Hibernate" },
        { img: mySql, text: "MySQL" },
        { img: mongo, text: "MongoDB" },
        { img: github, text: "Github" },
        { img: firebase, text: "Firebase" },
        { img: aws, text: "AWS" },
        { img: postman, text: "Postman" },
        { img: jwt, text: "JWT" },
        { img: rapidApi, text: "RapidAPI" },
        { img: axios, text: "Axios" },
    ];

    const skillsToShow = showAll ? skills : skills.slice(0, 8);

    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='tracking-widest uppercase font-bold text-2xl text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>Technologies I know</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {skillsToShow.map((skill, index) => (
                        <Cards key={index} img={skill.img} text={skill.text} />
                    ))}
                </div>
                {skills.length > 8 && (
                    <div className='text-center mt-8'>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className='px-6 py-2 bg-[#5651e5] text-white rounded-lg'
                        >
                            {showAll ? 'Show Less' : 'View More'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
