import React from 'react'
import ProjectItems from './helper/ProjectItems'

const Projects = ({ projects }) => {

    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='uppercase tracking-widest font-bold text-2xl text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What {'I\'ve'} Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projects.map(project => {
                        return (
                            <ProjectItems
                                key={project.title}
                                title={project.title}
                                tech={project.tech}
                                backgroundImg={project.backgroundImg}
                                projectUrl={project.projectUrl}
                            />
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default Projects