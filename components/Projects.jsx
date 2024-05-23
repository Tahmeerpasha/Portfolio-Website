"use client"
import React, { useState } from 'react';
import ProjectItems from './helper/ProjectItems';

const Projects = ({ projects }) => {
    const [showAll, setShowAll] = useState(false);

    // Determine the projects to display
    const projectsToShow = showAll ? projects : projects.slice(0, 4);

    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='uppercase tracking-widest font-bold text-2xl text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What {'I\'ve'} Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projectsToShow.map((project) => (
                        <ProjectItems
                            key={project.title}
                            title={project.title}
                            tech={project.tech}
                            backgroundImg={project.backgroundImg}
                            projectUrl={project.projectUrl}
                        />
                    ))}
                </div>
                {projects.length > 4 && (
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
};

export default Projects;
